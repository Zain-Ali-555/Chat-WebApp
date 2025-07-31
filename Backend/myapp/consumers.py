import json
from channels.generic.websocket import AsyncWebsocketConsumer
from channels.db import database_sync_to_async
from .models import Message
from .serializers import MessageSerializer
from django.contrib.auth.models import User

class MessageConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        self.user = self.scope['user']
        if self.user.is_authenticated:
            self.room_group_name = f"chat_{self.user.id}"  # Room for each user
            await self.channel_layer.group_add(
                self.room_group_name,
                self.channel_name
            )
            await self.accept()

    async def disconnect(self, close_code):
        # Leave room group
        await self.channel_layer.group_discard(
            self.room_group_name,
            self.channel_name
        )

    async def receive(self, text_data):
        text_data_json = json.loads(text_data)
        content = text_data_json['content']
        recipient_username = text_data_json['recipient']
        
        recipient = await database_sync_to_async(User.objects.get)(username=recipient_username)
        message = await database_sync_to_async(Message.objects.create)(
            sender=self.user,
            recipient=recipient,
            content=content
        )
        
        # Serialize message and send to WebSocket
        message_serializer = MessageSerializer(message)
        await self.channel_layer.group_send(
            self.room_group_name,
            {
                'type': 'chat_message',
                'message': message_serializer.data
            }
        )

    async def chat_message(self, event):
        message = event['message']
        await self.send(text_data=json.dumps({
            'message': message
        }))

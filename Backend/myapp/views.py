from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Message
from .serializers import MessageSerializer
from django.contrib.auth.models import User
from django.db.models import Q

class SendMessageView(APIView):
    permission_classes = [IsAuthenticated]  # Ensures only authenticated users can send messages

    def post(self, request):
        sender = User.objects.get(id=request.user.id)
        recipient_username = request.data.get('recipient')
        content = request.data.get('content')

        if not recipient_username:
            return Response({"error": "recipient is mandatory"}, status=status.HTTP_400_BAD_REQUEST)
        if not content:
            return Response({"error": "content is mandatory"}, status=status.HTTP_400_BAD_REQUEST)

        try:
            recipient = User.objects.get(username=recipient_username)
        except User.DoesNotExist:
            return Response({"error": "Recipient not found"}, status=status.HTTP_404_NOT_FOUND)

        # Create the message
        message = Message.objects.create(sender=sender, recipient=recipient, content=content)
        serializer = MessageSerializer(message)
        return Response(serializer.data, status=status.HTTP_201_CREATED)


class GetMessagesView(APIView):
    permission_classes = [IsAuthenticated]  # Ensures only authenticated users can access messages

    def get(self, request):
        login_user = User.objects.get(id=request.user.id)
        second_person = request.data.get('second_person')

        if not second_person:
            return Response({"error": "second_person is mandatory"}, status=status.HTTP_400_BAD_REQUEST)

        try:
            second_user = User.objects.get(username=second_person)
        except User.DoesNotExist:
            return Response({"error": "Recipient not found"}, status=status.HTTP_404_NOT_FOUND)

        # Get all messages exchanged between the logged-in user and the second user
        messages = Message.objects.filter(
            Q(sender=login_user, recipient=second_user) |
            Q(sender=second_user, recipient=login_user)
        )

        # Serialize all messages
        serializer = MessageSerializer(messages, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

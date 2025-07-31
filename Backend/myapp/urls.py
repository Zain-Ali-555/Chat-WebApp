from django.urls import path
from . import views

urlpatterns = [
    path('send_message/', views.SendMessageView.as_view(), name='send_message'),
    path('get_messages/', views.GetMessagesView.as_view(), name='send_message'),
]

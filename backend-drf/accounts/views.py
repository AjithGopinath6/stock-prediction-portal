from django.shortcuts import render
from .serializers import UserSerializer
from rest_framework import generics
from django.contrib.auth.models import User
from rest_framework.permissions import AllowAny

# Create your views here.

class RegisterView(generics.CreateAPIView):
    #Represents the base queryset — here, it’s all users.
    queryset = User.objects.all()
    #This tells DRF which serializer to use for request data.
    serializer_class = UserSerializer
    permission_classes = [AllowAny]  # Allow any user to create an account

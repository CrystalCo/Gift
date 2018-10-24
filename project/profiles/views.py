from django.shortcuts import render
from profiles.models import Profile
from profiles.serializers import ProfileSerializer
from rest_framework import generics

class ProfileListCreate(generics.ListCreateAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
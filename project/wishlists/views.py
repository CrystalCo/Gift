from django.shortcuts import render
from wishlists.serializers import WishSerializer
from rest_framework import generics

# Create your views here.
class WishListCreate(generics.ListCreateAPIView):
    queryset = Wish.objects.all()
    serializer_class = WishSerializer

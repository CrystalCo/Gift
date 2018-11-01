from django.db import models
from django.utils import timezone

class Profile(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    measurements = models.CharField(max_length=20)
    created_at = models.DateTimeField(auto_now_add=True)

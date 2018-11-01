from django.db import models
from django.utils import timezone

# Create your models here.

class ListItem(models.Model):
    productName = models.CharField(max_length=200)
    price = models.DecimalField(max_digits=12, decimal_places=2)
    brand = models.CharField(max_length=100)
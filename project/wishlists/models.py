from django.db import models

# Create your models here.
class Wish(models.Model):
    productName = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=15, decimal_places=2)
    brand = models.CharField(max_length=100)

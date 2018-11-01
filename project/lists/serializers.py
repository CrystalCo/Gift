from rest_framework import serializers
from lists.models import ListItem

class ListItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = ListItem
        fields = '__all__'

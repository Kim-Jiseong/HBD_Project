from rest_framework import serializers
from .models import Photo, Letter


class PhotoSerializer(serializers.ModelSerializer):
    img = serializers.ImageField(use_url=True)
    class Meta:        
        model = Photo
        fields = "__all__"

class LetterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Letter
        fields = "__all__"
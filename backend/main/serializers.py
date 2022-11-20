from rest_framework import serializers
from .models import Photo, Letter


class PhotoSerializer(serializers.HyperlinkedSerializer):
    # img = serializers.ImageField(use_url=True)
    class Meta:        
        model = Photo
        fields = "__all__"

class LetterSerializer(serializers.HyperlinkedSerializer):
    class Meta:
        model = Letter
        fields = "__all__"
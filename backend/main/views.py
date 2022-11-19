from django.shortcuts import render
from .models import Photo, Letter 
from rest_framework import viewsets
# Create your views here.
from .serializers import (
    PhotoSerializer,
    LetterSerializer,
)


class PhotoViewSet(viewsets.ModelViewSet):
    queryset = Photo.objects.all()
    serializer_class = PhotoSerializer

class LetterViewSet(viewsets.ModelViewSet):
    queryset = Letter.objects.order_by("-created_at")
    serializer_class = LetterSerializer
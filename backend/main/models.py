from django.db import models
from django.utils import timezone


# Create your models here.
class Photo(models.Model):
    title = models.TextField()
    date = models.TextField()
    img = models.ImageField(upload_to='posts/photo')
    info = models.TextField()
    created_at = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.title

class Letter(models.Model):
    title = models.TextField(null=True)
    data = models.TextField()
    author = models.TextField(null=True)
    receiver = models.TextField(null=True)
    created_at = models.DateTimeField(default=timezone.now)
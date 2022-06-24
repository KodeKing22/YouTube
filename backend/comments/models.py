from django.db import models

# Create your models here.
class Comments(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    video_id = models.CharField(max_length=30)
    text = models.CharField(max_length=100)
    likes = models.IntegerField()
    dislikes = models.IntegerField()

class Replay(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    comment = models.ForeignKey(User, on_delete=models.CASCADE)
    text = models.CharField(max_length=100)
    
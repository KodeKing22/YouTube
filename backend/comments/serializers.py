from rest_framework import serializers
from .models import Comments, Replay


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comments
        fields = ['id', 'video_id', 'text', 'likes', 'dislikes' 'user_id']
        depth = 1

class ReplaySerializer(serializers.ModelSerializer):
    class Meta:
        model = Replay
        fields = ['id', 'user', 'text', 'comment']
        depth = 1
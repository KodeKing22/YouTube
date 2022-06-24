from rest_framework import serializers
from .models import Comments


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comments
        fields = ['id', 'video_id', 'text', 'likes', 'dislikes' 'user_id']
        depth = 1

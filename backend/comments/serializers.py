from rest_framework import serializers
from .models import Comments


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ccomment
        fields = ['id', 'make', 'model', 'year', 'user_id']
        depth = 1

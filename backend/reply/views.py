from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Reply
from .serializers import ReplySerializer


# Create your views here.
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_all_replies(request, comment_id):
    comment = Reply.objects.filter(comment_id=comment_id)
    serializer = ReplySerializer(comment, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def user_reply(request):
    print(
        'User ', f"{request.user.id} {request.user.email} {request.user.username}")
    if request.method == 'POST':
        serializer = ReplySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'GET':
        comment = Reply.objects.filter(user_id=request.user.id)
        serializer = ReplySerializer(comment, many=True)
        return Response(serializer.data)
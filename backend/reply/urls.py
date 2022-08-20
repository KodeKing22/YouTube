from django.urls import path, include
from reply import views

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

urlpatterns = [
    path('', views.user_reply),
    path('all/<str:comment_id>', views.get_all_replies),
]

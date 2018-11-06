from django.urls import path
from . import views

urlpatterns = [
    path('api/wish/', views.WishListCreate.as_view() ),
]

from django.urls import path, include
from rest_framework import routers
from main import views

# app_name = "main"

router = routers.DefaultRouter()
router.register(r"photo", views.PhotoViewSet)
router.register(r"letter", views.LetterViewSet)

urlpatterns = [
    path("", include(router.urls)), 
    # path("api/", include("rest_framework.urls", namespace="rest_framework")),
]

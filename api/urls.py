from django.conf.urls import url, include
from rest_framework.routers import DefaultRouter
from flap.viewsets import *

router = DefaultRouter()
router.register(r'FlipFlap', FlipFlapViewSet)

urlpatterns = [
            url(r'^', include(router.urls)),
]

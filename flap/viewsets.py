from rest_framework import viewsets

from .models import *
from .serializers import *

class FlipFlapViewSet(viewsets.ModelViewSet):
    queryset = FlipFlap.objects.all()
    serializer_class = FlipFlapSerializer

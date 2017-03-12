from rest_framework import serializers
from .models import *

class FlipFlapSerializer(serializers.ModelSerializer):
    class Meta:
        model = FlipFlap
        fields = (
            'id',
            'name',
        )

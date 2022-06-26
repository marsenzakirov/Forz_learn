from statistics import mode
from rest_framework import serializers
from authentication.models import User
class authenticationSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'
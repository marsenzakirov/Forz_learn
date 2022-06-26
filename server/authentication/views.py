from rest_framework.viewsets import ModelViewSet
from authentication.models import User
from authentication.serializers import authenticationSerializer

class AuthenticationViewSet(ModelViewSet):
    queryset = User.objects.all()
    serializer_class = authenticationSerializer
from rest_framework.exceptions import ValidationError, NotFound, AuthenticationFailed
from rest_framework.viewsets import ModelViewSet
from authentication.models import User
from authentication.serializers import authenticationSerializer
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import IsAuthenticated
from django.core.validators import validate_email


class AuthenticationViewSet(ModelViewSet):
    queryset = User.objects.all()
    serializer_class = authenticationSerializer

    @action(methods=['POST'], detail=False, url_path='register')
    def register(self, request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response({'message': 'success'})

    @action(methods=['POST'], detail=False, url_path='login')
    def login(self, request):
        if 'email' not in request.data:
            raise ValidationError({'error': 'почта не передана'})
        if 'password' not in request.data:
            raise ValidationError({'error': 'пароль не может быть пустым'})

        try:
            user = User.objects.get(email=request.data['email'])
        except User.DoesNotExist:
            raise NotFound({'error': 'пользователь с таким email не найден'})

        if not user.check_password(request.data['password']):
            raise AuthenticationFailed({'error': 'неверный пароль'})

        if not user.is_active:
            raise AuthenticationFailed({'error': 'пользователь не активирован'})

        refresh = RefreshToken.for_user(user)
        response = Response()
        response.set_cookie('refresh', str(refresh))
        response.data = {'access': str(refresh.access_token)}
        return response

    @action(methods=['GET'], detail=False, permission_classes=[IsAuthenticated], url_path='user')
    def get_user(self, request):
        user = request.user
        data = self.serializer_class(user).data
        return Response(data)

    @action(methods=['POST'], detail=False, permission_classes=[IsAuthenticated], url_path='delete')
    def delete(self, request):
        user = request.user
        if not user.check_password(request.data['password']):
            raise AuthenticationFailed({'error': 'пароль неверный'})
        user.delete()
        return Response({'message': 'Вы успешно удалили свой аккаунт'})

    @action(methods=['POST'], detail=False, permission_classes=[IsAuthenticated], url_path='change_password')
    def change_password(self, request):
        user = request.user
        if 'old_password' not in request.data:
            raise ValidationError(
                {'error': 'старый пароль не может быть пустым'})
        if 'new_password' not in request.data:
            raise ValidationError(
                {'error': 'новый пароль не может быть пустым'})
        if not user.check_password(request.data['old_password']):
            raise AuthenticationFailed({'error': 'пароль неверный'})
        user.set_password(request.data['new_password'])
        user.save()
        return Response({'message': 'вы успешно сменили пароль'})

    @action(methods=['POST'], detail=False, permission_classes=[IsAuthenticated], url_path='change_email')
    def change_email(self, request):
        user = request.user
        if 'email' not in request.data:
            raise ValidationError({'error': 'почта не может быть пустой'})
        if 'password' not in request.data:
            raise ValidationError({'error': 'пароль не может быть пустым'})
        if validate_email(request.data['email']) is False:
            raise ValidationError({'error': 'почта не валидна'})
        if not user.check_password(request.data['password']):
            raise AuthenticationFailed({'error': 'пароль неверный'})
        if user.email == request.data['email']:
            raise ValidationError({'error': 'почта совпадает с предыдущей'})
        user.email = request.data['email']
        user.save()
        return Response({'message': 'Вы успешно сменили почту'})

from statistics import mode
from rest_framework import serializers
from authentication.models import User
from courses.models import Course


class authenticationSerializer(serializers.ModelSerializer):


    class Meta:
        model = User
        fields = ['email', 'user', 'is_active', 'password', 'courses']

        extra_kwargs = {
            'password': {
                "write_only": True
            },
        }

    def create(self, validate_data):
        password = validate_data.pop('password', None)
        instance = self.Meta.model(**validate_data)

        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance

    def delete(self, validate_data):
        instance = self.Meta.model.objects.get(**validate_data)
        instance.delete()
        return instance

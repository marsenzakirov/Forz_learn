from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin

from authentication.managers import UserManager
# Create your models here.
from courses.models import Course


class User(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(
        verbose_name='Email адрес', max_length=255, unique=True)
    user = models.CharField(verbose_name='Имя', max_length=255)
    is_active = models.BooleanField(verbose_name='Активирован', default=True)
    is_staff = models.BooleanField(verbose_name='Персонал', default=False)
    is_superuser = models.BooleanField(
        verbose_name='Администратор', default=False)

    courses = models.ManyToManyField(Course, verbose_name='Курсы', blank=True)
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['user']

    objects = UserManager()

    def __str__(self):
        return self.email

    class Meta:
        verbose_name = 'Пользователь'
        verbose_name_plural = 'Пользователи'

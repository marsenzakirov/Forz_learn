from django.db import models

# Create your models here.

# create a model for the courses


class Course(models.Model):
    # create a title field
    title = models.CharField(max_length=255, verbose_name='Title')
    # create a description field
    description = models.TextField(max_length=225, verbose_name='Description')
    cost = models.IntegerField()
    full_description = models.TextField(
        max_length=3000, verbose_name='Full Description')

    REQUIRED_FIELDS = ['title', 'description', 'cost', 'full_description']

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Курс'
        verbose_name_plural = 'Курсы'

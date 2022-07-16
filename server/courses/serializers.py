# create class serializer for the courses
from rest_framework import serializers
from courses.models import Course


class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = ['title', 'description', 'cost', 'full_description']
    

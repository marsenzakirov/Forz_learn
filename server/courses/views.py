from django.shortcuts import render
from rest_framework.decorators import action
from courses.models import Course
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
from courses.serializers import CourseSerializer


class CourseViewSet(ModelViewSet):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer

    @action(detail=True, methods=['get'], url_path='get-course-detail')
    def get(self, request):
        course = self.get_object()
        serializer = self.serializer_class(course)
        return Response(serializer.data)

    @action(detail=True, methods=['post'], url_path='add-course')
    def add_course(self, request):
        serializer = self.serializer_class(data=request.data)
        serializer.save()
        return Response(serializer.data)

from email.mime import base
from rest_framework.routers import DefaultRouter
from authentication.views import AuthenticationViewSet
from courses.views import CourseViewSet
router = DefaultRouter()

router.register('authentication', AuthenticationViewSet,
                basename='authentication')
router.register('courses', CourseViewSet, basename='courses')

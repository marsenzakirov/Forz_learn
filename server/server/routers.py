from rest_framework.routers import DefaultRouter
from authentication.views import AuthenticationViewSet
router = DefaultRouter()

router.register('authentication',AuthenticationViewSet)
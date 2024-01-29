from django.urls import path, include
from rest_framework.routers import DefaultRouter

from .views import SiteView
router = DefaultRouter()

router.register(r'site', SiteView)


urlpatterns = [
    path('', include(router.urls))
]

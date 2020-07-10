""" The urls for the admin, plus importing all visualizer URLs """

from django.contrib import admin
from django.urls import include, path

from rest_framework import routers
from visualizer.views import JsonConfigViewSet

# Routers provide an easy way of automatically determining the URL conf.
router = routers.DefaultRouter()
router.register(r'visualizations', JsonConfigViewSet)

urlpatterns = [
    path('', include('visualizer.urls')),
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]

""" The urls for the admin, plus importing all visualizer URLs """

from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('', include('visualizer.urls')),
    path('admin/', admin.site.urls),
]

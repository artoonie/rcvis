""" The urls for the admin, plus importing all visualizer URLs """

from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('', include('auth.urls')),
    path('', include('visualizer.urls')),
    path('', include('movie.urls')),
    path('admin/', admin.site.urls),
]
if settings.OFFLINE_MODE:
    # Offline files have locally-served media files
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

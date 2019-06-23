from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('sankey/', include('visualizer.urls')), # legacy URLs
    path('', include('visualizer.urls')),
    path('admin/', admin.site.urls),
]

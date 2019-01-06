from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('sankey/', include('sankey.urls')),
    path('admin/', admin.site.urls),
]

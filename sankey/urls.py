from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('display.html', views.display, name='display'),
]

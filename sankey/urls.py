from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('upload.html', views.upload, name='upload'),
    path('display=<rcvresult>', views.display, name='display')
]

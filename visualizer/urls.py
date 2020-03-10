from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('index.html', views.index, name='index'),
    path('upload.html', views.upload, name='upload'),
    path('visualize=<rcvresult>', views.visualize, name='visualize'),
    path('visualizeEmbedded', views.visualizeEmbedded, name='visualizeEmbedded'),
    path('oembed', views.oembed, name='oembed'),
]

from django.urls import path

from . import views

urlpatterns = [
    path('', views.Index.as_view()),
    path('index.html', views.Index.as_view()),
    path('visualize=<slug>', views.Visualize.as_view()),
    path('upload.html', views.Upload.as_view(), name='upload'),
    path('visualizeEmbedded', views.visualizeEmbedded, name='visualizeEmbedded'),
    path('oembed', views.oembed, name='oembed'),
]

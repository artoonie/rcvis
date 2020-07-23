""" URLs for movie generation and viewing """

from django.urls import path

from . import views

urlpatterns = [
    path('createMovie=<slug>', views.CreateMovie.as_view(), name='createMovie'),
    path('movieGenerationView=<slug>',
         views.MovieGenerationView.as_view(),
         name='movieGenerationView'),
    path('visualizeMovie=<slug>', views.VisualizeMovie.as_view(), name='movieOnlyView'),
]

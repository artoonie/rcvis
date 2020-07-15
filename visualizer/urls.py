""" The django urls file """

from django.urls import include, path
from rest_framework import routers
from rest_framework.authtoken.views import obtain_auth_token

from . import views

# Routers provide an easy way of automatically determining the URL conf.
router = routers.DefaultRouter()
router.register(r'visualizations', views.JsonConfigViewSet)
router.register(r'users', views.UserViewSet)

urlpatterns = [
    path('', views.Index.as_view()),
    path('index.html', views.Index.as_view(), name='index'),
    path('visualize=<slug>', views.Visualize.as_view()),
    path('upload.html', views.Upload.as_view(), name='upload'),
    path('visualizeEmbedded=<slug>', views.VisualizeEmbedded.as_view(), name='visualizeEmbedded'),
    path('oembed', views.Oembed.as_view(), name='oembed'),

    path('createMovie=<slug>', views.CreateMovie.as_view()),
    path(
        'movieGenerationView=<slug>',
        views.MovieGenerationView.as_view(),
        name='movieGenerationView'),
    path('visualizeMovie=<slug>', views.VisualizeMovie.as_view(), name='movieOnlyView'),

    # REST API
    path('api/', include(router.urls)),
    # This is used by the rest_framework to create a login button
    path('api/auth/', include('rest_framework.urls')),
    path('api/auth/get-token', obtain_auth_token)
]

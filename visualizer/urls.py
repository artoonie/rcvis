""" The django urls file """

from django.urls import include, path
from rest_framework import routers

from . import views

# Routers provide an easy way of automatically determining the URL conf.
router = routers.DefaultRouter()
router.register(r'visualizations', views.JsonConfigViewSet)
router.register(r'users', views.UserViewSet)

urlpatterns = [
    path('', views.Index.as_view()),
    path('index.html', views.Index.as_view()),
    path('visualize=<slug>', views.Visualize.as_view()),
    path('upload.html', views.Upload.as_view(), name='upload'),
    path('visualizeEmbedded=<slug>', views.VisualizeEmbedded.as_view(), name='visualizeEmbedded'),
    path('oembed', views.Oembed.as_view(), name='oembed'),

    # REST API
    path('api/', include(router.urls)),
]

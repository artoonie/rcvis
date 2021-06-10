""" URLs to auth, login, and logout """

from django.urls import include, path

urlpatterns = [
    path('accounts/', include('django_registration.backends.activation.urls')),
    path('accounts/', include('django.contrib.auth.urls')),
]

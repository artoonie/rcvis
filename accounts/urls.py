""" URLs to auth, login, logout, and account management """

from django.urls import include, path

from accounts import views

urlpatterns = [
    path('accounts/dashboard/', views.UserDashboard.as_view(), name='userDashboard'),
    path('accounts/toggle-privacy', views.TogglePrivacy.as_view(), name='togglePrivacy'),
    path('accounts/', include('django_registration.backends.activation.urls')),
    path('accounts/', include('django.contrib.auth.urls')),
]

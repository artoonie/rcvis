""" URLs for the election page """

from django.urls import path

from electionpage import views

urlpatterns = [
    path('e/<slug>', views.ElectionPageView.as_view(), name='electionPage'),
]

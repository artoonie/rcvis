""" URLs for the election page """

from django.urls import path

from electionpage import views

urlpatterns = [
    path('e/<slug>', views.ElectionPageView.as_view(), name='electionPage'),
    path('epPopulate/<slug>', views.PopulateScrapers.as_view(), name='populateScrapers'),
    path('epCreate.html', views.ScrapableElectionPageCreator.as_view(), name='createScrapableElection'),
    path('epIndex.html', views.Index.as_view(), name='electionPageHome'),
]

""" URLs for the election page """

from django.urls import path

from electionpage import views

urlpatterns = [
    path('ps/<slug>', views.ScrapableElectionPageView.as_view(), name='scrapableElectionPage'),
    path('p/<slug>', views.ElectionPageView.as_view(), name='electionPage'),
    path('pPopulate/<slug>', views.PopulateScrapers.as_view(), name='populateScrapers'),
    path('pScrapeAll/<slug>', views.ScrapeAll.as_view(), name='scrapeAll'),
    path('pCreate.html', views.ScrapableElectionPageCreator.as_view(), name='createScrapableElection'),
    path('pIndex.html', views.Index.as_view(), name='electionPageHome'),
]

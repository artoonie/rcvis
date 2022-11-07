""" URLs for the election page """

from django.urls import path
from django.views.decorators.cache import never_cache

from electionpage import views

urlpatterns = [
    path(
        'ps/<slug>',
        views.ScrapableElectionPageView.as_view(),
        name='scrapableElectionPage'),
    path(
        'p/<slug>',
        views.ElectionPageView.as_view(),
        name='electionPage'),
    path(
        'pPopulate/<slug>',
        never_cache(views.PopulateScrapers.as_view()),
        name='populateScrapers'),
    path(
        'pScrapeAll/<slug>',
        never_cache(views.ScrapeAll.as_view()),
        name='scrapeAll'),
    path(
        'pCreate.html',
        never_cache(views.ScrapableElectionPageCreator.as_view()),
        name='createScrapableElection'),
    path(
        'pIndex.html',
        views.Index.as_view(),
        name='electionPageHome'),
]

""" URLs for the scraper """

from django.urls import path
from django.views.decorators.cache import never_cache

from scraper import views

urlpatterns = [
    path(
        'viewScraper/<pk>',
        never_cache(
            views.ViewScraper.as_view()),
        name='viewScraper'),
    path(
        'viewMultiScraper/<pk>',
        never_cache(
            views.ViewMultiScraper.as_view()),
        name='viewMultiScraper'),
    path(
        'scrapeNow/<pk>',
        never_cache(
            views.ScrapeNow.as_view()),
        name='scrapeNow'),
    path(
        'multiScrapeNow/<pk>',
        never_cache(
            views.MultiScrapeNow.as_view()),
        name='multiScrapeNow'),
]

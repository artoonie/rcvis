""" URLs for the scraper """

from django.urls import path

from scraper import views

urlpatterns = [
    path('viewScraper/<pk>', views.ViewScraper.as_view(), name='viewScraper'),
    path('scrapeNow/<pk>', views.ScrapeNow.as_view(), name='scrapeNow'),
]


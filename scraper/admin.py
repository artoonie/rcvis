"""
Admin page to edit a scraper
"""
from django.contrib import admin

from scraper.models import Scraper


@admin.register(Scraper)
class ScraperAdmin(admin.ModelAdmin):
    """ Creates a scraper """
    view_on_site = True

""" ElectionPage administration """

from django.contrib import admin

from electionpage.models import ElectionPage, ScrapableElectionPage


@admin.register(ElectionPage)
class ElectionPageAdmin(admin.ModelAdmin):
    """ Administer election pages """


@admin.register(ScrapableElectionPage)
class ScrapableElectionPageAdmin(admin.ModelAdmin):
    """ Administer election pages """
    view_on_site = True

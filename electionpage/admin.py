""" ElectionPage administration """

from django.contrib import admin

from electionpage.models import ElectionPage, ScrapableElectionPage, SingleSourceElectionPage


@admin.register(ElectionPage)
class ElectionPageAdmin(admin.ModelAdmin):
    """ Administer election pages """
    view_on_site = True


@admin.register(ScrapableElectionPage)
class ScrapableElectionPageAdmin(admin.ModelAdmin):
    """ Administer election pages """
    view_on_site = True


@admin.register(SingleSourceElectionPage)
class SingleSourceElectionPageAdmin(admin.ModelAdmin):
    """ Administer single-source election pages """
    view_on_site = True

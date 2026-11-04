""" ElectionPage administration """

from django.contrib import admin

from electionpage.models import ElectionPage, ScrapableElectionPage, SingleSourceElectionPage


@admin.register(ElectionPage)
class ElectionPageAdmin(admin.ModelAdmin):
    """
    Administer election pages.

    Note: listOfElections must NOT be in autocomplete_fields. The select2
    autocomplete widget replaces SortedManyToManyField's sortable widget, so
    the order cannot be edited - and worse, each save rewrites the stored
    order to primary-key order, scrambling the page.
    """
    view_on_site = True


@admin.register(ScrapableElectionPage)
class ScrapableElectionPageAdmin(admin.ModelAdmin):
    """ Administer election pages """
    view_on_site = True


@admin.register(SingleSourceElectionPage)
class SingleSourceElectionPageAdmin(admin.ModelAdmin):
    """ Administer single-source election pages """
    view_on_site = True

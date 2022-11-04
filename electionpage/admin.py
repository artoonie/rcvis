""" ElectionPage administration """

from django.contrib import admin

from electionpage.models import ElectionPage


@admin.register(ElectionPage)
class ElectionPageAdmin(admin.ModelAdmin):
    """ Administer election pages """

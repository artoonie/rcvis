""" Admin page configuration """
from django.contrib.auth.models import Permission
from django.contrib import admin
from django.urls import reverse

from visualizer import models

admin.site.register(Permission)


@admin.register(models.JsonConfig)
class JsonAdmin(admin.ModelAdmin):
    """ The admin page to modify JsonConfig """
    view_on_site = True

    list_display = ('slug', 'title', 'owner', 'numRounds', 'numCandidates', 'uploadedAt')
    readonly_fields = (
        'slug',
        'title',
        'numRounds',
        'numCandidates',
        'uploadedAt',
        'movieGenerationStatus')


@admin.register(models.HomepageFeaturedElection)
class HomepageFeaturedElectionAdmin(admin.ModelAdmin):
    """ Administer homepage featured links """
    list_display = ('title', 'order', 'column', 'jsonConfig')


@admin.register(models.HomepageFeaturedElectionColumn)
class HomepageFeaturedElectionColumnAdmin(admin.ModelAdmin):
    """ Administer homepage featured link columns """
    list_display = ('title', 'order')

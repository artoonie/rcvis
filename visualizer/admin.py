""" Admin page configuration """
from admin_cursor_paginator import CursorPaginatorAdmin
from django.contrib.auth.models import Permission
from django.contrib import admin

from visualizer import models

admin.site.register(Permission)


@admin.register(models.JsonConfig)
class JsonAdmin(CursorPaginatorAdmin):
    """ The admin page to modify JsonConfig """
    view_on_site = True
    show_full_result_count = False  # else we get timeouts with 1000s of rows

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
    raw_id_fields = ("jsonConfig",)


@admin.register(models.HomepageFeaturedElectionColumn)
class HomepageFeaturedElectionColumnAdmin(admin.ModelAdmin):
    """ Administer homepage featured link columns """
    list_display = ('title', 'order')

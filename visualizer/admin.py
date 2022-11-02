""" Admin page configuration """
from admin_cursor_paginator import CursorPaginatorAdmin
from django.contrib.auth.models import Permission
from django.contrib import admin

from common.viewUtils import request_to_domain
from visualizer import models
from movie.tasks import launch_big_dynos, create_movie_task

admin.site.register(Permission)


@admin.action(description='Make movie/thumbnails')
def make_movie(_, request, queryset):
    """ An action from the admin menu that creates a movie """
    isFirstRun = True
    domain = request_to_domain(request)
    for jsonconfig in queryset:
        # Only launch dynos on first run - probably safe to call multiple times,
        # but it'll ping heroku very fast and we might get rate limited.
        if isFirstRun:
            launch_big_dynos(jsonconfig.pk, domain)
            isFirstRun = False
        else:
            create_movie_task.delay(jsonconfig.pk, domain)


@admin.register(models.JsonConfig)
class JsonAdmin(CursorPaginatorAdmin):
    """ The admin page to modify JsonConfig """
    view_on_site = True
    show_full_result_count = False  # else we get timeouts with 1000s of rows
    actions = [make_movie]
    search_fields = ['slug']

    list_display = (
        'slug',
        'title',
        'owner',
        'numRounds',
        'numCandidates',
        'uploadedAt',
        'movieGenerationStatus')
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

@admin.register(models.ElectionPage)
class ElectionPageAdmin(admin.ModelAdmin):
    """ Administer election pages """

""" ElectionPage administration """

from django.contrib import admin

from common import viewUtils
from electionpage.models import ElectionPage, ScrapableElectionPage, SingleSourceElectionPage
from visualizer.executor import get_executor
from visualizer.tasks import generate_json_config_title_image


@admin.register(ElectionPage)
class ElectionPageAdmin(admin.ModelAdmin):
    """
    Administer election pages.

    Note: listOfElections must NOT be in autocomplete_fields. The select2
    autocomplete widget replaces SortedManyToManyField's sortable widget, so
    the order cannot be edited - and worse, each save rewrites the stored
    order to primary-key order, scrambling the page.

    raw_id_fields is safe: with a site-sized number of JsonConfigs, the
    default sortable-checkbox widget renders one checkbox per visualization
    and the page times out. The raw-id text input renders only the selected
    ids, and SortedMultipleChoiceField.clean preserves the submitted id
    order, so the comma-separated list IS the page order.
    """
    view_on_site = True
    raw_id_fields = ('listOfElections',)
    actions = ('generate_thumbnails',)

    @admin.action(description="Generate social preview thumbnails for all elections on page")
    def generate_thumbnails(self, request, queryset):
        """
        Queues a background title-image screenshot for every visualization on
        the selected pages. The upload view does this automatically, but
        API uploads don't, so API-uploaded visualizations have no thumbnail
        until this is run.
        """
        domain = viewUtils.request_to_domain(request)
        numQueued = 0
        for page in queryset:
            for config in page.listOfElections.all():
                get_executor().submit(generate_json_config_title_image, config.pk, domain)
                numQueued += 1
        self.message_user(
            request,
            f"Queued thumbnail generation for {numQueued} visualization(s). "
            "They will complete in the background over the next few minutes.")


@admin.register(ScrapableElectionPage)
class ScrapableElectionPageAdmin(admin.ModelAdmin):
    """ Administer election pages """
    view_on_site = True


@admin.register(SingleSourceElectionPage)
class SingleSourceElectionPageAdmin(admin.ModelAdmin):
    """ Administer single-source election pages """
    view_on_site = True

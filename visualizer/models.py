""" The django object models """

from django.contrib import admin
from django.core.cache import cache
from django.db import models
from django.utils.text import slugify


class JsonConfig(models.Model):
    """ A Json file representing a single election, and its configuration """

    detail_views = ('visualizer.views.Visualize',)

    jsonFile = models.FileField()
    slug = models.SlugField(unique=True)
    uploadedAt = models.DateTimeField(auto_now_add=True)
    owner = models.ForeignKey(
        'auth.User',
        related_name='this_users_jsons',
        on_delete=models.CASCADE,
        null=True)

    # Options modifiable at upload or runtime
    rotateNames = models.BooleanField(default=True)
    horizontalSankey = models.BooleanField(default=False)
    onlyShowWinnersTabular = models.BooleanField(default=True)
    doHideOverflowAndEliminated = models.BooleanField(default=False)
    doUseHorizontalBarGraph = models.BooleanField(default=False)
    hideSankey = models.BooleanField(default=False)
    hideTabular = models.BooleanField(default=False)
    doDimPrevRoundColors = models.BooleanField(default=False)

    # Options only modifiable at upload time
    excludeFinalWinnerAndEliminatedCandidate = models.BooleanField(default=False)
    hideDecimals = models.BooleanField(default=False)

    @classmethod
    def get_all_non_auto_fields(cls):
        """ All editable fields of JsonConfig - must be kept up to date with the list
            of fields above. (I'm sure there's a way to do this automatically...) """
        return ['jsonFile',
                'rotateNames',
                'horizontalSankey',
                'onlyShowWinnersTabular',
                'doHideOverflowAndEliminated',
                'doUseHorizontalBarGraph',
                'hideSankey',
                'hideTabular',
                'doDimPrevRoundColors',
                'excludeFinalWinnerAndEliminatedCandidate',
                'hideDecimals']

    def _get_unique_slug(self):
        slug = slugify(self.jsonFile)
        uniqueSlug = slug
        num = 1

        #pylint: disable=no-member
        while JsonConfig.objects.filter(slug=uniqueSlug).exists():
            uniqueSlug = '{}-{}'.format(slug, num)
            num += 1

        return uniqueSlug

    #pylint: disable=signature-differs
    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = self._get_unique_slug()

        # Clear the cache. This is not useful in most cases, but is useful when:
        # 1. The admin page changes something
        # 2. In unit tests, where the db gets cleared for each test, and you don't want to see
        #    the previous test's cached results
        # TODO - this is overkill, how can we just clear the cache for this model?
        cache.clear()

        super().save(*args, **kwargs)


@admin.register(JsonConfig)
class JsonAdmin(admin.ModelAdmin):
    """ The admin page to modify JsonConfig """
    list_display = ('slug', 'uploadedAt')

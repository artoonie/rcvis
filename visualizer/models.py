""" The django object models """

from django.conf import settings
from django.contrib import admin
from django.core.cache import cache
from django.db import models
from django.utils.text import slugify
from django.utils.translation import ugettext as _


class MovieGenerationStatuses(models.IntegerChoices):
    """ Describes the status of movie generation for this model """
    NOT_REQUESTED = 0, _('No movie generation has been requested')
    NOT_STARTED = 1, _('Movie generation has been requested but not started')
    PICKED_UP_BY_TASK = 2, _('Movie generation task has begun')
    LANDSCAPE_COMPLETE = 3, _('Landscape generation complete, portrait pending')
    COMPLETE = 4, _('Complete')
    FAILED = 5, _('Failed')


class JsonConfig(models.Model):
    """ A Json file representing a single election, and its configuration """

    detail_views = ('visualizer.views.Visualize',)

    jsonFile = models.FileField()
    slug = models.SlugField(unique=True)
    uploadedAt = models.DateTimeField(auto_now_add=True)
    owner = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        related_name='this_users_jsons',
        on_delete=models.CASCADE,
        null=True,
        blank=True)

    title = models.CharField(max_length=256)
    numRounds = models.IntegerField()
    numCandidates = models.IntegerField()

    # Movie
    movieGenerationStatus = models.IntegerField(
        choices=MovieGenerationStatuses.choices,
        default=0,
    )
    movieHorizontal = models.OneToOneField('movie.Movie',
                                           related_name='+',  # disable related_name
                                           on_delete=models.CASCADE,
                                           null=True,
                                           blank=True)
    movieVertical = models.OneToOneField('movie.Movie',
                                         related_name='+',  # disable related_name
                                         on_delete=models.CASCADE,
                                         null=True,
                                         blank=True)

    # Options modifiable at upload or runtime
    rotateNames = models.BooleanField(default=True)
    horizontalSankey = models.BooleanField(default=False)
    onlyShowWinnersTabular = models.BooleanField(default=True)
    doHideOverflowAndEliminated = models.BooleanField(default=False)
    doUseHorizontalBarGraph = models.BooleanField(default=True)
    hideSankey = models.BooleanField(default=False)
    hideTabular = models.BooleanField(default=False)
    doDimPrevRoundColors = models.BooleanField(default=True)

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
        if slug.endswith('json'):
            slug = slug[:-4]
        uniqueSlug = slug
        num = 1

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
    list_display = ('slug', 'title', 'numRounds', 'numCandidates', 'uploadedAt')
    readonly_fields = (
        'slug',
        'title',
        'numRounds',
        'numCandidates',
        'uploadedAt',
        'movieGenerationStatus')

""" The django object models """

from django.conf import settings
from django.core.cache import cache
from django.db import models
from django.urls import reverse
from django.utils.text import slugify
from django.utils.translation import ugettext as _

from common.cloudflare import CloudflareAPI


class ColorTheme(models.IntegerChoices):
    """ Describes the status of movie generation for this model """
    RAINBOW = 0, _('Full color spectrum')
    PURPLE_TO_ORANGE = 1, _('Purple to orange')
    ALTERNATING = 2, _('Alternating colors')


class EliminationBarColor(models.IntegerChoices):
    """ Describes the status of movie generation for this model """
    GRAY = 0, _('Gray')
    HIDDEN = 1, _('Hidden')
    LAST_ROUND_COLOR = 2, _('Same color of transfer')


class TextForWinner(models.IntegerChoices):
    """ Describes the status of movie generation for this model """
    ELECTED = 0, _('Candidate was elected')
    WON = 1, _('Candidate won')
    PRIMARY = 2, _('Candidate advanced to the general')


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
    candidateSidecarFile = models.FileField(null=True, blank=True)
    slug = models.SlugField(unique=True, max_length=255)
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

    dataSourceURL = models.URLField(max_length=512, null=True, blank=True)
    areResultsCertified = models.BooleanField(default=False)
    textForWinner = models.IntegerField(choices=TextForWinner.choices, default=0)

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
    horizontalSankey = models.BooleanField(default=True)
    showRoundNumbersOnSankey = models.BooleanField(default=True)
    onlyShowWinnersTabular = models.BooleanField(default=True)
    doUseHorizontalBarGraph = models.BooleanField(default=True)
    hideSankey = models.BooleanField(default=False)
    hideTabular = models.BooleanField(default=False)
    doDimPrevRoundColors = models.BooleanField(default=True)
    doUseDescriptionInsteadOfTimeline = models.BooleanField(default=True)
    colorTheme = models.IntegerField(choices=ColorTheme.choices, default=1)
    eliminationBarColor = models.IntegerField(choices=EliminationBarColor.choices, default=0)

    # Options only modifiable at upload time
    excludeFinalWinnerAndEliminatedCandidate = models.BooleanField(default=False)
    hideDecimals = models.BooleanField(default=False)

    @classmethod
    def get_all_non_auto_fields(cls):
        """ All editable fields of JsonConfig - must be kept up to date with the list
            of fields above. (I'm sure there's a way to do this automatically...) """
        return ['jsonFile',
                'candidateSidecarFile',
                'rotateNames',
                'horizontalSankey',
                'showRoundNumbersOnSankey',
                'onlyShowWinnersTabular',
                'doUseHorizontalBarGraph',
                'doUseDescriptionInsteadOfTimeline',
                'hideSankey',
                'hideTabular',
                'doDimPrevRoundColors',
                'excludeFinalWinnerAndEliminatedCandidate',
                'hideDecimals',
                'colorTheme',
                'eliminationBarColor',
                'dataSourceURL',
                'areResultsCertified',
                'textForWinner']

    def _get_unique_slug(self):
        # loop until the name is unique
        slug = slugify(self.jsonFile)
        if slug.endswith('json'):
            slug = slug[:-4]

        # at most 220 chars for slug, 20 for title, leaving 15 for numbers
        slug = slug[:220]

        # loop until the name is unique
        num = 1
        uniqueSlug = slug
        while JsonConfig.objects.filter(slug=uniqueSlug).exists():
            uniqueSlug = '{}-{}'.format(slug, num)
            num += 1

        return uniqueSlug

    def __str__(self):
        return '%s: %s' % (self.slug, self.title)

    def get_absolute_url(self):
        """ Used in the admin panel to have a "Visit Site" link """
        return reverse('visualize', args=(self.slug,))

    #pylint: disable=signature-differs
    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = self._get_unique_slug()
        else:
            # Model is being updated, not created. Clear the cache.

            # A) Local mem cache clearing.
            # This is not useful in most cases, but is useful when:
            # 1. The admin page changes something
            # 2. In unit tests, where the db gets cleared for each test, and you don't want to see
            #    the previous test's cached results
            # TODO - this is overkill, how can we just clear the cache for this model?
            # 3. API updates
            cache.clear()

            # B) Cloudflare cache clearing
            # Should only occur in production. Doesn't clear all possible cache keys
            # (that would require an enterprise cloudflare connection), but hits the
            # common URLs.
            CloudflareAPI.purge_vis_cache(self.slug)

        super().save(*args, **kwargs)


class HomepageFeaturedElectionColumn(models.Model):
    """ Represents a column of links on the homepage. """
    title = models.CharField(max_length=128)

    # The order of this column - must be unique among all columns
    order = models.IntegerField(unique=True)

    class Meta:
        """ Meta-controls: the default ordering """
        ordering = ["order"]

    def __str__(self):
        return str(self.title)


class HomepageFeaturedElection(models.Model):
    """ Represents a single link on the homepage list of featured elections. """
    # Election title overrides the actual title, since we may want to
    # advertise it differently or simplify on the homepage
    title = models.CharField(max_length=128)

    # The order of the link within this column
    order = models.IntegerField(unique=True)

    # Which column does this go in? This allows each election to be in
    # multiple columns, if needed.
    column = models.ForeignKey(HomepageFeaturedElectionColumn,
                               related_name='links_in_column',
                               on_delete=models.CASCADE)

    # The election this corresponds to
    jsonConfig = models.ForeignKey(JsonConfig,
                                   related_name='+',  # disable related_name from jsonConfigs
                                   on_delete=models.CASCADE)

    class Meta:
        """ Meta-controls: the default ordering """
        ordering = ["order"]

    def __str__(self):
        return str(self.title)

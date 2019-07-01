from django.db import models
from django.utils.text import slugify

class JsonConfig(models.Model):
    jsonFile = models.FileField()
    slug = models.SlugField(unique=True)
    uploadedAt = models.DateTimeField(auto_now_add=True)
    hideTransferlessRounds = models.BooleanField(default=False)
    hideDecimals = models.BooleanField(default=False)
    rotateNames = models.BooleanField(default=False)
    onlyShowWinnersTabular = models.BooleanField(default=True)

    def _get_unique_slug(self):
        slug = slugify(self.jsonFile)
        unique_slug = slug
        num = 1
        while JsonConfig.objects.filter(slug=unique_slug).exists():
            unique_slug = '{}-{}'.format(slug, num)
            num += 1
        return unique_slug

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = self._get_unique_slug()
        super().save(*args, **kwargs)

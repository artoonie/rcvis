""" Sitemap generation configuration """

from django.contrib import sitemaps
from django.urls import reverse

from visualizer.models import JsonConfig


class StaticViewSitemap(sitemaps.Sitemap):
    priority = 0.8
    changefreq = 'weekly'

    def items(self):
        return ['index', 'upload']

    def location(self, item):
        return reverse(item)


class VisualizationSitemap(sitemaps.Sitemap):
    changefreq = 'weekly'
    priority = 0.5

    def items(self):
        return JsonConfig.objects.all()

    def location(self, item):
        return reverse('visualize', args=(item.slug,))

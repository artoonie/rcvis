""" Sitemap generation configuration """

from django.contrib import sitemaps
from django.urls import reverse

from visualizer.models import JsonConfig


class StaticViewSitemap(sitemaps.Sitemap):
    """ Home and upload pages """
    priority = 0.8
    changefreq = 'weekly'

    def items(self):
        return ['index', 'upload']

    def location(self, obj):
        return reverse(obj)


class VisualizationSitemap(sitemaps.Sitemap):
    """ Visualizations """
    changefreq = 'weekly'
    priority = 0.5

    def items(self):
        return JsonConfig.objects.all()

    def location(self, obj):
        return reverse('visualize', args=(obj.slug,))

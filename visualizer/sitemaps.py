""" Sitemap generation configuration """

from django.contrib import sitemaps
from django.urls import reverse

from visualizer.models import JsonConfig


class StaticViewSitemap(sitemaps.Sitemap):
    """ Home and upload pages """
    priority = 0.8
    changefreq = 'weekly'
    protocol = 'https'

    def items(self):
        return ['index', 'upload']

    def location(self, item):
        return reverse(item)


class VisualizationSitemap(sitemaps.Sitemap):
    """ Visualizations """
    changefreq = 'weekly'
    priority = 0.5
    protocol = 'https'

    def items(self):
        return JsonConfig.get_all_public()

    def location(self, item):
        return reverse('visualize', args=(item.slug,))

"""
Helper functions for reversing and getting absolute URLs, including the domain
"""

from django import template
from django.urls import reverse
from visualizer.common import make_complete_url

register = template.Library()


@register.simple_tag(takes_context=True)
def get_reverse_as_complete_url(context, name, *args):
    """ Runs reverse and then returns the full URL, including domain """
    relativeUrl = reverse(name, args=args)
    return make_complete_url(context['request'], relativeUrl)


@register.simple_tag(takes_context=True)
def get_as_complete_url(context, url):
    """ Takes a URL and returns the full URL, including domain, if it's not already """
    if url.startswith('http'):
        return url
    return make_complete_url(context['request'], url)

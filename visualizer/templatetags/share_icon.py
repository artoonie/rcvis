"""
Tag to get a share icon, to be used in tandem with django_social_share
"""


from django.templatetags.static import static
from django import template
from django.template import loader

register = template.Library()


@register.simple_tag
def get_icon(shareTo):
    """ Pass in the text label. Will return an image from /share_icons/ of the same name. """
    shareToLower = shareTo.lower()
    shareImageIconUrl = static(f'share/share_icons/{shareToLower}.png')
    shareTemplate = loader.get_template('share/share_icon_tag.html')
    context = {'shareImageIconUrl': shareImageIconUrl,
               'shareToText': shareTo}
    return shareTemplate.render(context)

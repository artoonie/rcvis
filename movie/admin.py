""" Movie admin """
from django.contrib import admin

from movie.models import Movie, TextToSpeechCachedFile

@admin.register(Movie)
class JsonAdmin(admin.ModelAdmin):
    """ The admin page to modify JsonConfig """
    list_display = ('generatedOnApplicationVersion',
                    'movieFile',
                    'gifFile',
                    'titleImage',
                    'resolutionWidth',
                    'resolutionHeight')


@admin.register(TextToSpeechCachedFile)
class TextToSpeechCachedFileAdmin(admin.ModelAdmin):
    """ The admin page to modify JsonConfig """
    list_display = ('text', 'audioFile', 'lastUsed')

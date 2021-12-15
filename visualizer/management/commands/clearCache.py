"""
Management command to clear cache: needed for filesystem-backed caching
"""
from django.core.management.base import BaseCommand
from django.core.cache import cache


class Command(BaseCommand):
    """ The command itself """

    def handle(self, *args, **kwargs):
        cache.clear()
        self.stdout.write('Cleared cache\n')

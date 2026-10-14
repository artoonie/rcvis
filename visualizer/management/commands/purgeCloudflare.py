"""
Management command to purge the entire Cloudflare cache, run on each deploy
via the Procfile release phase. Rendered HTML references hashed static files
that change on deploy, so edge copies cached before the deploy would keep
serving (and 304-renewing) HTML that points at deleted assets.
"""
from django.core.management.base import BaseCommand

from common.cloudflare import CloudflareAPI


class Command(BaseCommand):
    """ The command itself """

    def handle(self, *args, **kwargs):
        # Never fail over a cache purge: a failed release phase would block
        # the very deploy this purge exists to clean up after.
        try:
            CloudflareAPI.purge_entire_cache()
        except Exception as exception:  # pylint: disable=broad-except
            self.stderr.write(f'Cloudflare purge failed: {exception}\n')
            return
        self.stdout.write('Purged cloudflare cache\n')

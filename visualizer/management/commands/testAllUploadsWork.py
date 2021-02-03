"""
Managament script to ensure the last N uploads can still be loaded.
If you need something more heavy-handed than the unit tests, check this
against the production database.
"""
from django.core.management.base import BaseCommand, CommandError

from visualizer.models import JsonConfig
from common.viewUtils import get_data_for_view


class Command(BaseCommand):
    """
    Runs the management script
    """
    help = 'Closes the specified poll for voting'

    def add_arguments(self, parser):
        parser.add_argument('start', type=int)  # Allow you to skip some if you've fixed em
        parser.add_argument('count', type=int)  # Max number to look at

    def handle(self, *args, **options):
        start = options['start']
        count = options['count']
        end = start + count
        allJsonConfigs = JsonConfig.objects.all().order_by('-id')  # pylint: disable=no-member
        allJsonConfigs = allJsonConfigs[start:end]
        for jsonConfig in allJsonConfigs:
            try:
                get_data_for_view(jsonConfig)
                self.stdout.write(self.style.SUCCESS(f"Successfully loaded {jsonConfig.slug}"))
            except Exception as exc:  # pylint: disable=broad-except
                raise CommandError(f'Could not load {jsonConfig.slug}: ' + str(exc))

        self.stdout.write(self.style.SUCCESS("Successfully loaded configs"))

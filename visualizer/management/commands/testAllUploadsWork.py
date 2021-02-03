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
        parser.add_argument('max', type=int)

    def handle(self, *args, **options):
        maxToView = options['max']
        allJsonConfigs = JsonConfig.objects.all().order_by('id')  # pylint: disable=no-member
        allJsonConfigs = allJsonConfigs[:maxToView]
        for jsonConfig in allJsonConfigs:
            try:
                get_data_for_view(jsonConfig)
                self.stdout.write(self.style.SUCCESS(f"Successfully loaded {jsonConfig.slug}"))
            except Exception as exc:  # pylint: disable=broad-except
                text = f'Could not load {jsonConfig.slug}: ' + str(exc)
                self.stderr.write(self.style.FAILURE(text))
                raise CommandError(text)

        self.stdout.write(self.style.SUCCESS(f"Successfully loaded up to {maxToView} configs"))

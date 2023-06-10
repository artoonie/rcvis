"""
Managament script that mirrors checkUploads, but runs on a local
directory. Useful to batch-test on a large set of local files.
"""
import codecs
import os
from django.core.management.base import BaseCommand, CommandError

from visualizer.graph.graphCreator import make_graph_with_file


class Command(BaseCommand):
    """
    Runs the management script
    """
    help = 'Closes the specified poll for voting'

    def add_arguments(self, parser):
        parser.add_argument('directory', type=str)

    def handle(self, *args, **options):
        directory = options['directory']
        for filename in os.listdir(directory):
            if not filename.endswith('.json') and not filename.endswith('.csv'):
                continue
            filepath = os.path.join(directory, filename)
            try:
                # First try the normal way
                with open(filepath, 'r', encoding='utf-8') as f:
                    make_graph_with_file(f, False)
            except Exception as exc1:  # pylint: disable=broad-except
                # Some codecs are different - not an issue in jsonconfig,
                # but may be an issue locally
                try:
                    with codecs.open(filepath, 'r', 'utf-8-sig') as f:
                        make_graph_with_file(f, False)
                except Exception as exc2:  # pylint: disable=broad-except
                    # Neither codec worked, quit and print error
                    raise CommandError(f'Could not load {filepath}: ' + exc1 + exc2) from None
            self.stdout.write(self.style.SUCCESS(f"Successfully loaded {filepath}"))

        self.stdout.write(self.style.SUCCESS("Successfully loaded JSONs and CSVs"))

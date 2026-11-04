"""
Management command to set the display order of an ElectionPage.

Usage: python manage.py setElectionPageOrder <page-slug> <vis-slug> [<vis-slug> ...]

By default this only REORDERS: the given visualization slugs must be exactly
the ones already on the page. Pass --replace to also add or remove
visualizations so the page becomes exactly the given list.
"""
from django.core.management.base import BaseCommand, CommandError

from electionpage.models import ElectionPage
from visualizer.models import JsonConfig


class Command(BaseCommand):
    """ The command itself """
    help = 'Sets the order of visualizations on an ElectionPage to the given slug order'

    def add_arguments(self, parser):
        parser.add_argument('pageSlug', help='slug of the ElectionPage')
        parser.add_argument('visSlugs', nargs='+',
                            help='visualization slugs, in the desired display order')
        parser.add_argument('--replace', action='store_true',
                            help='allow adding/removing visualizations, not just reordering')

    def handle(self, *args, **options):
        pageSlug = options['pageSlug']
        visSlugs = options['visSlugs']

        duplicates = {s for s in visSlugs if visSlugs.count(s) > 1}
        if duplicates:
            raise CommandError(f'Duplicate slugs given: {sorted(duplicates)}')

        try:
            page = ElectionPage.objects.get(slug=pageSlug)
        except ElectionPage.DoesNotExist as exception:
            raise CommandError(f'No ElectionPage with slug {pageSlug!r}') from exception

        configsBySlug = {c.slug: c for c in JsonConfig.objects.filter(slug__in=visSlugs)}
        missing = [s for s in visSlugs if s not in configsBySlug]
        if missing:
            raise CommandError(f'No visualization with slug: {missing}')

        currentSlugs = set(page.listOfElections.values_list('slug', flat=True))
        if not options['replace'] and currentSlugs != set(visSlugs):
            notOnPage = sorted(set(visSlugs) - currentSlugs)
            notGiven = sorted(currentSlugs - set(visSlugs))
            raise CommandError(
                'Given slugs are not a reordering of what is on the page.\n'
                f'  not on the page: {notOnPage}\n'
                f'  on the page but not given: {notGiven}\n'
                'Pass --replace to add/remove visualizations.')

        # SortedManyToManyField.set() stores this exact order
        page.listOfElections.set([configsBySlug[s] for s in visSlugs])
        page.save()  # purges the Cloudflare cache for this page

        self.stdout.write(f'{pageSlug} now lists {len(visSlugs)} elections in this order:\n')
        for slug in page.listOfElections.values_list('slug', flat=True):
            self.stdout.write(f'  {slug}\n')

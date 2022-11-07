"""
Views for electionpages.
Anything related to creating, editing, or scraping should not be publicly-accessible.

Allows viewing of both ElectionPage and ScrapableElectionPage, but as of this creation (Nov 2022),
only ScrapableElectionPage is given a nice workflow. The other case is simpler, and can be
created in an admin page I suppose - though eventually we want to give that access to uploaders
so they can aggregate any of their uploads into a single page.
"""
from django.contrib.auth.mixins import PermissionRequiredMixin
from django.urls import reverse
from django.views.generic.base import TemplateView
from django.views.generic.detail import DetailView
from django.views.generic.edit import FormView
from extra_views import ModelFormSetView

from electionpage.forms import ScrapableElectionPageForm
from electionpage.models import ElectionPage, ScrapableElectionPage
from scraper.forms import ScraperForm
from scraper.models import Scraper
from scraper.scrapeWorker import ScrapeWorker


class ElectionPageView(DetailView):
    """ Visualizing all elections in an election page """
    model = ElectionPage
    template_name = 'electionpage/electionPage.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['jsonConfigs'] = self.object.listOfElections.all()
        return context


class ScrapableElectionPageView(DetailView):
    """
    Visualizing all elections in a ScrapableElectionPage,
    if they exist- and hiding any election that doesn't exist yet.
    """
    model = ScrapableElectionPage
    template_name = 'electionpage/electionPage.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['jsonConfigs'] = [s.jsonConfig for s in self.object.listOfScrapers.all()]
        context['jsonConfigs'] = [j for j in context['jsonConfigs'] if j is not None]
        context['electionpage'] = context['scrapableelectionpage']
        return context


class ScrapeAll(PermissionRequiredMixin, DetailView):
    """
    Scrapes everything we can in this election
    """
    model = ScrapableElectionPage
    template_name = 'electionpage/scrapeAllResults.html'
    permission_required = ['scraper.add_scraper', 'scraper.change_scraper']

    def get_context_data(self, **kwargs):
        results = []
        for scraper in self.object.listOfScrapers.all():
            try:
                ScrapeWorker.scrape(scraper, self.request.user)
                succeeded = True
            except BaseException:  # pylint: disable=broad-except
                succeeded = False

            results.append({'scraper': scraper, 'succeeded': succeeded})

        context = super().get_context_data(**kwargs)
        context['title'] = self.object.title
        context['slug'] = self.object.slug
        context['results'] = results
        return context


#pylint: disable=too-many-ancestors
class PopulateScrapers(PermissionRequiredMixin, ModelFormSetView):
    """ A form allowing you to create a ScrapableElectionPage """
    login_url = 'login'
    redirect_field_name = 'redirect_to'
    model = Scraper
    form_class = ScraperForm
    template_name = 'electionpage/populateScrapers.html'
    electionPage = None  # populated in get_queryset
    permission_required = [
        'electionpage.add_scrapableelectionpage',
        'scraper.change_scraper']

    def get_factory_kwargs(self):
        kwargs = super().get_factory_kwargs()
        kwargs['extra'] = 0
        return kwargs

    def get_success_url(self):
        return reverse("populateScrapers", args=(self.electionPage.slug,))

    def get_queryset(self):
        self.electionPage = ScrapableElectionPage.objects.get(slug=self.kwargs['slug'])
        return self.electionPage.listOfScrapers.all()

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['title'] = self.electionPage.title
        context['slug'] = self.electionPage.slug
        return context


class ScrapableElectionPageCreator(PermissionRequiredMixin, FormView):
    """ A form allowing you to create a ScrapableElectionPage """
    login_url = 'login'
    redirect_field_name = 'redirect_to'
    model = ScrapableElectionPage
    form_class = ScrapableElectionPageForm
    template_name = 'electionpage/createScrapableElection.html'
    slug = None  # added in form_valid
    permission_required = ['electionpage.add_scrapableelectionpage']

    def get_success_url(self):
        return reverse("populateScrapers", args=(self.slug,))

    def form_valid(self, form):
        form.instance.save()
        self.slug = form.instance.slug
        assert form.cleaned_data['numElections'] <= 60
        for _ in range(form.cleaned_data['numElections']):
            scraper = Scraper()
            scraper.scrapableURL = ""
            scraper.sourceURL = ""
            scraper.areResultsCertified = form.cleaned_data['areResultsCertified']
            scraper.save()
            form.instance.listOfScrapers.add(scraper)

        return super().form_valid(form)


class Index(TemplateView):
    """ How to get started with election page administration """
    template_name = 'electionpage/index.html'
    build_path = 'epAdmin.html'

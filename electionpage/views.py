from django.contrib.auth.mixins import LoginRequiredMixin
from django.urls import reverse
from django.views.generic.base import TemplateView
from django.views.generic.detail import DetailView
from django.views.generic.edit import FormView
from extra_views import ModelFormSetView

from electionpage.forms import ScrapableElectionPageForm
from scraper.forms import ScraperForm
from scraper.models import Scraper
from scraper.scrapeWorker import ScrapeWorker
from electionpage.models import ElectionPage, ScrapableElectionPage


class ElectionPageView(DetailView):
    """ Visualizing all elections in an election page """
    model = ElectionPage
    template_name = 'electionpage/electionPage.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['jsonConfigs'] = self.object.listOfElections
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
        return context


class ScrapeAll(DetailView):
    """
    Scrapes everything we can in this election
    """
    model = ScrapableElectionPage
    template_name = 'electionpage/scrapeAllResults.html'

    def get_context_data(self, **kwargs):
        scraperObject = self.get_object()
        user = self.request.user

        results = []
        for scraper in self.object.listOfScrapers.all():
            try:
                ScrapeWorker.scrape(scraper, self.request.user)
                succeeded = True
            except BaseException:
                succeeded = False

            results.append({'scraper': scraper, 'succeeded': succeeded})

        context = super().get_context_data(**kwargs)
        context['title'] = self.object.title
        context['slug'] = self.object.slug
        context['results'] = results
        return context


class PopulateScrapers(LoginRequiredMixin, ModelFormSetView):
    """ A form allowing you to create a ScrapableElectionPage """
    login_url = 'login'
    redirect_field_name = 'redirect_to'
    model = Scraper
    form_class = ScraperForm
    template_name = 'electionPage/populateScrapers.html'

    def get_factory_kwargs(self):
        kwargs = super().get_factory_kwargs()
        kwargs['extra'] = 0
        return kwargs

    def get_success_url(self):
        return reverse("electionPage", args=(self.electionPage.slug,))

    def get_queryset(self):
        self.electionPage = ScrapableElectionPage.objects.get(slug=self.kwargs['slug'])
        return self.electionPage.listOfScrapers.all()

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['title'] = self.electionPage.title
        context['slug'] = self.electionPage.slug
        return context


class ScrapableElectionPageCreator(LoginRequiredMixin, FormView):
    """ A form allowing you to create a ScrapableElectionPage """
    login_url = 'login'
    redirect_field_name = 'redirect_to'
    model = ScrapableElectionPage
    form_class = ScrapableElectionPageForm
    template_name = 'electionPage/createScrapableElection.html'

    def get_success_url(self):
        return reverse("populateScrapers", args=(self.slug,))

    def form_valid(self, form):
        form.instance.save()
        self.slug = form.instance.slug
        for i in range(form.cleaned_data['numElections']):
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

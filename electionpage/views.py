from django.contrib.auth.mixins import LoginRequiredMixin
from django.urls import reverse
from django.views.generic.base import TemplateView
from django.views.generic.detail import DetailView
from django.views.generic.edit import FormView
from extra_views import ModelFormSetView

from electionpage.forms import ScrapableElectionPageForm
from scraper.forms import ScraperForm
from scraper.models import Scraper
from electionpage.models import ElectionPage, ScrapableElectionPage


class ElectionPageView(DetailView):
    """ Visualizing a single JsonConfig """
    model = ElectionPage
    template_name = 'electionpage/electionPage.html'


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
        return context

    def formset_valid(self, formset):
        scrapableElectionPage = ScrapableElectionPage()
        scrapableElectionPage.save()

        for form in formset:
            scrapableElectionPage.listOfScrapers.add(form.instance)
        scrapableElectionPage.save()

        return super().formset_valid(formset)


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

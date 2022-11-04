from django.views.generic.detail import DetailView

from electionpage.models import ElectionPage


class ElectionPageView(DetailView):
    """ Visualizing a single JsonConfig """
    model = ElectionPage
    template_name = 'electionpage/electionPage.html'

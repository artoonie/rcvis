""" The django views file """

import urllib.parse

# Django helpers

from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib.auth.models import User
from django.http import JsonResponse, HttpResponse
from django.shortcuts import render
from django.templatetags.static import static
from django.urls import reverse
from django.utils.decorators import method_decorator
from django.views import View
from django.views.decorators.cache import never_cache
from django.views.decorators.clickjacking import xframe_options_exempt
from django.views.generic.base import RedirectView
from django.views.generic.base import TemplateView
from django.views.generic.detail import DetailView
from django.views.generic.edit import CreateView
from rest_framework import permissions, viewsets

# rcvis helpers
from rcvis.settings import OFFLINE_MODE
from visualizer.graphCreator.graphCreator import make_graph_with_file, BadJSONError
from .bargraph.graphToD3 import D3Bargraph
from .forms import JsonConfigForm
from .models import JsonConfig
from .permissions import IsOwnerOrReadOnly
from .sankey.graphToD3 import D3Sankey
from .serializers import JsonConfigSerializer, UserSerializer
from .tabular.tabular import TabulateByRoundInteractive,\
    TabulateByRound,\
    TabulateByCandidate,\
    TabularCandidateByRound
from .tasks import create_movie
from .validators import try_to_load_json


class Index(TemplateView):
    """ The homepage """
    template_name = 'visualizer/index.html'
    build_path = 'index.html'


#pylint: disable=too-many-ancestors
class Upload(CreateView):
    """ The upload page """
    template_name = 'visualizer/uploadFile.html'
    success_url = 'visualize={slug}'
    model = JsonConfig
    form_class = JsonConfigForm
    build_path = "upload.html"

    def form_valid(self, form):
        try:
            try_to_load_json(form.cleaned_data['jsonFile'])
        except BadJSONError:
            return self.form_invalid(form)
        except Exception:  # pylint: disable=broad-except
            return render(self.request, 'visualizer/errorUploadFailedGeneric.html')

        form.save()
        return super().form_valid(form)

    def form_invalid(self, form):
        return render(self.request, 'visualizer/errorBadJson.html')


def _get_data_for_view(config):
    graph = make_graph_with_file(config.jsonFile,
                                 config.excludeFinalWinnerAndEliminatedCandidate)
    d3Bargraph = D3Bargraph(graph)
    d3Sankey = D3Sankey(graph)
    tabularByCandidate = TabulateByCandidate(
        graph, config.onlyShowWinnersTabular)
    tabularCandidateByRound = TabularCandidateByRound(graph)
    tabularByRound = TabulateByRound(graph)
    tabularByRoundInteractive = TabulateByRoundInteractive(graph)
    offlineMode = OFFLINE_MODE
    return {
        'title': graph.title,
        'date': graph.dateString,
        'config': config,
        'bargraphjs': d3Bargraph.js,
        'sankeyjs': d3Sankey.js,
        'tabularByCandidate': tabularByCandidate,
        'tabularCandidateByRound': tabularCandidateByRound,
        'tabularByRound': tabularByRound,
        'tabularByRoundInteractive': tabularByRoundInteractive,
        'offlineMode': offlineMode
    }


def _make_complete_url(request, urlWithoutDomain):
    scheme = 'https' if request.is_secure() else 'http'
    host = request.META['HTTP_HOST']
    return f"{scheme}://{host}{urlWithoutDomain}"


class Visualize(DetailView):
    """ Visualizing a single JsonConfig """
    model = JsonConfig
    template_name = 'visualizer/visualize.html'

    def get_context_data(self, **kwargs):
        config = super().get_context_data(**kwargs)

        data = _get_data_for_view(config['jsonconfig'])

        # oembed href
        slug = config['jsonconfig'].slug
        iframeUrl = _make_complete_url(self.request, reverse("visualizeEmbedded", args=(slug,)))
        iframeUrl = urllib.parse.quote_plus(iframeUrl)
        oembedUrl = _make_complete_url(self.request, reverse("oembed")) + f"?url={iframeUrl}"
        data['oembed_url'] = oembedUrl

        return data


@method_decorator(xframe_options_exempt, name='dispatch')
class VisualizeEmbedded(DetailView):
    """ The embedded visualization, pointed to from Oembed """
    model = JsonConfig
    template_name = 'visualizer/visualize-embedded.html'

    def get_context_data(self, **kwargs):
        config = super().get_context_data(**kwargs)

        data = _get_data_for_view(config['jsonconfig'])

        # oembed href
        data['vistype'] = self.request.GET.get('vistype', 'barchart-interactive')

        return data


@method_decorator(xframe_options_exempt, name='dispatch')
class Oembed(View):
    """ The oembed protocol, pointing to VisualizeEmbedded """
    #pylint: disable=no-self-use

    def get(self, request):
        """ Overriding the getter for this class-based view """
        requestData = request.GET
        url = str(requestData.get('url'))  # only required field
        maxwidth = int(requestData.get('maxwidth', 1440))
        maxheight = int(requestData.get('maxheight', 1080))
        returnType = str(requestData.get('type', 'json'))
        vistype = str(requestData.get('vistype', 'barchart-interactive'))

        if returnType == 'xml':
            # not implemented
            return HttpResponse(status=501)

        renderData = {
            'width': maxwidth,
            'height': maxheight,
            'iframe_url': url,
            'vistype': vistype}

        httpResponse = render(request, 'visualizer/oembed.html', renderData)

        jsonData = {
            "version": "1.0",
            "title": "Ranked Choice Voting Visualization",
            "cache_age": "86400",  # one day
            "author_name": "rcvis.com",
            "author_url": "http://www.rcvis.com/",
            "provider_name": "rcvis.com",
            "provider_url": "http://www.rcvis.com/",
            "thumbnail": _make_complete_url(request, static("visualizer/icon_interactivebar.gif"))
        }
        jsonData['type'] = "rich"
        jsonData['width'] = maxwidth
        jsonData['height'] = maxheight
        jsonData['url'] = url
        jsonData['html'] = httpResponse.content.decode('utf-8')

        return JsonResponse(jsonData)

# For django REST


class JsonConfigViewSet(viewsets.ModelViewSet):
    """ API endpoint that allows tabulated JSONs to be viewed or edited. """
    queryset = JsonConfig.objects.all().order_by('-uploadedAt')  # pylint: disable=no-member
    serializer_class = JsonConfigSerializer
    permission_classes = [permissions.IsAuthenticated, IsOwnerOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class UserViewSet(viewsets.ReadOnlyModelViewSet):
    """ API endpoint that allows you to view but not edit Users. """
    queryset = User.objects.all().order_by('-id')
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAdminUser]


# For Movie generation and viewing

@method_decorator(never_cache, name='dispatch')
class MovieGenerationView(DetailView):
    """ The view used by movie generation - not intended to be user-facing,
        but no harm done by exposing it either."""
    model = JsonConfig
    template_name = 'movie/movie-generation.html'

    def get_context_data(self, **kwargs):
        config = super().get_context_data(**kwargs)
        return _get_data_for_view(config['jsonconfig'])


class CreateMovie(LoginRequiredMixin, RedirectView):
    """ Create a movie. Admin access required for this long-running process. """
    login_url = '/admin/login/'
    permanent = False
    query_string = False

    def _get_domain(self):
        relativeUrl = self.request.get_full_path()
        absoluteUrl = self.request.build_absolute_uri(relativeUrl)
        return absoluteUrl[:absoluteUrl.find(relativeUrl)]

    def get_redirect_url(self, *args, **kwargs):
        domain = self._get_domain()

        slug = kwargs['slug']
        jsonconfig = JsonConfig.objects.get(slug=slug)  # pylint: disable=no-member
        jsonconfig.isVideoGenerationInProgress = True
        jsonconfig.save()
        create_movie.delay(jsonconfig.pk, domain)

        return reverse('movieOnlyView', args=(jsonconfig.slug,))


@method_decorator(never_cache, name='dispatch')
class VisualizeMovie(DetailView):
    """ Temporary view to see just the movie visualization.
        Delete once it's integrated into a share button."""
    model = JsonConfig
    template_name = 'movie/only-movie.html'

    def get_context_data(self, **kwargs):
        config = super().get_context_data(**kwargs)
        return _get_data_for_view(config['jsonconfig'])

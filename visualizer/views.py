""" The django views file """

import logging
import traceback
import urllib.parse

# Django helpers
from django.contrib.auth import get_user_model
from django.contrib.auth.mixins import LoginRequiredMixin
from django.http import JsonResponse, HttpResponse
from django.shortcuts import render
from django.templatetags.static import static
from django.urls import resolve
from django.urls import reverse
from django.urls import Resolver404
from django.utils.decorators import method_decorator
from django.views import View
from django.views.decorators.clickjacking import xframe_options_exempt
from django.views.generic.base import TemplateView, RedirectView
from django.views.generic.detail import DetailView
from django.views.generic.edit import CreateView
from rest_framework import permissions, viewsets
from rest_framework_tracking.mixins import LoggingMixin

# rcvis helpers
from accounts.permissions import IsOwnerOrReadOnly, HasAPIAccess
from common import viewUtils
from visualizer import validators
from visualizer.common import make_complete_url, intify
from visualizer.forms import JsonConfigForm
from visualizer.graph.graphCreator import BadJSONError
from visualizer.sidecar.reader import BadSidecarError
from visualizer.models import JsonConfig, HomepageFeaturedElectionColumn
from visualizer.serializers import JsonOnlySerializer, BallotpediaSerializer, UserSerializer
from visualizer.wikipedia.wikipedia import WikipediaExport

logger = logging.getLogger(__name__)


class Index(TemplateView):
    """ The homepage """
    template_name = 'visualizer/index.html'
    build_path = 'index.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)

        # most recent uploads
        models = JsonConfig.objects.all().order_by('-uploadedAt')[:10]
        context['mostRecent'] = [{'slug': model.slug,
                                  'title': model.title,
                                  'numRounds': model.numRounds,
                                  'numCandidates': model.numCandidates}
                                 for model in models]

        # featured elections
        columns = HomepageFeaturedElectionColumn.objects.all()
        featuredElections = []
        for column in columns:
            featuredElections.append({
                'title': column.title,
                'links': [{'slug': link.jsonConfig.slug,
                           'title': link.title}
                          for link in column.links_in_column.all()]
            })
        context['featuredElections'] = featuredElections

        return context


#pylint: disable=too-many-ancestors
class Upload(LoginRequiredMixin, CreateView):
    """ The upload page """
    login_url = 'login'
    redirect_field_name = 'redirect_to'
    template_name = 'visualizer/uploadFile.html'
    success_url = 'v/{slug}'
    model = JsonConfig
    form_class = JsonConfigForm
    build_path = "upload.html"
    include = JsonConfig.get_all_non_auto_fields()

    def form_valid(self, form):
        try:
            graph = validators.try_to_load_jsons(
                form.cleaned_data['jsonFile'],
                form.cleaned_data['candidateSidecarFile'])

            self.model = form.save(commit=False)
            self.model.owner = self.request.user
            self.model.title = graph.title
            self.model.numRounds = len(graph.summarize().rounds)
            self.model.numCandidates = len(graph.summarize().candidates)
            self.model.save()

        except BadJSONError as exception:
            form.add_error('jsonFile', str(exception))
            tbText = traceback.format_exc()
            # lgtm [py/clear-text-logging-sensitive-data]
            logger.error("BadJSONError. User %s: %s", self.request.user.username, tbText)
            return self.form_invalid(form)
        except BadSidecarError as exception:
            form.add_error('candidateSidecarFile', str(exception))
            # lgtm [py/clear-text-logging-sensitive-data]
            logger.error("BadSidecarError. User %s: %s", self.request.user.username, str(exception))
            return self.form_invalid(form)
        except Exception:  # pylint: disable=broad-except
            exceptionString = traceback.format_exc()
            # lgtm [py/clear-text-logging-sensitive-data]
            logger.error("Misc Exception. User %s: %s", self.request.user.username, exceptionString)

            # Not sure how dangerous this traceback can be...
            # Limit it to admins only
            if not self.request.user.is_staff:
                context = {'debugInfo': 'Please log in or contact us to see detailed errors'}
            else:
                context = {'debugInfo': exceptionString}

            return render(self.request, 'visualizer/errorUploadFailedGeneric.html', context=context)

        form.save()
        return super().form_valid(form)

    def form_invalid(self, form):
        context = {'formErrorList': form.errors}
        return render(self.request, 'visualizer/errorBadJson.html', context=context)


class Visualize(DetailView):
    """ Visualizing a single JsonConfig """
    model = JsonConfig
    template_name = 'visualizer/visualize.html'

    def get_context_data(self, **kwargs):
        config = super().get_context_data(**kwargs)

        data = viewUtils.get_data_for_view(config['jsonconfig'])

        # oembed href
        vistype = self.request.GET.get('vistype', 'barchart-interactive')
        slug = config['jsonconfig'].slug
        iframeUrl = make_complete_url(self.request, reverse("visualizeEmbedded", args=(slug,)))
        iframeUrl = urllib.parse.quote_plus(iframeUrl)
        args = f"?url={iframeUrl}&vistype={vistype}"
        oembedUrl = make_complete_url(self.request, reverse("oembed")) + args
        data['oembed_url'] = oembedUrl

        # embedly href
        embedlyUrl = make_complete_url(
            self.request, reverse(
                "visualizeEmbedlyDefault", args=(
                    slug,)))
        data['embedlyUrl'] = embedlyUrl

        # wikipedia embedding
        referenceUrl = make_complete_url(self.request, reverse("visualize", args=(slug,)))
        referenceUrl += "#tabular-candidate-by-round"
        data['wikicodeExport'] = WikipediaExport(data['graph'], referenceUrl).create_wikicode()

        return data


@method_decorator(xframe_options_exempt, name='dispatch')
class VisualizeEmbedded(DetailView):
    """
    The embedded visualization, to be used in an iframe.
    """
    model = JsonConfig
    template_name = 'visualizer/visualize-embedded.html'

    def get_context_data(self, **kwargs):
        config = super().get_context_data(**kwargs)

        data = viewUtils.get_data_for_view(config['jsonconfig'])

        # oembed href
        data['vistype'] = self.request.GET.get('vistype', 'barchart-interactive')

        return data


class VisualizeEmbedly(RedirectView):
    """
    VisualizeEmbedded, but without any custom arguments so it can be supported by embedly.
    Since embedly doesn't allow custom arguments, we cannot use ?vistype in oembed.
    We have replaced this with /vo/slug/vistype instead,

    Further, we simplify vistype so it reads more easily. The changed vistypes are:
    barchart-interactive         --> bar
    barchart-fixed               --> bar-static
    tabular-candidate-by-round   --> table
    tabular-by-round-interactive --> table-by-round
    tabular-by-round             --> table-by-round-static
    tabular-by-candidate         --> table-by-candidate
    """
    permanent = True
    pattern_name = 'visualizeEmbedded'

    def get_redirect_url(self, *args, **kwargs):
        slug = kwargs['slug']
        vistype = kwargs.get('vistype')  # optional

        # Simplifying translations:
        if not vistype:
            vistype = 'barchart-interactive'
        elif vistype == 'bar':
            vistype = 'barchart-interactive'
        elif vistype == 'bar-static':
            vistype = 'barchart-fixed'
        elif vistype == 'table':
            vistype = 'tabular-candidate-by-round'
        elif vistype == 'table-by-round':
            vistype = 'tabular-by-round-interactive'
        elif vistype == 'table-by-round-static':
            vistype = 'tabular-by-round'
        elif vistype == 'table-by-candidate':
            vistype = 'tabular-by-candidate'

        return super().get_redirect_url(slug) + "?vistype=" + vistype


@method_decorator(xframe_options_exempt, name='dispatch')
class VisualizeBallotpedia(DetailView):
    """ The embedded visualization, pointed to from Oembed """
    model = JsonConfig
    template_name = 'visualizer/visualize-ballotpedia.html'

    def get_context_data(self, **kwargs):
        config = super().get_context_data(**kwargs)
        data = viewUtils.get_data_for_view(config['jsonconfig'])
        data['numVotesFirstRound'] = intify(data['graph'].summarize().rounds[0].totalActiveVotes)

        sidecarData = data['candidateSidecarDataPyObj']
        if sidecarData is None:
            data['hasIncumbents'] = False
        else:
            data['hasIncumbents'] = any(d['incumbent'] for d in sidecarData['info'].values())
        return data


@method_decorator(xframe_options_exempt, name='dispatch')
class Oembed(View):
    """ The oembed protocol, pointing to VisualizeEmbedded """

    @classmethod
    def _get_visualize_embedded_url_from(cls, url):
        """ Returns a visualizeEmbedded URL. Can pass a visualize or a visualizeEmbedded URL """
        # Parse the URL
        urlPath = urllib.parse.urlparse(url).path
        try:
            resolverMatch = resolve(urlPath)
        except Resolver404:
            return None

        kwargs = resolverMatch.kwargs
        if not kwargs:
            # invalid URL
            return None
        return reverse('visualizeEmbedded', kwargs=kwargs)

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

        embedUrl = self._get_visualize_embedded_url_from(url)
        embedUrl = make_complete_url(request, embedUrl)
        if not embedUrl:
            # invalid URL
            HttpResponse(status=404)
        html = viewUtils.get_embed_html(embedUrl, request, vistype, maxwidth, maxheight)

        jsonData = {
            "version": "1.0",
            "title": "Ranked Choice Voting Visualization",
            "cache_age": "86400",  # one day
            "author_name": "rcvis.com",
            "author_url": "http://www.rcvis.com/",
            "provider_name": "rcvis.com",
            "provider_url": "http://www.rcvis.com/",
            "thumbnail": make_complete_url(request, static("visualizer/icon_interactivebar.gif"))
        }
        jsonData['type'] = "rich"
        jsonData['width'] = maxwidth
        jsonData['height'] = maxheight
        jsonData['url'] = url
        jsonData['html'] = html

        return JsonResponse(jsonData)

# For django REST


class JsonOnlyViewSet(LoggingMixin, viewsets.ModelViewSet):
    """ API endpoint that allows tabulated JSONs to be viewed or edited. """
    queryset = JsonConfig.objects.all().order_by('-uploadedAt')
    serializer_class = JsonOnlySerializer
    permission_classes = [HasAPIAccess, IsOwnerOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class BallotpediaViewSet(LoggingMixin, viewsets.ModelViewSet):
    """ API endpoint with all ballotpedia fields """
    queryset = JsonConfig.objects.all().order_by('-uploadedAt')
    serializer_class = BallotpediaSerializer
    permission_classes = [HasAPIAccess, IsOwnerOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class UserViewSet(LoggingMixin, viewsets.ReadOnlyModelViewSet):
    """ API endpoint that allows you to view but not edit Users. """
    queryset = get_user_model().objects.all().order_by('-id')
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAdminUser]

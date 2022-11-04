""" The django views file """

import json
import logging
import tempfile
import time
import traceback
import urllib.parse

# Django helpers
from django.conf import settings
from django.contrib.auth import get_user_model
from django.contrib.auth.mixins import LoginRequiredMixin
from django.core.cache import cache
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
from visualizer.forms import UploadForm, UploadByDataTableForm
from visualizer.graph import readDataTablesResult
from visualizer.graph.graphCreator import BadJSONError
from visualizer.serializers import BaseVisualizationSerializer
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
        models = JsonConfig.get_all_public().order_by('-uploadedAt')[:10]
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
    form_class = UploadForm
    model = JsonConfig
    build_path = "upload.html"
    include = JsonConfig.get_all_non_auto_fields()

    def _actions_before_save(self, form):
        """
        This is a horribly hacky way to ensure that upload-by-datatables
        actually creates the file to upload - no-op here, but our child
        uses it. Love ya kiddo!
        """

    def form_valid(self, form):
        try:
            graph = validators.try_to_load_jsons(
                form.cleaned_data['jsonFile'],
                form.cleaned_data['candidateSidecarFile'])

            self.model = form.save(commit=False)
            self.model.owner = self.request.user
            BaseVisualizationSerializer.populate_model_with_json_data(self.model, graph)
            self._actions_before_save(form)
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
        except BaseException:  # pylint: disable=broad-except
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


#pylint: disable=too-many-ancestors
class UploadByDataTable(Upload):
    """ Upload form when using the datatables input """
    form_class = UploadByDataTableForm

    def _actions_before_save(self, form):
        self.model.jsonFile.save('datatablesfile.json', form.cleaned_data['jsonFile'])


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
        embedUrl = reverse("visualizeEmbedly", args=(slug, vistype))
        iframeUrl = make_complete_url(self.request, embedUrl)
        iframeUrl = urllib.parse.quote_plus(iframeUrl)
        args = f"?url={iframeUrl}"
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
    """ The embedded ballotpedia visualization """
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


class DownloadRawData(LoginRequiredMixin, DetailView):
    """
    Download raw data - don't just share the presigned AWS URL, we want a fresh URL
    for each download.
    """
    model = JsonConfig
    template_name = 'visualizer/rawdata.html'
    login_url = 'login'
    redirect_field_name = 'redirect_to'

    def get_context_data(self, **kwargs):
        config = super().get_context_data(**kwargs)

        self.request.user.userprofile.downloadedRawData.add(self.object)
        self.request.user.userprofile.save()

        return {'title': config['jsonconfig'].title,
                'jsonfile': config['jsonconfig'].jsonFile}


@method_decorator(xframe_options_exempt, name='dispatch')
class Oembed(View):
    """ The oembed protocol, pointing to VisualizeEmbedded """

    @classmethod
    def _get_visualize_embedded_url_from(cls, url):
        """ Returns a visualizeEmbedly URL. Can pass a visualize or a visualizeEmbedly URL """
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
        if 'vistype' not in kwargs:
            kwargs['vistype'] = 'barchart-interactive'
        return reverse('visualizeEmbedly', kwargs=kwargs)

    def get(self, request):
        """ Overriding the getter for this class-based view """
        requestData = request.GET
        url = str(requestData.get('url'))  # only required field
        maxwidth = int(requestData.get('maxwidth', 1440))
        maxheight = int(requestData.get('maxheight', 1080))
        returnType = str(requestData.get('type', 'json'))

        if returnType == 'xml':
            # not implemented
            return HttpResponse(status=501)

        embedUrl = self._get_visualize_embedded_url_from(url)
        if embedUrl is None:
            return HttpResponse(status=404)

        embedUrl = make_complete_url(request, embedUrl)
        if embedUrl is None:
            return HttpResponse(status=404)

        html = viewUtils.get_embed_html(embedUrl, maxwidth, maxheight)

        jsonData = {
            "version": "1.0",
            "title": "Ranked Choice Voting Visualization",
            "cache_age": "86400",  # one day
            "author_name": "rcvis.com",
            "author_url": "https://www.rcvis.com/",
            "provider_name": "rcvis.com",
            "provider_url": "https://www.rcvis.com/",
            "thumbnail": make_complete_url(request, static("visualizer/icon_interactivebar.gif"))
        }
        jsonData['type'] = "rich"
        jsonData['width'] = maxwidth
        jsonData['height'] = maxheight
        jsonData['url'] = url
        jsonData['html'] = html

        return JsonResponse(jsonData)


class ValidateDataEntry(LoginRequiredMixin, View):
    """ Validation AJAX view: would the current input succeed in creating a graph? """

    @classmethod
    def _make_failure(cls, errNum, message):
        return JsonResponse({  # lgtm [py/stack-trace-exposure]
            'message': f'Error #{errNum}: {message}',
            'success': False
        })

    def _check_rate_limit(self):
        """
        Returns the number of ms the user must wait before trying again.
        If 0 is returned, the user is not rate limited.
        """
        if not settings.RATE_LIMIT_AJAX:
            # Rate limiting disabled - should only happen in tests
            return 0

        user = self.request.user
        cacheKey = 'last_req_' + str(user.id)
        lastRequest = cache.get(cacheKey, 0)
        now = time.time()
        secsSinceLastReq = now - lastRequest
        secsToWaitBeforeRateLimit = 5
        if secsSinceLastReq > secsToWaitBeforeRateLimit:
            cache.set(cacheKey, now)
            return 0

        # lgtm [py/clear-text-logging-sensitive-data]
        logger.warning("User %s has been rate limited", self.request.user.username)
        return secsToWaitBeforeRateLimit - secsSinceLastReq

    def post(self, request):
        """ Doesn't render a webpage - just text """
        secsToWait = self._check_rate_limit()
        if secsToWait > 0:
            secsToWait = int(secsToWait) + 1
            message = f"Please wait {secsToWait} seconds before trying again"
            return JsonResponse({'message': message, 'success': False})

        jsonData = request.POST
        try:
            reader = readDataTablesResult.ReadDataTableJSON(jsonData)
            urcvtData = reader.convert_to_urcvt()
        except readDataTablesResult.InvalidDataTableInput as exc:
            return self._make_failure(10, 'Data is not valid: ' + str(exc))
        except BaseException as exc:  # pylint: disable=broad-except
            logger.warning(exc)
            return self._make_failure(20, 'Unknown error')

        with tempfile.TemporaryFile(mode='w+') as tf:
            json.dump(urcvtData, tf)
            try:
                validators.try_to_load_jsons(tf, None)
            except BadJSONError as exc:
                logger.warning(exc)
                return self._make_failure(30, 'Could not generate a visualization: ' + str(exc))
            except BaseException as exc:  # pylint: disable=broad-except
                logger.warning(exc)
                return self._make_failure(40, 'Unknown error')
            return JsonResponse({'message': "Data is valid!", 'success': True})


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

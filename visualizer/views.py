""" The django views file """

import urllib.parse

# Django helpers
from django.contrib.auth import get_user_model
from django.http import JsonResponse, HttpResponse
from django.shortcuts import render
from django.templatetags.static import static
from django.urls import resolve
from django.urls import reverse
from django.urls import Resolver404
from django.utils.decorators import method_decorator
from django.views import View
from django.views.decorators.clickjacking import xframe_options_exempt
from django.views.generic.base import TemplateView
from django.views.generic.detail import DetailView
from django.views.generic.edit import CreateView
from rest_framework import permissions, viewsets

# rcvis helpers
from common import viewUtils
from visualizer.common import make_complete_url
from visualizer.forms import JsonConfigForm
from visualizer.graphCreator.graphCreator import BadJSONError
from visualizer.models import JsonConfig
from visualizer.permissions import IsOwnerOrReadOnly
from visualizer.serializers import JsonConfigSerializer, UserSerializer
from visualizer.validators import try_to_load_json
from visualizer.wikipedia.wikipedia import WikipediaExport


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

        return context


#pylint: disable=too-many-ancestors
class Upload(CreateView):
    """ The upload page """
    template_name = 'visualizer/uploadFile.html'
    success_url = 'v/{slug}'
    model = JsonConfig
    form_class = JsonConfigForm
    build_path = "upload.html"

    def form_valid(self, form):
        try:
            graph = try_to_load_json(form.cleaned_data['jsonFile'])

            self.model = form.save(commit=False)
            self.model.title = graph.title
            self.model.numRounds = len(graph.summarize().rounds)
            self.model.numCandidates = len(graph.summarize().candidates)
            self.model.save()

        except BadJSONError:
            return self.form_invalid(form)
        except Exception:  # pylint: disable=broad-except
            return render(self.request, 'visualizer/errorUploadFailedGeneric.html')

        form.save()
        return super().form_valid(form)

    def form_invalid(self, form):
        return render(self.request, 'visualizer/errorBadJson.html')


class Visualize(DetailView):
    """ Visualizing a single JsonConfig """
    model = JsonConfig
    template_name = 'visualizer/visualize.html'

    def get_context_data(self, **kwargs):
        config = super().get_context_data(**kwargs)

        data = viewUtils.get_data_for_view(config['jsonconfig'])

        # oembed href
        slug = config['jsonconfig'].slug
        iframeUrl = make_complete_url(self.request, reverse("visualizeEmbedded", args=(slug,)))
        iframeUrl = urllib.parse.quote_plus(iframeUrl)
        oembedUrl = make_complete_url(self.request, reverse("oembed")) + f"?url={iframeUrl}"
        data['oembed_url'] = oembedUrl

        # html embedding
        embedUrl = reverse('visualizeEmbedded', args=(slug,))
        embedUrl = make_complete_url(self.request, embedUrl)
        data['htmlEmbedExport'] = viewUtils.get_embed_html(
            embedUrl, self.request, 'barchart-interactive', 400, 800)

        # wikipedia embedding
        referenceUrl = make_complete_url(self.request, reverse("visualize", args=(slug,)))
        referenceUrl += "#tabular-candidate-by-round"
        data['wikicodeExport'] = WikipediaExport(data['graph'], referenceUrl).create_wikicode()

        return data


@method_decorator(xframe_options_exempt, name='dispatch')
class VisualizeEmbedded(DetailView):
    """ The embedded visualization, pointed to from Oembed """
    model = JsonConfig
    template_name = 'visualizer/visualize-embedded.html'

    def get_context_data(self, **kwargs):
        config = super().get_context_data(**kwargs)

        data = viewUtils.get_data_for_view(config['jsonconfig'])

        # oembed href
        data['vistype'] = self.request.GET.get('vistype', 'barchart-interactive')

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


class JsonConfigViewSet(viewsets.ModelViewSet):
    """ API endpoint that allows tabulated JSONs to be viewed or edited. """
    queryset = JsonConfig.objects.all().order_by('-uploadedAt')
    serializer_class = JsonConfigSerializer
    permission_classes = [permissions.IsAuthenticated, IsOwnerOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class UserViewSet(viewsets.ReadOnlyModelViewSet):
    """ API endpoint that allows you to view but not edit Users. """
    queryset = get_user_model().objects.all().order_by('-id')
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAdminUser]

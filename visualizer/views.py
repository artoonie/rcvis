""" The django views file """

import urllib.parse

# Django helpers
from django.contrib.auth import get_user_model
from django.http import JsonResponse, HttpResponse
from django.shortcuts import render
from django.templatetags.static import static
from django.urls import reverse
from django.utils.decorators import method_decorator
from django.views import View
from django.views.decorators.clickjacking import xframe_options_exempt
from django.views.generic.base import TemplateView
from django.views.generic.detail import DetailView
from django.views.generic.edit import CreateView
from rest_framework import permissions, viewsets

# rcvis helpers
from common.viewUtils import _get_data_for_view
from visualizer.graphCreator.graphCreator import BadJSONError
from .forms import JsonConfigForm
from .models import JsonConfig
from .permissions import IsOwnerOrReadOnly
from .serializers import JsonConfigSerializer, UserSerializer
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
    queryset = get_user_model().objects.all().order_by('-id')
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAdminUser]

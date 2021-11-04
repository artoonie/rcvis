""" Views for movie generation and viewing """
from django.contrib.auth.mixins import LoginRequiredMixin
from django.urls import reverse
from django.utils.decorators import method_decorator
from django.views.decorators.cache import never_cache
from django.views.generic.base import RedirectView
from django.views.generic.detail import DetailView

from common.viewUtils import get_data_for_view, request_to_domain
from visualizer.models import JsonConfig, MovieGenerationStatuses
from movie.tasks import launch_big_dynos


#pylint: disable=too-many-ancestors
@method_decorator(never_cache, name='dispatch')
class MovieGenerationView(DetailView):
    """ The view used by movie generation - not intended to be user-facing,
        but no harm done by exposing it either."""
    model = JsonConfig
    template_name = 'movie/movie-generation.html'

    def get_context_data(self, **kwargs):
        config = super().get_context_data(**kwargs)
        return get_data_for_view(config['jsonconfig'])


class CreateMovie(LoginRequiredMixin, RedirectView):
    """ Create a movie. Admin access required for this long-running process. """
    login_url = '/admin/login/'
    permanent = False
    query_string = False

    def get_redirect_url(self, *args, **kwargs):
        domain = request_to_domain(self.request)

        slug = kwargs['slug']
        jsonconfig = JsonConfig.objects.get(slug=slug)
        jsonconfig.movieGenerationStatus = MovieGenerationStatuses.NOT_STARTED
        jsonconfig.save()

        # Launch a big dyno, which will in turn create the movie
        launch_big_dynos(jsonconfig.pk, domain)

        return reverse('movieOnlyView', args=(jsonconfig.slug,))


#pylint: disable=too-many-ancestors
@method_decorator(never_cache, name='dispatch')
class VisualizeMovie(DetailView):
    """ Temporary view to see just the movie visualization.
        Delete once it's integrated into a share button."""
    model = JsonConfig
    template_name = 'movie/only-movie.html'

    def get_context_data(self, **kwargs):
        config = super().get_context_data(**kwargs)
        data = get_data_for_view(config['jsonconfig'])
        orientation = self.request.GET.get('orientation', 'horizontal')
        if orientation == 'vertical':
            data['movie'] = data['config'].movieVertical
        else:
            data['movie'] = data['config'].movieHorizontal
        return data

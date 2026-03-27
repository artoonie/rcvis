"""
Custom cache middleware.

UpdateCacheWithoutMaxAgeMiddleware: prevents UpdateCacheMiddleware from
leaking max-age into browser responses for views that set Cache-Control:
no-cache.  UpdateCacheMiddleware stores the rendered response in Django's
server-side file cache (good — avoids expensive graph recomputation) but
also appends max-age=600 to the outgoing Cache-Control header (bad — tells
the browser not to revalidate for 10 minutes).  This subclass calls super()
to get the server-side caching, then strips max-age from any response that
already has no-cache, so the browser always revalidates via If-Modified-Since.

CurrentRequestMiddleware: stores the current request in a thread-local so
that model.save() can access the real request host for cache key construction
(needed by _purge_django_cache to match the keys created by the cache
middleware, which vary by host — e.g. localhost:8000 vs example.com).
"""

import threading

from django.middleware.cache import UpdateCacheMiddleware
from django.utils.cache import cc_delim_re
from django.utils.deprecation import MiddlewareMixin

# Thread-local storage for the current request.
_thread_locals = threading.local()


def get_current_request():
    """Return the current request, or None if called outside a request cycle."""
    return getattr(_thread_locals, 'request', None)


class CurrentRequestMiddleware(MiddlewareMixin):
    """Store the current request in a thread-local for access by model code."""

    def process_request(self, request):
        _thread_locals.request = request

    def process_response(self, request, response):
        _thread_locals.request = None
        return response


class UpdateCacheWithoutMaxAgeMiddleware(UpdateCacheMiddleware):
    """UpdateCacheMiddleware that strips max-age when no-cache is set."""

    def process_response(self, request, response):
        response = super().process_response(request, response)

        # If the view set no-cache, strip max-age so the browser revalidates.
        cc = response.get('Cache-Control', '')
        if 'no-cache' in cc:
            # Remove max-age directive from the Cache-Control header
            directives = [
                d.strip() for d in cc_delim_re.split(cc)
                if not d.strip().startswith('max-age')
            ]
            response['Cache-Control'] = ', '.join(directives)

        return response

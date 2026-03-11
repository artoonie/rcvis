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
"""

from django.middleware.cache import UpdateCacheMiddleware
from django.utils.cache import cc_delim_re


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

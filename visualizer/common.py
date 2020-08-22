""" A set of common utilities to be used across modules """

INACTIVE_TEXT = "Inactive Ballots"
RESIDUAL_SURPLUS_TEXT = "Residual Surplus"


def get_host(request):
    """ Returns the HTTP_HOST, split for easy mocking """
    return request.META['HTTP_HOST']


def make_complete_url(request, urlWithoutDomain):
    """ Returns the complete URL, including domain """
    scheme = 'https' if request.is_secure() else 'http'
    host = get_host(request)
    return f"{scheme}://{host}{urlWithoutDomain}"


def intify(v):
    """ Turn into int if it's a round number """
    if abs(round(v) - v) < 1e-6:
        return "%d" % round(v)
    else:
        return "%0.2f" % v


def percentify(v):
    """ Turn a float into a percentage string """
    return str(round(1000.0 * v) / 10.0) + "%"

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


def intify(notint):
    """ Turn into int if it's a round number """
    if abs(round(notint) - notint) < 1e-6:
        return "%d" % round(notint)
    return "%0.2f" % notint


def percentify(floatVal):
    """ Turn a float into a percentage string """
    return str(round(1000.0 * floatVal) / 10.0) + "%"

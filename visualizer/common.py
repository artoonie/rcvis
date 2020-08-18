""" A set of common strings to be used across modules """

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

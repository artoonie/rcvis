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
        return f"{round(notint):,}"
    return f"{notint:,.2f}"


def percentify(numerator, denominator):
    """
    Turn a float into a percentage string.
    Or, if the denominator is zero, returns an empty string
    """
    if denominator == 0:
        return ""
    floatVal = numerator / denominator
    return str(round(10000.0 * floatVal) / 100.0) + "%"


def candidate_renames():
    """ A dictionary mapping how we should rename candidate names """
    return {
        'inactive ballots': INACTIVE_TEXT,
        'Inactive ballots': INACTIVE_TEXT,
        'exhausted': INACTIVE_TEXT,
        'residual surplus': RESIDUAL_SURPLUS_TEXT,
    }

""" accounts app to connect signal """

from django.apps import AppConfig


class AccountsAppConfig(AppConfig):
    """
    Use this instead of just "accounts" in rcvis/settings to
    ensure the signal is created once and only once.

    (well, there are theoretically times when ready() could be called
    multiple times, so we may need to handle that eventually?)
    """
    name = 'accounts'

    def ready(self):
        # pylint: disable=unused-import,import-outside-toplevel
        import accounts.signal

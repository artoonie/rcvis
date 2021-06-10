""" accounts app to connect signal """

from django.apps import AppConfig

class AccountsAppConfig(AppConfig):
    name='accounts'
    
    def ready(self):
        from . import signal

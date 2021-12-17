""" A signal that creates UserProfile whenever a User is created """

import logging
import requests

from django.conf import settings
from django.contrib.auth import get_user_model
from django.db.models.signals import post_save
from django.dispatch import receiver
from django_registration.signals import user_activated

from accounts.models import UserProfile

User = get_user_model()
logger = logging.getLogger(__name__)


# pylint: disable=unused-argument
@receiver(post_save, sender=User)
def create_profile(sender, instance, created, **kwargs):
    """
    Django signals/receivers allow hearing when certain events happen.
    This event should be triggered when a User is saved.
    It checks whether this is the creation of the object, and if so,
    creates the corresponding UserProfile.
    """
    if created:
        UserProfile.objects.create(user=instance)


@receiver(user_activated)
def user_activated_slot(sender, user, request, **kwargs):
    """
    When we receive a signal that user registration has occured,
    subscribe the user to mailchimp - on prod only
    """
    mcDc = settings.MAILCHIMP_DC
    mcListId = settings.MAILCHIMP_LIST_ID
    mcApiKey = settings.MAILCHIMP_API_KEY

    if not mcApiKey:
        logger.error("No mailchimp API key set - should not happen in production")
        return

    logger.info("Signing user %s up for mailing list", user.email)
    requests.post(f'https://{mcDc}.api.mailchimp.com/3.0/lists/{mcListId}/members',
                  auth=('apikey', mcApiKey),
                  data={
                      "email_address": user.email,
                      "FNAME": user.username,
                      "status": "subscribed",
                      "ip_signup": request.META.get('REMOTE_ADDR'),
                      "tags": ['autosignup']
                  })

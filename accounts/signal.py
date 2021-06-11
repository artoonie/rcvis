""" A signal that creates UserProfile whenever a User is created """

from django.contrib.auth import get_user_model
from django.db.models.signals import post_save
from django.dispatch import receiver

from accounts.models import UserProfile

User = get_user_model()


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

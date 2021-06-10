""" A signal that creates UserProfile whenever a User is created """

from django.contrib.auth import get_user_model
from django.db.models.signals import post_save
from django.dispatch import receiver

from accounts.models import UserProfile

User = get_user_model()

@receiver(post_save, sender=User)
def create_profile(sender, instance, created, **kwargs):
    if created:
        UserProfile.objects.create(user=instance)

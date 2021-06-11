""" Admin page configuration """
from django.contrib.auth.models import Permission
from django.contrib import admin

admin.site.register(Permission)

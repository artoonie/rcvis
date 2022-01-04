"""
Admin page changes for user profile administration
"""
from django.contrib import admin
from django.contrib.auth import get_user_model
from django.contrib.auth.admin import UserAdmin

from accounts.models import UserProfile
from visualizer.models import JsonConfig


class UserProfileInline(admin.StackedInline):
    """ Inline User Profile when looking at the Admin model """
    model = UserProfile
    can_delete = False
    verbose_name_plural = 'Profile'
    fk_name = 'user'

    def formfield_for_manytomany(self, db_field, request, **kwargs):
        if db_field.name == "downloadedRawData":
            kwargs["queryset"] = JsonConfig.objects.filter(rawDownloadedBy=request.user.id)
            kwargs["required"] = False
        return super().formfield_for_manytomany(db_field, request, **kwargs)


class CustomUserAdmin(UserAdmin):
    """ Custom user admin with the fields we care about """
    inlines = (UserProfileInline, )
    list_display = ('username', 'email', 'is_staff', 'can_use_api', 'num_raw_downloads')
    list_select_related = ('userprofile', )
    ordering = ('date_joined', )

    def get_inline_instances(self, request, obj=None):
        if not obj:
            return list()
        return super().get_inline_instances(request, obj)

    @classmethod
    def can_use_api(cls, instance):
        """ getter for this user's UserProfile.canUseApi """
        return instance.userprofile.canUseApi

    @classmethod
    def num_raw_downloads(cls, instance):
        """ getter for this user's UserProfile.downloadedRawData """
        return instance.userprofile.downloadedRawData.all().count()

    can_use_api.short_description = 'API access?'


admin.site.unregister(get_user_model())
admin.site.register(get_user_model(), CustomUserAdmin)

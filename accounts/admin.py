"""
Admin page changes for user profile administration
"""
from django.contrib import admin
from django.contrib.auth import get_user_model
from django.contrib.auth.admin import UserAdmin

from accounts.models import UserProfile

class UserProfileInline(admin.StackedInline):
    """ Inline User Profile when looking at the Admin model """
    model = UserProfile
    can_delete = False
    verbose_name_plural = 'Profile'
    fk_name = 'user'

class CustomUserAdmin(UserAdmin):
    """ Custom user admin with the fields we care about """
    inlines = (UserProfileInline, )
    list_display = ('username', 'email', 'is_staff', 'can_use_api')
    list_select_related = ('userprofile', )

    def get_inline_instances(self, request, obj=None):
        if not obj:
            return list()
        return super(CustomUserAdmin, self).get_inline_instances(request, obj)

    def can_use_api(self, instance):
        return instance.userprofile.canUseApi
    can_use_api.short_description = 'API access?'

admin.site.unregister(get_user_model())
admin.site.register(get_user_model(), CustomUserAdmin)

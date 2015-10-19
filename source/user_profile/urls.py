from django.conf.urls import patterns, url
from user_profile.views import UserProfileView

urlpatterns = patterns('',
    url(r'/(?P<user_id>[0-9]+)$', UserProfileView.as_view()),
)

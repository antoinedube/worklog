from django.conf.urls import patterns, url
from user_profile.views import UserProfileView

urlpatterns = patterns('',
    url(r'$', UserProfileView.as_view()),
)

from django.conf.urls import patterns, url
from profile.views import ProfileView

urlpatterns = patterns('',
    url(r'$',ProfileView.as_view()),
)

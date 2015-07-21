from django.conf.urls import patterns, url
from profile.views import UserLogin

urlpatterns = patterns('',
    url(r'$',UserLogin.as_view()),
)

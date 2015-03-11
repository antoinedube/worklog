from django.conf.urls import patterns, url
from user_management.views import UserLogin

urlpatterns = patterns('',
    url(r'$',UserLogin.as_view()),
)

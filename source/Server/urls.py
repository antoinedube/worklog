from django.conf.urls import patterns, include, url
from django.contrib import admin
from django.http import HttpResponse
from django.views.generic import TemplateView
from django.views.static import serve

from Server.views import FaviconView
from login.views import UserLogin, UserLogout

urlpatterns = patterns('',
    url(r'^$',TemplateView.as_view(template_name="index.html")),

    url(r'^login',UserLogin.as_view()),
    url(r'^logout',UserLogout.as_view()),
    url(r'^profile',include('profile.urls')),

    url(r'^api/task',include('task.urls')),

    url(r'^admin/', include(admin.site.urls)),

    url(r'^task_manager/(?P<path>.*)$', serve, {'document_root': 'client/app',}),
    url(r'^bower_modules/(?P<path>.*)$', serve, {'document_root': 'client/public/bower_components',}),
    url(r'^favicon.ico',FaviconView.as_view()),
)


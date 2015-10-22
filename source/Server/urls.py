from django.conf.urls import patterns, include, url
from django.contrib import admin
from django.http import HttpResponse
from django.views.generic import TemplateView
from django.views.static import serve

from Server.views import FaviconView
from authentication.views import LoginView, LogoutView
from front_page.views import FrontPageView

urlpatterns = patterns('',
    #url(r'^$', TemplateView.as_view(template_name="index.html")),

    # In a view, check if logged in or not, and display login page or enter app
    url(r'^$', FrontPageView.as_view()),

    url(r'^login', LoginView.as_view()),
    url(r'^logout', LogoutView.as_view()),

    url(r'^api/tasks', include('task.urls')),
    url(r'^api/users', include('user_profile.urls')),

    url(r'^admin/', include(admin.site.urls)),

    url(r'^task_manager/(?P<path>.*)$', serve, {'document_root': 'client/app',}),
    url(r'^task_manager_login/(?P<path>.*)$', serve, {'document_root': 'client/login',}),
    url(r'^bower_modules/(?P<path>.*)$', serve, {'document_root': 'client/vendor',}),
    url(r'^favicon.ico', FaviconView.as_view()),
)


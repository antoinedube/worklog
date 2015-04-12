from django.conf.urls import patterns, include, url
from django.contrib import admin
from django.views.generic import TemplateView
from django.views.static import serve

urlpatterns = patterns('',
    url(r'^$',TemplateView.as_view(template_name="index.html")),

    url(r'^api/task',include('task.urls')),
    url(r'^login/',include('user_management.urls')),

    url(r'^admin/', include(admin.site.urls)),

    url(r'^task_manager/(?P<path>.*)$', serve, {'document_root': 'client/app',}),
    url(r'^bower_modules/(?P<path>.*)$', serve, {'document_root': 'client/app/bower_components',}),
    url(r'^template/(?P<path>.*)$', serve, {'document_root': 'client/app/bower_components/ui.bootstrap/template',}),
)

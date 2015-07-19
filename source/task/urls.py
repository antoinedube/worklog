# Business Model REST API
# GET /task
# GET /task/task_id
# POST /task
# PUT /task/task_id
# DELETE /task/task_id

from django.conf.urls import patterns, url
from task.views import TaskView, FilteredTaskView

urlpatterns = patterns('',
    url(r'(?P<task_filter>[a-zA-Z]+)$',FilteredTaskView.as_view()),
    url(r'(?P<task_id>[0-9]*)$',TaskView.as_view()),
)

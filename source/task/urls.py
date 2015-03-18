# Business Model REST API
# GET /task
# GET /task/task_id
# POST /task
# PUT /task/task_id
# DELETE /task/task_id

from django.conf.urls import patterns, url
from task.views import TaskView

urlpatterns = patterns('',
    url(r'/*(?P<task_id>\d*)$',TaskView.as_view()),
)

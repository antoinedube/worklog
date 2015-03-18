from django.http import HttpResponse
from django.shortcuts import render
from django.views.generic import View

import json

from task.models import Task

class TaskView(View):
    def get(self,request,task_id):
        if task_id == '':
            task_query = Task.objects.all()
            item_set = [{
                'name':item.name,
                'datetime':str(item.datetime)}
                    for item in task_query
            ]
            json_item_set = json.dumps(item_set)
            return HttpResponse(json_item_set)
        else:
            item_query = Task.objects.get(id=task_id)
            item_set = {
                'name':item_query.name,
                'datetime':str(item_query.datetime)
            }
            json_item = json.dumps(item_set)
            return HttpResponse(json_item)


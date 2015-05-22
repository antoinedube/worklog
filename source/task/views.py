from django.http import HttpResponse
from django.shortcuts import render
from django.views.generic import View
from django.utils import timezone, dateparse

import json

from task.models import Task

class TaskView(View):
    def get(self,request,task_id):
        if task_id == '':
            task_query = Task.objects.all()
            item_set = [{
                'name': item.name,
                'datetime': str(item.datetime),
                'type': item.type}
                    for item in task_query
            ]
            json_item_set = json.dumps(item_set)
            return HttpResponse(json_item_set)
        else:
            item_query = Task.objects.get(id=task_id)
            item_set = {
                'name': item_query.name,
                'type': item_query.type,
                'datetime': str(item_query.datetime)
            }
            json_item = json.dumps(item_set)
            return HttpResponse(json_item)

    def post(self,request,task_id):
        data = json.loads(request.body.decode('utf-8'))
        new_task = Task(
                name = data['name'],
                datetime = timezone.now(),
                end_date = dateparse.parse_datetime(data['end_date']),
                type = data['type']
                )
        new_task.save()

        saved_item = {
            'id': new_task.id,
            'name': new_task.name,
            'type': new_task.type,
            'datetime': str(new_task.datetime),
            'end_date': str(new_task.end_date)
        }

        return HttpResponse(json.dumps(saved_item))


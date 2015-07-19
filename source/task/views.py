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
                'id': item.id,
                'name': item.name,
                'created_at': str(item.created_at),
                'end_date': str(item.end_date),
                'type': item.type}
                    for item in task_query
            ]
            json_item_set = json.dumps(item_set)
            return HttpResponse(json_item_set)
        else:
            item_query = Task.objects.get(id=task_id)
            item_set = {
                'id': item_query.id,
                'name': item_query.name,
                'type': item_query.type,
                'created_at': str(item_query.created_at),
                'end_date': str(item_query.end_date)
            }
            json_item = json.dumps(item_set)
            return HttpResponse(json_item)

    def post(self,request,task_id): # task_id should not be required here. urls.py as it is now needs it.
        data = json.loads(request.body.decode('utf-8'))
        new_task = Task(
                name = data['name'],
                created_at = timezone.now(),
                end_date = dateparse.parse_datetime(data['end_date']),
                type = data['type']
                )
        new_task.save()

        saved_item = {
            'id': new_task.id,
            'name': new_task.name,
            'type': new_task.type,
            'created_at': str(new_task.created_at),
            'end_date': str(new_task.end_date)
        }

        return HttpResponse(json.dumps(saved_item))


class FilteredTaskView(View):
    def get(self,request,task_filter):
        if task_filter == 'today':
            task_query = Task.objects.filter(pk=1)
            item_set = [{
                'id': item.id,
                'name': item.name,
                'created_at': str(item.created_at),
                'end_date': str(item.end_date),
                'type': item.type}
                    for item in task_query
            ]
            json_item_set = json.dumps(item_set)

            return HttpResponse(json_item_set)
        else:
            print('not today query')
            return HttpResponse(json.dumps(''))

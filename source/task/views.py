from django.http import JsonResponse
from django.shortcuts import render
from django.views.generic import View
from django.utils import timezone, dateparse

import json

from task.models import Task

class TaskSerializer:

    def query_to_json(self,item):
        json_set = {
                'id': item.id,
                'name': item.name,
                'created_at': str(item.created_at),
                'end_date': str(item.end_date),
                'type': item.type}
        return json_set


class TaskView(View):

    def __init__(self):
        self.task_serializer = TaskSerializer()

    def get(self,request,task_id):
        if task_id == '':
            if not request.user.is_authenticated():
                return JsonResponse({'message': 'Unauthorized'},status=401)

            task_query = Task.objects.all()
            item_set = [self.task_serializer.query_to_json(item) for item in task_query]

            return JsonResponse(item_set,safe=False)
        else:
            if not request.user.is_authenticated():
                return JsonResponse({'message': 'Unauthorized'},status=401)

            item_query = Task.objects.get(id=task_id)
            item_set = self.task_serializer.query_to_json(item_query)
            return JsonResponse(item_set)

    def post(self,request,task_id):
        if not request.user.is_authenticated():
            return JsonResponse({'message': 'Unauthorized'},status=401)

        data = json.loads(request.body.decode('utf-8'))
        new_task = Task(
                name = data['name'],
                created_at = timezone.now(),
                end_date = dateparse.parse_datetime(data['end_date']),
                type = data['type']
                )
        new_task.save()

        saved_item = self.task_serializer.query_to_json(new_task)

        return JsonResponse(saved_item)


class FilteredTaskView(View):

    def __init__(self):
        self.task_serializer = TaskSerializer()

    def get(self,request,task_filter):
        if not request.user.is_authenticated():
            return JsonResponse({'message': 'Unauthorized'},status=401)

        before = timezone.now().replace(hour=0,minute=0,second=0,microsecond=0)
        after = timezone.now().replace(hour=23,minute=59,second=59,microsecond=999)

        if task_filter == 'today':
            # Include timezone consideration
            task_query = Task.objects.exclude(end_date__lt=before).exclude(end_date__gt=after)

            item_set = [self.task_serializer.query_to_json(item) for item in task_query]

            return JsonResponse(item_set,safe=False)
        else:
            return JsonResponse({'message': 'Not yet implemented'})


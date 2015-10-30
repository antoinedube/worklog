from django.http import JsonResponse
from django.shortcuts import render
from django.views.generic import View
from django.utils import timezone, dateparse

import json

from task.factory import TaskFactory
from task.models import Task
from task.serializer import TaskSerializer


class TaskView(View):
    def __init__(self):
        self.task_factory = TaskFactory()
        self.task_serializer = TaskSerializer()

    def get(self,request,task_id):
        if not request.user.is_authenticated():
            return JsonResponse({'message': 'Unauthorized'}, status=401)

        if task_id == '':
            task_query = Task.objects.all()
            item_set = [self.task_serializer.query_to_json(item) for item in task_query]
            return JsonResponse(item_set, safe=False)
        else:
            item_query = Task.objects.get(id=task_id)
            item_set = self.task_serializer.query_to_json(item_query)
            return JsonResponse(item_set)

    def post(self,request,task_id):
        if not request.user.is_authenticated():
            return JsonResponse({'message': 'Unauthorized'}, status=401)

        data = json.loads(request.body.decode('utf-8'))
        new_task = self.task_factory.create(data)
        new_task.save()

        saved_item = self.task_serializer.query_to_json(new_task)
        return JsonResponse(saved_item)


class FilteredTaskView(View):

    def __init__(self):
        self.task_serializer = TaskSerializer()

    def get(self,request,task_filter):
        if not request.user.is_authenticated():
            return JsonResponse({'message': 'Unauthorized'}, status=401)

        if task_filter == 'end_today':
            task = Task.objects.get(pk=1);
            task.end_at = timezone.now();
            task.save();
            before = timezone.now().replace(hour=0,minute=0,second=0,microsecond=0)
            after = timezone.now().replace(hour=23,minute=59,second=59,microsecond=999)
            task_query = Task.objects.exclude(end_at__lt=before).exclude(end_at__gt=after)
            item_set = [self.task_serializer.query_to_json(item) for item in task_query]

            return JsonResponse(item_set, safe=False)
        else:
            print('not today query')
            return JsonResponse({})

from django.utils import timezone, dateparse
from task.models import Task

class TaskFactory:
    def create(self,type,data):
        if type=='Fixe':
            new_task = Task(
                name = data['name'],
                created_at = timezone.now(),
                begin_at = dateparse.parse_datetime(data['begin_date']),
                end_at = dateparse.parse_datetime(data['end_date']),
                deadline = None,
                type = type
            )
        elif type=='Assignée':
            new_task = Task(
                name = data['name'],
                created_at = timezone.now(),
                begin_at = dateparse.parse_datetime(data['begin_date']),
                end_at = dateparse.parse_datetime(data['end_date']),
                deadline = dateparse.parse_datetime(data['deadline']),
                type = type
            )
        elif type=='Non-assignée' and data['deadline']:
            new_task = Task(
                name = data['name'],
                created_at = timezone.now(),
                begin_at = dateparse.parse_datetime(data['begin_date']),
                end_at = dateparse.parse_datetime(data['end_date']),
                deadline = dateparse.parse_datetime(data['deadline']),
                type = type
            )
        else:
            new_task = Task(
                name = data['name'],
                created_at = timezone.now(),
                begin_at = None,
                end_at = None,
                deadline = None,
                type = type
            )

        return new_task

from django.utils import timezone, dateparse
from task.models import Task


class TaskFactory:

    def create(self, data):
        if data['type'] == 'Fixe':
            new_task = Task(
                name=data['name'],
                created_at=timezone.now(),
                begin_at=dateparse.parse_datetime(data['begin_at']),
                end_at=dateparse.parse_datetime(data['end_at']),
                deadline=None,
                type='Fixe'
            )
        elif data['type'] == 'Assignée':
            new_task = Task(
                name=data['name'],
                created_at=timezone.now(),
                begin_at=dateparse.parse_datetime(data['begin_at']),
                end_at=dateparse.parse_datetime(data['end_at']),
                deadline=dateparse.parse_datetime(data['deadline']),
                type='Assignée'
            )
        elif data['type'] == 'Non-assignée' and data['deadline'] is not None:
            new_task = Task(
                name=data['name'],
                created_at=timezone.now(),
                begin_at=None,
                end_at=None,
                deadline=dateparse.parse_datetime(data['deadline']),
                type='Non-assignée'
            )
        else:
            new_task = Task(
                name=data['name'],
                created_at=timezone.now(),
                begin_at=None,
                end_at=None,
                deadline=None,
                type='Non-assignée'
            )

        return new_task

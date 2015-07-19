from unittest import skip
from django.test import TestCase
from django.test.client import Client
from django.utils import timezone

from task.models import Task

import json

class CRUDTestCase(TestCase):
    fixtures = ['tasks.json']

    def test_get_all_tasks(self):
        client = Client()
        response = client.get('/api/task/')
        self.assertEqual(response.status_code,200)
        deserialized_content = json.loads(response.content.decode('utf-8'))
        self.assertEqual(len(deserialized_content),6)

    def test_get_first_task(self):
        client = Client()
        response = client.get('/api/task/1')
        self.assertEqual(response.status_code,200)
        deserialized_content = json.loads(response.content.decode('utf-8'))
        self.assertEqual(deserialized_content['name'],'Create website')

    @skip
    def test_get_todays_tasks(self):
        test_task = Task.objects.get(pk=2)
        test_task.end_date = timezone.now()
        test_task.save()

        client = Client()
        response = client.get('/api/task/today')
        self.assertEqual(response.status_code,200)

        deserialized_content = json.loads(response.content.decode('utf-8'))
        print('content:', deserialized_content)

    def test_task_creation_through_post(self):
        client = Client()
        post_data = json.dumps({
                'name': 'Test task for post request',
                'end_date': '2015-06-01T04:00:00.000Z',
                'type': 'Assignée'
            })
        response = client.post('/api/task/',post_data,content_type='application/json')
        self.assertEqual(response.status_code,200)


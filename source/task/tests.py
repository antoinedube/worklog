from django.test import TestCase
from django.test.client import Client
from django.utils import timezone

from task.models import Task

import json

class CRUDTestCase(TestCase):
    fixtures = ['tasks.json', 'profile/fixtures/users.json', 'profile/fixtures/profiles.json']

    def setUp(self):
        self.client = Client()
        response = self.client.post('/login/',{'username':'antoine', 'password':'123456'})

    def tearDown(self):
        del self.client

    def test_get_all_tasks(self):
        response = self.client.get('/api/task/')
        self.assertEqual(response.status_code,200)
        deserialized_content = json.loads(response.content.decode('utf-8'))
        self.assertEqual(len(deserialized_content),6)

    def test_get_first_task(self):
        response = self.client.get('/api/task/1')
        self.assertEqual(response.status_code,200)
        deserialized_content = json.loads(response.content.decode('utf-8'))
        self.assertEqual(deserialized_content['name'],'Create website')

    def test_get_todays_tasks(self):
        test_task_id = 3
        test_task = Task.objects.get(pk=test_task_id)
        test_task.end_date = timezone.now()
        test_task.save()

        response = self.client.get('/api/task/today')
        self.assertEqual(response.status_code,200)

        deserialized_content = json.loads(response.content.decode('utf-8'))
        self.assertEqual(deserialized_content[0]['id'],test_task_id)

    def test_task_creation_through_post(self):
        post_data = json.dumps({
                'name': 'Test task for post request',
                'end_date': '2015-06-01T04:00:00.000Z',
                'type': 'Assignée'
            })
        response = self.client.post('/api/task/',post_data,content_type='application/json')
        self.assertEqual(response.status_code,200)
        deserialized_content = json.loads(response.content.decode('utf-8'))
        self.assertEqual(deserialized_content['id'],7)


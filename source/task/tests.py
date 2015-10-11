from django.test import TestCase
from django.test.client import Client
from django.utils import timezone

from task.models import Task

import json

class CRUDTestCase(TestCase):
    fixtures = ['tasks.json', 'profile/fixtures/users.json', 'profile/fixtures/profiles.json']

    def setUp(self):
        self.client = Client()
        user = {
            'username': 'antoine',
            'password': '123456'
        }
        self.client.post('/login',json.dumps(user),content_type='application/json')

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
        test_task.end_at = timezone.now()
        test_task.save()

        response = self.client.get('/api/task/today')
        self.assertEqual(response.status_code,200)

        deserialized_content = json.loads(response.content.decode('utf-8'))
        self.assertEqual(deserialized_content[0]['id'],test_task_id)

    def test_fixed_task_creation_through_post(self):
        post_data = json.dumps({
                'name': 'Test task for post request',
                'created_at': '2015-08-29T19:21:04.000Z',
                'begin_date': '2015-05-01T06:19:00.000Z',
                'end_date': '2015-06-01T04:00:00.000Z',
                'deadline': '2015-09-09T19:20:00.000Z',
                'type': 'Assignée'
            })
        response = self.client.post('/api/task/',post_data,content_type='application/json')
        self.assertEqual(response.status_code,200)
        deserialized_content = json.loads(response.content.decode('utf-8'))

    def test_assigned_task_creation_through_post(self):
        post_data = json.dumps({
                'name': 'Test task for post request',
                'created_at': '2015-08-29T19:21:04.000Z',
                'begin_date': '2015-05-01T06:19:00.000Z',
                'end_date': '2015-06-01T04:00:00.000Z',
                'deadline': '',
                'type': 'Fixe'
            })
        response = self.client.post('/api/task/',post_data,content_type='application/json')
        self.assertEqual(response.status_code,200)
        deserialized_content = json.loads(response.content.decode('utf-8'))

    def test_unassigned_task_with_deadline_creation_through_post(self):
        post_data = json.dumps({
                'name': 'Test task for post request',
                'created_at': '',
                'begin_date': '',
                'end_date': '',
                'deadline': '2015-06-01T04:00:00.000Z',
                'type': 'Non-assignée'
            })
        response = self.client.post('/api/task/',post_data,content_type='application/json')
        self.assertEqual(response.status_code,200)
        deserialized_content = json.loads(response.content.decode('utf-8'))

    def test_unassigned_task_without_deadline_creation_through_post(self):
        post_data = json.dumps({
                'name': 'Test task for post request',
                'created_at': '',
                'begin_date': '',
                'end_date': '',
                'deadline': '',
                'type': 'Non-assignée'
            })
        response = self.client.post('/api/task/',post_data,content_type='application/json')
        self.assertEqual(response.status_code,200)
        deserialized_content = json.loads(response.content.decode('utf-8'))


from django.test import TestCase
from django.test.client import Client
from django.utils import timezone

import json

class CRUDTestCase(TestCase):
    fixtures = ['tasks.json']
    def test_get_all_tasks(self):
        client = Client()
        response = client.get('/api/task/')
        self.assertEqual(response.status_code,200)
        deserialized_content = json.loads(response.content.decode('utf-8'))
        self.assertEqual(len(deserialized_content),6)

    def test_task_creation_through_post(self):
        client = Client()
        post_data = json.dumps({
                'name': 'Test task for post request',
                'end_date': '2015-06-01T04:00:00.000Z',
                'type': 'Assignée'
            })
        response = client.post('/api/task/',post_data,content_type='application/json')
        self.assertEqual(response.status_code,200)


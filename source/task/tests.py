from django.test import TestCase
from django.test.client import Client
import json

class CRUDTestCase(TestCase):
    fixtures = ['tasks.json']
    def test_get_all_tasks(self):
        client = Client()
        response = client.get('/api/task/')
        self.assertEqual(response.status_code,200)
        deserialized_content = json.loads(response.content.decode('utf-8'))
        self.assertEqual(len(deserialized_content),6)


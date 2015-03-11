from django.test import TestCase
from django.test.client import Client
import json

class LoginTestCase(TestCase):
    fixtures = ['users.json']
    def test_post_credentials(self):
        client = Client()
        response = client.post('/login/',{'username':'antoine', 'password':'123456'})
        self.assertEqual(response.status_code,200)

    def test_login(self):
        client = Client()
        response = client.post('/login/',{'username':'antoine', 'password':'123456'})
        self.assertEqual(response.status_code,200)
        deserialized_content = json.loads(response.content.decode('utf-8'))
        self.assertEqual('Login successful',deserialized_content['message'])


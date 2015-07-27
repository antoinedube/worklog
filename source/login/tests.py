from django.test import TestCase
from django.test.client import Client
import json

class LoginTestCase(TestCase):
    fixtures = ['users.json']
    def test_post_credentials(self):
        client = Client()
        user = {
            'username': 'antoine',
            'password': '123456'
        }
        response = client.post('/login',json.dumps(user),content_type='application/json')
        self.assertEqual(response.status_code,200)

    def test_login(self):
        client = Client()
        user = {
            'username': 'antoine',
            'password': '123456'
        }
        response = client.post('/login',json.dumps(user),content_type='application/json')
        self.assertEqual(response.status_code,200)
        deserialized_content = json.loads(response.content.decode('utf-8'))
        self.assertEqual('Login successful',deserialized_content['message'])
        self.assertIsNotNone(client.cookies['sessionid'].key)

class LogoutTestCase(TestCase):
    fixtures = ['users.json']
    def test_logout(self):
        client = Client()
        user = {
            'username': 'antoine',
            'password': '123456'
        }
        response = client.post('/login',json.dumps(user),content_type='application/json')
        self.assertEqual(response.status_code,200)

        response = client.get('/logout')
        self.assertEqual(response.status_code,200)
        deserialized_content = json.loads(response.content.decode('utf-8'))
        self.assertEqual('Logout successful',deserialized_content['message'])


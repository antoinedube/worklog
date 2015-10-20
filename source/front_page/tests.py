from django.contrib.auth.models import User

import json

from django.test import TestCase
from django.test.client import Client


class FrontPageTestCase(TestCase):

    def setUp(self):
        pass

    def test_display_login_if_user_is_not_logged_in(self):
        pass

    def test_display_application_if_user_is_logged_in(self)
        pass
'''
        client = Client()
        credentials = {
            'username': 'antoine',
            'password': '123456'
        }
        client.post('/login',json.dumps(credentials),content_type='application/json')

        response = client.get('/api/users/1')
        deserialized_content = json.loads(response.content.decode('utf-8'))
        print(deserialized_content)
        self.assertEqual(deserialized_content['UTC-offset'],'-0400')
'''

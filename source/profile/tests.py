from django.contrib.auth.models import User

import json

from django.test import TestCase
from django.test.client import Client


class ProfileTestCase(TestCase):
    fixtures = ['users.json', 'profiles.json']

    def setUp(self):
        self.user = User.objects.get(email='antoine@website.com')

    def test_can_retrieve_user_language(self):
        self.assertEqual(self.user.profile.language,'French')

    def test_can_retrieve_user_timezone(self):
        self.assertEqual(self.user.profile.timezone,'America/Montreal')

    def test_profile_returns_utc_offset(self):
        client = Client()
        credentials = {
            'username': 'antoine',
            'password': '123456'
        }
        client.post('/login',json.dumps(credentials),content_type='application/json')

        response = client.get('/profile')
        deserialized_content = json.loads(response.content.decode('utf-8'))
        self.assertEqual(deserialized_content['UTC-offset'],'-0400')


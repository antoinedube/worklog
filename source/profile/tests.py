from django.contrib.auth.models import User

from django.test import TestCase

import json

class ProfileTestCase(TestCase):
    fixtures = ['users.json', 'profiles.json']
    def test_can_retrieve_user_language(self):
        user = User.objects.get(email='antoine@website.com')
        self.assertEqual(user.profile.language,'French')

    def test_can_retrieve_user_timezone(self):
        user = User.objects.get(email='antoine@website.com')
        self.assertEqual(user.profile.timezone,'America/Montreal')


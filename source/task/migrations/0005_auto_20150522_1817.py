# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('task', '0004_auto_20150522_0045'),
    ]

    operations = [
        migrations.RenameField(
            model_name='task',
            old_name='datetime',
            new_name='created_at',
        ),
    ]

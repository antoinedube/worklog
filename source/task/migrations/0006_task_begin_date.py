# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('task', '0005_auto_20150522_1817'),
    ]

    operations = [
        migrations.AddField(
            model_name='task',
            name='begin_date',
            field=models.DateTimeField(default='2015-01-01T00:00:00.000Z'),
        ),
    ]

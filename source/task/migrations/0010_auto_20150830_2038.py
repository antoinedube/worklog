# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import datetime
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('task', '0009_task_deadline'),
    ]

    operations = [
        migrations.AlterField(
            model_name='task',
            name='begin_at',
            field=models.DateTimeField(null=True, blank=True, default=datetime.datetime(2015, 1, 1, 0, 0, tzinfo=utc)),
        ),
        migrations.AlterField(
            model_name='task',
            name='deadline',
            field=models.DateTimeField(null=True, blank=True, default=datetime.datetime(2015, 1, 1, 0, 0, tzinfo=utc)),
        ),
        migrations.AlterField(
            model_name='task',
            name='end_at',
            field=models.DateTimeField(null=True, blank=True, default=datetime.datetime(2015, 1, 1, 0, 0, tzinfo=utc)),
        ),
    ]

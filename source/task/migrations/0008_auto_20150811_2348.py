# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
from django.utils.timezone import utc
import datetime


class Migration(migrations.Migration):

    dependencies = [
        ('task', '0007_remove_task_begin_date'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='task',
            name='end_date',
        ),
        migrations.AddField(
            model_name='task',
            name='begin_at',
            field=models.DateTimeField(default=datetime.datetime(2015, 1, 1, 0, 0, tzinfo=utc)),
        ),
        migrations.AddField(
            model_name='task',
            name='duration',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='task',
            name='end_at',
            field=models.DateTimeField(default=datetime.datetime(2015, 1, 1, 0, 0, tzinfo=utc)),
        ),
        migrations.AlterField(
            model_name='task',
            name='created_at',
            field=models.DateTimeField(default=datetime.datetime(2015, 1, 1, 0, 0, tzinfo=utc)),
        ),
    ]

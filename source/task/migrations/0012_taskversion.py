# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
from django.utils.timezone import utc
import datetime


class Migration(migrations.Migration):

    dependencies = [
        ('task', '0011_auto_20150830_2041'),
    ]

    operations = [
        migrations.CreateModel(
            name='TaskVersion',
            fields=[
                ('task_ptr', models.OneToOneField(serialize=False, auto_created=True, to='task.Task', parent_link=True, primary_key=True)),
                ('updated_at', models.DateTimeField(default=datetime.datetime(2015, 1, 1, 0, 0, tzinfo=utc))),
            ],
            bases=('task.task', models.Model),
        ),
    ]

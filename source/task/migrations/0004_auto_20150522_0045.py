# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('task', '0003_auto_20150522_0044'),
    ]

    operations = [
        migrations.AlterField(
            model_name='task',
            name='datetime',
            field=models.DateTimeField(default='2015-01-01T00:00:00.000Z'),
        ),
    ]

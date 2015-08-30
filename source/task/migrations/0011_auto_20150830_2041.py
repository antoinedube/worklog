# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('task', '0010_auto_20150830_2038'),
    ]

    operations = [
        migrations.AlterField(
            model_name='task',
            name='duration',
            field=models.IntegerField(blank=True, default=0, null=True),
        ),
        migrations.AlterField(
            model_name='task',
            name='name',
            field=models.CharField(max_length=250),
        ),
        migrations.AlterField(
            model_name='task',
            name='type',
            field=models.CharField(max_length=25),
        ),
    ]

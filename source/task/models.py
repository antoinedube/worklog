from django.db import models
from django.utils import dateparse

from datetime import timedelta


class Task(models.Model):
    name = models.CharField(max_length=250,default='')
    created_at = models.DateTimeField(default=dateparse.parse_datetime('2015-01-01T00:00:00.000Z'))
    begin_at = models.DateTimeField(default=dateparse.parse_datetime('2015-01-01T00:00:00.000Z'))
    end_at = models.DateTimeField(default=dateparse.parse_datetime('2015-01-01T00:00:00.000Z'))
    duration = models.IntegerField(default=0)
    type = models.CharField(max_length=25,default='')
    # attachments =
    # location =
    # description =
    # links_to_tasks =
    # completion_status = ToDo, InProgress, Done
    # urgence / importance
    # status: personal/professional
    #   professional: Service a la collectivite, Recherche, Enseignement
    # requirement_level

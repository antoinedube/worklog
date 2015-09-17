from django.db import models
from django.utils import dateparse
from django.db.models.signals import pre_save
from django.dispatch import receiver

from datetime import timedelta


class Task(models.Model):
    name = models.CharField(max_length=250,null=False,blank=False)
    created_at = models.DateTimeField(default=dateparse.parse_datetime('2015-01-01T00:00:00.000Z'))
    begin_at = models.DateTimeField(default=dateparse.parse_datetime('2015-01-01T00:00:00.000Z'),null=True,blank=True)
    end_at = models.DateTimeField(default=dateparse.parse_datetime('2015-01-01T00:00:00.000Z'),null=True,blank=True)
    deadline = models.DateTimeField(default=dateparse.parse_datetime('2015-01-01T00:00:00.000Z'),null=True,blank=True)
    duration = models.IntegerField(default=0,null=True,blank=True)
    type = models.CharField(max_length=25,null=False,blank=False)
    # attachments =
    # location =
    # description =
    # links_to_tasks =
    # completion_status = ToDo, InProgress, Done
    # urgence / importance
    # status: personal/professional
    #   professional: Service a la collectivite, Recherche, Enseignement
    # requirement_level

@receiver(pre_save,sender=Task)
def print_model_begin_saved(sender,instance,**kwargs):
    print('pre_save signal')
    print(instance.__dict__)

#class TaskVersion(models.Model):


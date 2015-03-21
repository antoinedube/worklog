from django.db import models

class Task(models.Model):
    name = models.CharField(max_length=250,default='')
    datetime = models.DateTimeField()
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

from django.db import models

class Task(models.Model):
    name = models.CharField(max_length=250)
    datetime = models.DateTimeField()
    # attachments =
    # location =
    # description =
    # links_to_tasks =
    # completion_status = ToDo, InProgress, Done
    # urgence / importance
    # status: personal/professional
    #   professional: Service a la collectivite, Recherche, Enseignement
    # requirement_level

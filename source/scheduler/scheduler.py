from task.models import Task

# For any new task added:
#   Check any existing task according to type
#   If unassigned: compute priority and order according to other unassigned

class Scheduler:

    def __init__(self):
        # Query for tasks from today to future
        #self.fixed_tasks = Task.objects.get(type="Fixe")
        #self.assigned_tasks = Task.objects.get(type="Assignée")
        self.unassigned_tasks = Task.objects.get(type="Non-assignée").order_by('deadline')
        print(self.unassigned_tasks)
        #self.task_to_reschedule = []

    def schedule(self,task):
        print(task.name)
        if task.type=='Non-assignée'
            self.compute_priority(task)

    def compute_priority(self,task):
        pass


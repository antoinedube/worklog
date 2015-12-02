(function () {
  'use strict';

  angular
    .module('TasksManager.task')
    .factory('Scheduler', Scheduler);

  Scheduler.$inject = ['FilteredTask'];
  function Scheduler(FilteredTask) {
    var fixed_tasks;
    var assigned_tasks;
    var unassigned_tasks;

    FilteredTask.query({filter: 'upcoming'})
      .$promise
      .then(function(tasks) {
        console.log('Filtered Tasks received: ', tasks);
        fixed_tasks = _.filter(tasks,{'type': 'Fixe'});
        assigned_tasks = _.filter(tasks, {'type': 'Assignée'});
        unassigned_tasks = _.filter(tasks, {'type': 'Non-assignée'});
      });

    var factory = {
      schedule: schedule
    };

    return factory;

    /* ---------- */

    function schedule(task) {
      console.log('Task to schedule: ', task);
      switch (task.type) {
        case 'Fixe':
          _(fixed_tasks).forEach(function(existing_task) {
            console.log('Existing task: ', existing_task);
            if (are_conflicting(task, existing_task)) {
              return;
            }
          });
          break;
        case 'Assignée':
          break;
        case 'Non-assignée':
          break;
        default:
          console.log('Undefined type: ', task.type);
      }

      // return Task.save(new_task).$promise;
    }

    function insert_unassigned(task) {

    }

    function are_conflicting(first_task, second_task) {

    }

  }

})();

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

      // return Task.save(new_task).$promise;
    }

  }

})();

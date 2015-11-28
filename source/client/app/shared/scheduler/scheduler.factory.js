(function () {
  'use strict';

  angular
    .module('TasksManager.scheduler', ['TasksManager.task-model'])
    .factory('Scheduler', Scheduler);

  Scheduler.$inject = ['FilteredTask'];
  function Scheduler(FilteredTask) {
    var upcoming_task = FilteredTask.get({filter: 'upcoming'});

    var factory = {
      new_task: new_task
    };

    return factory;

    /* ---------- */

    function new_task(task) {
      console.log('Task to schedule: ', task);
    }

  }

})();

(function () {
  'use strict';

  angular
    .module('TasksManager.scheduler', ['TasksManager.task-model'])
    .factory('Scheduler', Scheduler);

  Scheduler.$inject = ['Task'];
  function Scheduler(Task) {
    var upcoming_task = Task.get_upcoming_tasks();
    var factory = {
    };

    return factory;

    /* ---------- */

  }

})();

(function () {
  'use strict';

  angular
    .module('TasksManager.scheduler', ['TasksManager.task-model'])
    .service('Scheduler', Scheduler);

  Scheduler.$inject = ['Task'];
  function Scheduler(Task) {
    var session = {
    };

    return session;

    /* ---------- */

  }

})();

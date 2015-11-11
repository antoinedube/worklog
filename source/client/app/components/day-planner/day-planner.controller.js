(function () {
  'use strict';

  angular
    .module('TasksManager.day-planner')
    .controller('DayPlannerCtrl', DayPlannerCtrl);

  DayPlannerCtrl.$inject = ['FilteredTask'];
  function DayPlannerCtrl(FilteredTask) {
    var vm = this;
    vm.duration = 3;

    FilteredTask.query({filter:'end_today'}).$promise.then(function(tasks) {
      vm.todays_tasks = tasks;
    });

    vm.is_task_at = function(hour) {
    }

    vm.task_at = function(hour) {
    }

    vm.working_hours = [];
    for (var hour = 5 ; hour<23 ; hour++) vm.working_hours.push(hour);
  }
})();

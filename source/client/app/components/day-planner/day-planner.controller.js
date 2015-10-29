(function () {
  'use strict';

  angular
    .module('TasksManager.day-planner')
    .controller('DayPlannerCtrl', DayPlannerCtrl);

  DayPlannerCtrl.$inject = ['FilteredTask'];
  function DayPlannerCtrl(FilteredTask) {
    var vm = this;
    vm.duration = 3;

    FilteredTask.query().$promise.then(function(tasks) {
      console.log('Today tasks: ', tasks);
    });

    vm.working_hours = [];
    for (var hour = 5 ; hour<23 ; hour++) vm.working_hours.push(String(hour) + 'h');

    console.log('Working hours: ', vm.working_hours);
  }
})();

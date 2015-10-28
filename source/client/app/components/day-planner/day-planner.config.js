(function () {
  'use strict';

  angular
    .module('TasksManager.day-planner', ['ngRoute', 'TasksManager.task'])
    .config(['$routeProvider', function($routeProvider) {
     $routeProvider.when('/today', {
      templateUrl: 'task_manager/components/day-planner/day-planner.view.html',
      controller: 'DayPlannerCtrl',
      controllerAs: 'vm'
     });
    }]);
})();

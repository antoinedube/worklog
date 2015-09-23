'use strict';

angular.module('TasksManager.day-planner', ['ngRoute', 'TasksManager.task'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/today', {
    templateUrl: 'task_manager/components/day-planner/day-planner.view.html',
    controller: 'DayPlannerCtrl'
  });
}])

.controller('DayPlannerCtrl', ['$scope', 'Task', function($scope,Task) {
    var working_hours = [];
    for (var hour = 5 ; hour<23 ; hour++) working_hours.push(String(hour) + 'h');

    $scope.working_hours = working_hours;
}]);


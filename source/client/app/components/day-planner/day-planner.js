'use strict';

angular.module('TasksManager.day-planner', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/today', {
    templateUrl: 'task_manager/components/day-planner/day-planner_view.html',
    controller: 'DayPlannerCtrl'
  });
}])

.controller('DayPlannerCtrl', ['$scope', function($scope) {
    var working_hours = [];
    for (var hour = 5 ; hour<23 ; hour++) working_hours.push(String(hour) + 'h');

    $scope.working_hours = working_hours;
}]);


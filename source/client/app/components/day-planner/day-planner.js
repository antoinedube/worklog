'use strict';

angular.module('TasksManager.day-planner', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/today', {
    templateUrl: 'task_manager/components/day-planner/day-planner_view.html',
    controller: 'DayPlannerCtrl'
  });
}])

.controller('DayPlannerCtrl', ['$scope', function($scope) {
    $scope.working_hours = [];
    for (var hour = 5 ; hour<23 ; hour++) $scope.working_hours.push(hour + 'h');
    console.log($scope.working_hours);

}]);


'use strict';

angular.module('TasksManager.day-planner', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/today', {
    templateUrl: 'task_manager/components/day-planner/day-planner_view.html',
    controller: 'DayPlannerCtrl'
  });
}])

.controller('DayPlannerCtrl', ['$scope', function($scope) {

}]);


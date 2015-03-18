'use strict';

angular.module('TasksManager.tasks-list', ['ngRoute', 'TasksManager.task-service'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/tasks-list', {
    templateUrl: '/static/tasks-list/view.html',
    controller: 'TasksListCtrl'
  });
}])

.controller('TasksListCtrl', ['$scope', 'Task', function($scope,Task) {
    $scope.taskslist = Task.query();

    $scope.visible = false;

    $scope.createNew = function() {
        $scope.visible = true;
    };

    $scope.confirm = function() {
        $scope.visible = false;
    };
}]);

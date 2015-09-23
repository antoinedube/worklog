'use strict';

angular.module('TasksManager.task-view', ['ngRoute', 'TasksManager.task'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/task-view/:task_id', {
    templateUrl: 'task_manager/components/task-view/task-view.view.html',
    controller: 'TaskViewCtrl'
  });
}])

.controller('TaskViewCtrl', function($scope,$location,$routeParams,Task) {
    Task.get({task_id: $routeParams.task_id}).then(function(task) {
        $scope.task = task;
    });

    $scope.close = function() {
        $location.path('/tasks-list');
    }
});

'use strict';

angular.module('TasksManager.tasks-list', ['ngRoute', 'ui.bootstrap.modal', 'TasksManager.task-model', 'TasksManager.task-new'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/tasks-list', {
    templateUrl: 'task_manager/task/views/tasks-list.html',
    controller: 'TasksListCtrl'
  });
}])

.controller('TasksListCtrl', ['$scope', '$modal', 'Task', function($scope,$modal,Task) {
    $scope.taskslist = Task.query();

    $scope.createNew = function() {
        $modal.open({
            templateUrl: 'task_manager/task/views/NewTaskTemplate.html',
            controller: 'NewTaskCtrl',
            backdrop: 'static',
            backdropClass: 'fade in',
            size: 'sm',
        })
        .result.then(function(task) {
            Task.save(task,function(data) {
                $scope.taskslist.push(data);
            })
        });
    };
}]);

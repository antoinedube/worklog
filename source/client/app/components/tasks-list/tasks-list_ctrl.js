'use strict';

angular.module('TasksManager.tasks-list', ['ngRoute', 'TasksManager.task-model', 'TasksManager.task-factory'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/tasks-list', {
    templateUrl: 'task_manager/components/tasks-list/tasks-list_view.html',
    controller: 'TasksListCtrl'
  });
}])

.controller('TasksListCtrl', ['$scope', 'Task', 'TaskFactory', function($scope,Task,TaskFactory) {
    $scope.taskslist = Task.query();

    $scope.create_new = function() {
        TaskFactory.create().then(function(task) {
            Task.save(task,function(data) {
                $scope.taskslist.push(data);
            })
        });
    };
}]);

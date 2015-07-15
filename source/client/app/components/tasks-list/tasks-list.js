'use strict';

angular.module('TasksManager.tasks-list', ['ngRoute', 'TasksManager.task-model', 'TasksManager.task-new'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/tasks-list', {
    templateUrl: 'task_manager/components/tasks-list/tasks-list_view.html',
    controller: 'TasksListCtrl'
  });
}])

.controller('TasksListCtrl', ['$scope', 'Task', 'TaskCreationFactory', function($scope,Task,TaskCreationFactory) {
    $scope.taskslist = Task.query();

    $scope.create_new = function() {
        TaskCreationFactory.create().then(function(task) {
                Task.save(task,function(data) {
                    $scope.taskslist.push(data);
            })
        });
    };
}]);

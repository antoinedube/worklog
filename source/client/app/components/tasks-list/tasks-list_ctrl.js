'use strict';

angular.module('TasksManager.tasks-list', ['ngRoute', 'TasksManager.task-factory'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/tasks-list', {
    templateUrl: 'task_manager/components/tasks-list/tasks-list_view.html',
    controller: 'TasksListCtrl'
  });
}])

.controller('TasksListCtrl', ['$scope', 'TaskFactory', function($scope,TaskFactory) {
    $scope.taskslist = TaskFactory.get_all_tasks();

    $scope.create_new = function() {
        TaskFactory.create().then(function(task) {
            $scope.taskslist.push(task);
        });
    };
}]);

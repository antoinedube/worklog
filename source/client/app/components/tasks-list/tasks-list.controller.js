(function () {
    'use strict';

    angular.module('TasksManager.tasks-list', ['ngRoute', 'TasksManager.task'])

    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/tasks-list', {
        templateUrl: 'task_manager/components/tasks-list/tasks-list.view.html',
        controller: 'TasksListCtrl'
      });
    }])

    .controller('TasksListCtrl', ['$scope', 'Task', 'TaskFactory', function($scope, Task, TaskFactory) {
        Task.fetchAll().then(function(tasks) {
            $scope.tasks_list = tasks;
        });

        $scope.create_new = function() {
            TaskFactory.create().then(function(task) {
                $scope.tasks_list.push(task);
            });
        };
    }]);
})();

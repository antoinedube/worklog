(function () {
    'use strict';

    angular.module('TasksManager.tasks-list', ['ngRoute', 'TasksManager.task'])

    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/tasks-list', {
        templateUrl: 'task_manager/components/tasks-list/tasks-list.view.html',
        controller: 'TasksListCtrl'
      });
    }])

    .controller('TasksListCtrl', ['$scope', 'Task', function($scope,Task) {
        Task.all().then(function(tasks) {
            $scope.tasks_list = tasks;
        });

        $scope.create_new = function() {
            Task.create().then(function(task) {
                console.log('create new, received: ' + task.name + ' ' + task.type);
                $scope.tasks_list.push(task);
            });
        };
    }]);
})();

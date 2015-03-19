'use strict';

angular.module('TasksManager.tasks-list', ['ngRoute', 'TasksManager.task-service'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/tasks-list', {
    templateUrl: '/static/tasks-list/view.html',
    controller: 'TasksListCtrl'
  });
}])

.controller('TasksListCtrl', ['$scope', 'Task', function($scope,Task) {
    $scope.visible = false;
    $scope.taskslist = Task.query();

    $scope.createNew = function() {
        $scope.visible = true;
    };

    $scope.create = function() {
        var task = new Task();
        task.name = $scope.task.name;
        task.$save(function(data) {
            $scope.taskslist.push(data);
        });

        $scope.taskslist = Task.query();
        $scope.visible = false;
    };
}]);

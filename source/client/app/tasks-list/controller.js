'use strict';

angular.module('TasksManager.tasks-list', ['ngRoute', 'TasksManager.task-model'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/tasks-list', {
    templateUrl: '/static/tasks-list/view.html',
    controller: 'TasksListCtrl'
  });
}])

.controller('TasksListCtrl', ['$scope', 'Task', function($scope,Task) {
    $scope.visible = false;
    $scope.types = ['Fixe','Assignée'];
    $scope.task = {
        name: '',
        type: $scope.types[0]
    };

    $scope.taskslist = Task.query();

    $scope.createNew = function() {
        $scope.visible = true;
    };

    $scope.create = function() {
        Task.save($scope.task,function(data) {
            $scope.taskslist.push(data);
        });
        $scope.visible = false;
    };
}]);

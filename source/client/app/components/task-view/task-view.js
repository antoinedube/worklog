'use strict';

angular.module('TasksManager.task-view', ['ngRoute', 'TasksManager.task-model'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/task-view/:task_id', {
    templateUrl: 'task_manager/components/task-view/task-view_view.html',
    controller: 'TaskViewCtrl'
  });
}])

.controller('TaskViewCtrl', ['$scope', '$routeParams', 'Task', function($scope,$routeParams,Task) {
    $scope.task = Task.get({task_id: $routeParams.task_id});
}]);

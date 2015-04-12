'use strict';

angular.module('TasksManager.tasks-list', ['ngRoute', 'ui.bootstrap.modal', 'TasksManager.task-model'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/tasks-list', {
    templateUrl: 'task_manager/tasks-list/view.html',
    controller: 'TasksListCtrl'
  });
}])

.controller('TasksListCtrl', ['$scope', '$modal', 'Task', function($scope,$modal,Task) {
    $scope.visible = false;
    $scope.types = ['Fixe','Assignée'];
    $scope.task = {
        name: '',
        type: $scope.types[0]
    };

    $scope.taskslist = Task.query();


    $scope.createNew = function() {
        $modal.open({
            templateUrl: 'task_manager/task/NewTaskTemplate.html',
            controller: 'NewTaskCtrl',
            resolve: {
                tasks: function() {
                    return $scope.tasks;
                }
            }
        });
    };

    // Add $watch to field : task name must be filled.
}])

.controller('NewTaskCtrl', ['$scope', '$modalInstance', function($scope, $modalInstance) {
    $scope.create = function() {
        $modalInstance.close();
    };

    $scope.cancel = function() {
        $modalInstance.dismiss();
    };
}]);


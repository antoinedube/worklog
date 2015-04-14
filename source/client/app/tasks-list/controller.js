'use strict';

angular.module('TasksManager.tasks-list', ['ngRoute', 'ui.bootstrap.modal', 'TasksManager.task-model'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/tasks-list', {
    templateUrl: 'task_manager/tasks-list/view.html',
    controller: 'TasksListCtrl'
  });
}])

.controller('TasksListCtrl', ['$scope', '$modal', 'Task', function($scope,$modal,Task) {
    $scope.taskslist = Task.query();

    $scope.createNew = function() {
        $modal.open({
            templateUrl: 'task_manager/task/NewTaskTemplate.html',
            controller: 'NewTaskCtrl',
            backdrop: 'static',
            backdropClass: 'fade in',
        })
        .result.then(function(task) {
            Task.save(task,function(data) {
                $scope.taskslist.push(data);
            })
        });
    };

    // Add $watch to field : task name must be filled.
}])

.controller('NewTaskCtrl', ['$scope', '$modalInstance', function($scope,$modalInstance) {
    $scope.types = ['Fixe','Assignée'];
    $scope.task = {
        name: '',
        type: $scope.types[0]
    };
    $scope.is_form_complete = false;

    $scope.$watch('task.name', function(newValue,oldValue) {
        $scope.is_form_complete = (newValue!=='') ? true:false;
    });

    $scope.create = function() {
        $modalInstance.close($scope.task);
    };

    $scope.cancel = function() {
        $modalInstance.dismiss();
    };
}]);


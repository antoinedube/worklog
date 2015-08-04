'use strict';

angular.module('TasksManager.task-creation', [])

.controller('TaskCreationCtrl', ['$scope', '$modalInstance', 'Task', function($scope,$modalInstance,Task) {
    $scope.types = ['Fixe','Assignée'];

    $scope.task = {
        name: '',
        type: $scope.types[0]
    };
    $scope.is_form_complete = false;

    $scope.task.end_time = new Date();

    $scope.$watch('task.name', function(newValue,oldValue) {
        $scope.is_form_complete = (newValue!=='') ? true:false;
    });

    $scope.create = function() {
        Task.save($scope.task,function(task) {
            $modalInstance.close(task);
        })
    };

    $scope.cancel = function() {
        $modalInstance.dismiss();
    };

    $scope.open = function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.opened = true;
    };
}])

.directive();

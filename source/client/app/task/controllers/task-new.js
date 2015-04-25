'use strict';

angular.module('TasksManager.task-new', ['ngRoute', 'ui.bootstrap', 'TasksManager.task-model'])

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


    $scope.open = function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.opened = true;
    }
}]);

'use strict';

angular.module('TasksManager.task-new', ['ngRoute', 'ui.bootstrap', 'TasksManager.task-model'])

// Should be a factory instead of a controller
.controller('NewTaskCtrl', ['$scope', '$modalInstance', function($scope,$modalInstance) {
    $scope.types = ['Fixe','Assignée'];

    $scope.task = {
        name: '',
        type: $scope.types[0]
    };
    $scope.is_form_complete = false;

    $scope.task.end_time = new Date();
    $scope.task.end_time.setMinutes(0);

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
    };
}])
.factory('TaskCreator',['$modal', function($modal) {
    return function() {
        $modal.open({
            templateUrl: 'task_manager/shared/task/create/create_view.html',
            controller: 'NewTaskCtrl',
            backdrop: 'static',
            backdropClass: 'fade in',
            windowClass: 'dropdown-menu-right'
        })
        .result.then(function(task) {
            Task.save(task,function(data) {
                $scope.taskslist.push(data);
            })
        });
    };
    // Should return whatever so that TaskCreator.then(...)
}]);

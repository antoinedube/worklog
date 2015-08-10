'use strict';

angular.module('TasksManager.task-new', ['ngRoute', 'ui.bootstrap', 'TasksManager.task-model'])

.controller('NewTaskCtrl', ['$scope', '$modalInstance', 'Task', function($scope,$modalInstance,Task) {
    $scope.types = ['Fixe','Assignée'];

    $scope.task = {
        name: '',
        type: $scope.types[0]
    };
    $scope.is_form_complete = false;
    $scope.time_pattern = '[0-9]{1,2}:?h?[0-9]{2}';

    $scope.$watch('task.name', function(newValue,oldValue) {
        $scope.is_form_complete = (newValue!=='') ? true:false;
    });

    $scope.create = function() {
        var new_task = {};
        new_task.name = $scope.task.name;
        new_task.type = $scope.task.type;
        new_task.end_date = $scope.task.end_date;
        new_task.end_date.setHours($scope.task.end_time.match(/^[0-9]{1,2}/),$scope.task.end_time.match(/[0-9]{2}$/));

        Task.save(new_task,function(task) {
            $modalInstance.close(task);
        });
    };

    $scope.cancel = function() {
        $modalInstance.dismiss();
    };

    $scope.open = function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.opened = true;
    };
}]);


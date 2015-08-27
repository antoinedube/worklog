'use strict';

angular.module('TasksManager.task-new', ['ngRoute', 'ui.bootstrap', 'TasksManager.task-model'])

.controller('NewTaskCtrl', ['$scope', '$modalInstance', 'Task', function($scope,$modalInstance,Task) {
    $scope.types = ['Fixe','Assignée','Non-assignée'];

    $scope.task = {
        name: '',
        begin_date: new Date(),
        end_date: new Date(),
        type: $scope.types[0]
    };
    $scope.is_form_complete = false;
    $scope.$watch('task.name', function(newValue,oldValue) {
        $scope.is_form_complete = (newValue!=='') ? true:false;
    });

    $scope.is_start_date_required = false;
    $scope.$watch('task.type', function(newValue,oldValue) {
        $scope.is_start_date_required = (newValue==='Fixe') ? true:false;
        console.log($scope.is_start_date_required);
    });

    $scope.create = function() {
        var new_task = {};
        new_task.name = $scope.task.name;
        new_task.type = $scope.task.type;
        new_task.end_date = $scope.task.end_date;
        new_task.end_date.setHours($scope.task.end_time.getHours(),$scope.task.end_time.getMinutes());
        new_task.begin_date = $scope.task.begin_date;
        new_task.begin_date.setHours($scope.task.begin_time.getHours(),$scope.task.begin_time.getMinutes());

        Task.save(new_task,function(task) {
            $modalInstance.close(task);
        });
    };

    $scope.cancel = function() {
        $modalInstance.dismiss();
    };

    $scope.open_begin_date = function($event) {
        $event.preventDefault();
        $event.stopPropagation();

        $scope.begin_date_opened = true;
    };

    $scope.open_end_date = function($event) {
        $event.preventDefault();
        $event.stopPropagation();

        $scope.end_date_opened = true;
    };

}]);


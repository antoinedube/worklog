'use strict';

angular.module('TasksManager.task-new', ['ngRoute', 'ui.bootstrap', 'TasksManager.task-model'])

.controller('NewTaskCtrl', ['$scope', '$modalInstance', 'Task', function($scope,$modalInstance,Task) {
    $scope.types = ['Fixe','Assignée','Non-assignée'];

    $scope.task = {
        name: '',
        begin_date: new Date(),
        end_date: new Date(),
        deadline_date: new Date(),
        type: $scope.types[0]
    };
    $scope.is_form_complete = false;
    $scope.$watch('task.name', function(newValue,oldValue) {
        $scope.is_form_complete = (newValue!=='') ? true:false;
    });

    $scope.is_start_date_required = false;
    $scope.is_end_date_required = false;
    $scope.is_deadline_required = false;
    $scope.$watch('task.type', function(newValue,oldValue) {
        if (newValue===$scope.types[0]) {
            $scope.is_start_date_required = true;
            $scope.is_end_date_required = true;
            $scope.is_deadline_required = false;
        }
        else if (newValue===$scope.types[1]) {
            $scope.is_start_date_required = true;
            $scope.is_end_date_required = true;
            $scope.is_deadline_required = true;
        }
        else if (newValue===$scope.types[2]) {
            $scope.is_start_date_required = false;
            $scope.is_end_date_required = false;
            $scope.is_deadline_required = true;
        }
    });

    $scope.create = function() {
        var new_task = {};
        new_task.name = $scope.task.name;
        new_task.type = $scope.task.type;
        if (new_task.type===$scope.types[0]) {
            new_task.begin_date = $scope.task.begin_date;
            new_task.begin_date.setHours($scope.task.begin_time.getHours(),$scope.task.begin_time.getMinutes());

            new_task.end_date = $scope.task.end_date;
            new_task.end_date.setHours($scope.task.end_time.getHours(),$scope.task.end_time.getMinutes());

            new_task.deadline = null;
        }
        else if (new_task.type===$scope.types[1]) {
            new_task.begin_date = $scope.task.begin_date;
            new_task.begin_date.setHours($scope.task.begin_time.getHours(),$scope.task.begin_time.getMinutes());

            new_task.end_date = $scope.task.end_date;
            new_task.end_date.setHours($scope.task.end_time.getHours(),$scope.task.end_time.getMinutes());

            new_task.deadline = $scope.task.deadline_date;
            new_task.deadline.setHours($scope.task.deadline_time.getHours(),$scope.task.deadline_time.getMinutes());
        }
        else if (new_task.type===$scope.types[2] && typeof($scope.task.deadline_time)!='undefined') {
            new_task.begin_date = null;
            new_task.end_date = null;
            new_task.deadline = $scope.task.deadline_date;
            new_task.deadline.setHours($scope.task.deadline_time.getHours(),$scope.task.deadline_time.getMinutes());
        }
        else {
            new_task.begin_date = null;
            new_task.end_date = null;
            new_task.deadline = null;
        }

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

    $scope.open_deadline_date = function($event) {
        $event.preventDefault();
        $event.stopPropagation();

        $scope.deadline_date_opened = true;
    };
}]);


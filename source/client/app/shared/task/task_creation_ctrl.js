'use strict';

angular.module('TasksManager.task-new', ['ngRoute', 'ui.bootstrap', 'TasksManager.task-model'])

.controller('NewTaskCtrl', ['$scope', '$modalInstance', 'Task', function($scope,$modalInstance,Task) {
    $scope.types = ['Fixe','Assignée'];

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

    $scope.create = function() {
        var new_task = {};
        new_task.name = $scope.task.name;
        new_task.type = $scope.task.type;
        new_task.end_date = $scope.task.end_date;
        new_task.end_date.sethours($scope.task.end_time.gethours(),$scope.task.end_time.getminutes());
        new_task.begin_date = $scope.task.begin_date;
        new_task.begin_date.sethours($scope.task.begin_time.gethours(),$scope.task.begin_time.getminutes());

        console.log('new_task is: ',new_task);

        // Task.save(new_task,function(task) {
        //     $modalInstance.close(task);
        // });
    };

    $scope.cancel = function() {
        $modalInstance.dismiss();
    };

    // https://stackoverflow.com/questions/19613510/how-to-have-at-least-two-datepickers-of-ui-bootstrap-on-a-single-page

    $scope.begin_date_open = function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.begin_date_opened = true;
    };

    $scope.end_date_open = function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.end_date_opened = true;
    };
}]);


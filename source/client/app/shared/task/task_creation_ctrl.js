'use strict';

angular.module('TasksManager.task-new', ['ngRoute', 'ui.bootstrap', 'TasksManager.task-model'])

.controller('NewTaskCtrl', ['$scope', '$modalInstance', 'Task', function($scope,$modalInstance,Task) {
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

    $scope.open = function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.opened = true;
    };
}]);


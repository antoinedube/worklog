(function () {
    'use strict';

    angular.module('TasksManager.task')

    .controller('NewTaskCtrl', ['$scope', '$modalInstance', function($scope,$modalInstance) {
        // $scope.types = ['Fixe','Assignée','Non-assignée'];

        // $scope.task = {
        //     name: '',
        //     begin_date: new Date(),
        //     end_date: new Date(),
        //     deadline_date: new Date(),
        //     type: $scope.types[0]
        // };
        // $scope.is_form_complete = false;


        // For items specific to the form, create a directive
        // --> includes model validation
        //
        // Instead of $watch, there is most likely something to do with ngModelController
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
        // Until here should be included in modal


        $scope.create = function() {
            console.log('task-creation ctrl: ', $scope.task);
            $modalInstance.close($scope.task);
        };

        $scope.cancel = function() {
            $modalInstance.dismiss();
        };

    }]);
})();

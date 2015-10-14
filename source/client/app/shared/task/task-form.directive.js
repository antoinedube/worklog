(function () {
    'use strict';

    angular
       .module('TasksManager.task')
       .directive('taskForm', TaskForm);

    function TaskForm() {
        var directive =  {
            controller: TaskFormController,
            bindToController: true,
            controllerAs: 'vm',
            link: TaskFormLink,
            replace: false,
            restrict: 'EA',
            scope: {
                submit: "&",
                cancel: "&"
            },
            templateUrl: 'task_manager/shared/task/task-form.view.html'
        };

        return directive;
    }

    function TaskFormController() {
        // Use 'text' input with custom format validation
        var vm = this;
        vm.types = ['Fixe', 'Assignée', 'Non-assignée'];
        vm.task = {
            name: '',
            begin_date: new Date(),
            end_date: new Date(),
            deadline_date: new Date(),
            type: vm.types[0]
        };
        vm.date_opened = {};

        vm.is_start_date_required = true;
        vm.is_end_date_required = true;
        vm.is_deadline_required = true;

        vm.open_date = function($event, type) {
            $event.preventDefault();
            $event.stopPropagation();

            vm.date_opened[type] = true;
        };
    }

    function TaskFormLink(scope, element, attrs, vm) {
        // Model fields validation
        /*
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
        */
    }

})();

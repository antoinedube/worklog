(function () {
    'use strict';

    angular.module('TasksManager.tm-forms',[])

    .directive('tmForms', tmForms);

    function tmForms() {
        var directive =  {
            controller: TmFormsController,
            bindToController: true,
            controllerAs: 'vm',
            link: angular.noop,
            replace: true,
            restrict: 'EA',
            scope: {
                formType: '@',
            },
            templateUrl: 'task_manager/shared/views/tm-forms.views.html'
        };

        return directive;
    }

    function TmFormsController() {
        var vm = this;

        vm.some_value = 25;
    }

})();

(function () {
    'use strict';

    angular.module('TasksManager.tm-forms',[])

    .directive('tmForms', tmForms);

    function tmForms() {
        var directive =  {
            bindToController: true,
            controller: angular.noop(),
            controllerAs: 'vm',
            link: TmFormsLink,
            replace: true,
            restrict: 'EA',
            scope: {
                formType: '@',
            },
            templateUrl: 'task_manager/shared/views/tm-forms.views.html'
        };

        return directive;
    }

    function TmFormsLink(scope,element,attrs,ctrl) {
        var vm = scope.vm;

        vm.some_value = 5;
    }

})();

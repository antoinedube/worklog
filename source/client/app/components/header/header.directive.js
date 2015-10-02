(function () {
    'use strict';

    angular.module('TasksManager.header', ['TasksManager.user'])

    .directive('header', tmForms);

    function tmForms() {
        var directive =  {
            controller: HeaderController,
            bindToController: true,
            controllerAs: 'vm',
            link: angular.noop,
            replace: true,
            restrict: 'EA',
            templateUrl: 'task_manager/components/header/header.view.html'
        };

        return directive;
    }

    HeaderController.$inject = ['User'];

    function HeaderController(User) {
        var vm = this;
        vm.logout = logout;

        function logout() {
            User.logout();
        }
    }
})();

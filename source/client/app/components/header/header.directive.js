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
        vm.status = {
            isopen: false
        };

        vm.logout = logout;
        vm.toggleDropdown = toggleDropdown;

        function logout() {
            User.logout();
        }

        function toggleDropdown($event) {
           $event.preventDefault();
           $event.stopPropagation();
           vm.status.isopen = !vm.status.isopen;
        }
    }
})();


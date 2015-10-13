(function () {
    'use strict';

    angular.module('TasksManager.header', ['TasksManager.user'])

    .directive('header', tmHeader);

    function tmHeader() {
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

        User.fetchOne().then(function(user) {
            vm.user = user;
        });

        // Cannot use "class" name, but "instance"

        vm.logout = logout;
        vm.toggleDropdown = toggleDropdown;

        function logout() {
            vm.user.logout();
        }

        function toggleDropdown($event) {
           $event.preventDefault();
           $event.stopPropagation();
           vm.status.isopen = !vm.status.isopen;
        }
    }
})();


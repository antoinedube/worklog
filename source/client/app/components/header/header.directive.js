(function () {
    'use strict';

    angular.module('TasksManager.header', ['TasksManager.user', 'TasksManager.user-authentication'])

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

    HeaderController.$inject = ['User', 'Logout'];

    function HeaderController(User, Logout) {
        var vm = this;
        vm.status = {
            isopen: false
        };

        User.fetchOne().then(function(user) {
            vm.user = user;
        });

        vm.logout = logout;
        vm.toggleDropdown = toggleDropdown;

        /* ---------- */

        function logout() {
            Logout.submit();
        }

        function toggleDropdown($event) {
           $event.preventDefault();
           $event.stopPropagation();
           vm.status.isopen = !vm.status.isopen;
        }
    }
})();


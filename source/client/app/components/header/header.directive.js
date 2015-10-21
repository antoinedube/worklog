(function () {
    'use strict';

    angular
        .module('TasksManager.header', ['TasksManager.session', 'TasksManager.authentication'])
        .directive('header', Header);

    function Header() {
        var directive =  {
            controller: HeaderController,
            bindToController: true,
            controllerAs: 'vm',
            link: HeaderLink,
            replace: true,
            restrict: 'EA',
            scope: {},
            templateUrl: 'task_manager/components/header/header.view.html'
        };

        return directive;
    }

    HeaderController.$inject = ['Session', 'Logout'];
    function HeaderController(Session, Logout) {
        var vm = this;

        // When calling Session, the login has not been done yet.
        // On login, maybe broadcast an event to all application. on this event, reload data?
        vm.user = Session.current_user;
        console.log('Header session.user: ', vm.user);

        vm.logout = logout;

        /* ---------- */

        function logout() {
            Logout.submit();
        }
    }

    function HeaderLink(scope, element, attrs, vm) {
    }
})();


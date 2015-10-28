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

//        vm.current_user = Session.get_user;
        vm.session = Session;
        vm.logout = logout;

        /* ---------- */

        function logout() {
            Logout.submit();
        }
    }

    function HeaderLink(scope, element, attrs, vm) {
    }
})();


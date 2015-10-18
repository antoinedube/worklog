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
        console.log('Controller');
        var vm = this;

        vm.user = Session.current_user;

        vm.logout = logout;

        /* ---------- */

        function logout() {
            console.log('Logging out');
            Logout.submit().then(function(data) {
                console.log('Logged out: ', data);
            });
        }
    }

    function HeaderLink(scope, element, attrs, vm) {
        console.log('Link function');
    }
})();


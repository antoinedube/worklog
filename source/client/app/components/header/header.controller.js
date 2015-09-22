(function () {
    'use strict';

    angular.module('TasksManager.header', ['TasksManager.user'])
        .controller('HeaderCtrl', HeaderCtrl);

    HeaderCtrl.$inject = ['User'];

    function HeaderCtrl(User) {
        var vm = this;
        vm.logout = logout;

        function logout() {
            User.logout();
        }
    }
})();


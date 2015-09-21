(function () {
    'use strict';

    angular.module('TasksManager.header', ['TasksManager.logout'])
        .controller('HeaderCtrl', HeaderCtrl);

    HeaderCtrl.$inject = ['LogoutResource'];

    function HeaderCtrl(LogoutResource) {
        var vm = this;
        vm.logout = logout;

        function logout() {
            LogoutResource.save();
        };
    }
})();


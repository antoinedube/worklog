(function () {
    'use strict';

    angular
        .module('TasksManager.user-authentication')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$modalInstance'];
    function LoginController($modalInstance) {
        var vm = this;

        vm.user = {
            username: '',
            password: ''
        };

        vm.is_form_complete = false;

        vm.submit = function() {
            $modalInstance.close($scope.user);
        };

        vm.cancel = function() {
            $modalInstance.dismiss();
        };

        vm.open = function($event) {
            $event.preventDefault();
            $event.stopPropagation();
            vm.opened = true;
        };
    }
})();

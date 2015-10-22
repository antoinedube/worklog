(function () {
    'use strict';

    angular
        .module('TasksManagerLogin')
        .directive('frontPageLogin', FrontPageLogin);

    function FrontPageLogin() {
        var directive =  {
            controller: FrontPageLoginController,
            bindToController: true,
            controllerAs: 'vm',
            link: FrontPageLoginLink,
            replace: true,
            restrict: 'EA',
            scope: {},
            templateUrl: 'task_manager_login/login.view.html'
        };

        return directive;
    }

    FrontPageLoginController.$inject = ['$resource', '$window'];
    function FrontPageLoginController($resource, $window) {
        var vm = this;
        vm.user = {};
        vm.login_message = 'Message initial';

        vm.submit = submit;

        /* ---------- */

        function submit() {
            console.log('User: ', vm.user);
            $resource('/login',{})
                .save(vm.user).$promise
                .then(function(data) {
                    console.log('Success: ', data);
                    vm.login_message = 'Connexion réussie';
                    $window.location.reload();
                }, function(data) {
                    console.log('Error: ', data);
                    vm.login_message = 'Connexion refusée'
                    console.log('login message: ', vm.login_message);
                });
        }
    }

    function FrontPageLoginLink(scope, element, attrs, vm) {
    }

})();

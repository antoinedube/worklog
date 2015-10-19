(function () {
    'use strict';

    angular
        .module('TasksManager.authentication')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$modalInstance', '$resource', 'Session', 'User'];
    function LoginController($modalInstance, $resource, Session, User) {
        var vm = this;

        vm.user = {
            username: '',
            password: ''
        };

        vm.is_form_complete = false;

        vm.submit = function() {
            $resource('/login',{}).save(vm.user)
                .$promise
                .then(
                    function(data) {
                        if (data.message === 'Invalid login') {
                            console.log('Error: ', data);
                            vm.message = 'Connexion refusée';
                        }
                        else {
                            console.log('Success: ', data);
                            User.fetchOne(data.user_id).then(function(user) {
                                Session.set_user(user);
                                $modalInstance.close();
                            });
                        }
                    }
                );
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

(function () {
  'use strict';

  angular
    .module('TasksManager.authentication')
    .controller('LoginController', LoginController);

  LoginController.$inject = ['$uibModalInstance', '$resource', 'Session', 'User'];
  function LoginController($uibModalInstance, $resource, Session, User) {
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
              vm.message = 'Connexion refusée';
            }
            else {
              Session.set_user(data.user_id);
              $uibModalInstance.close();
            }
          }
        );
    };

    vm.cancel = function() {
      $uibModalInstance.dismiss();
    };

    vm.open = function($event) {
      $event.preventDefault();
      $event.stopPropagation();
      vm.opened = true;
    };
  }
})();

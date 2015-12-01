(function () {
  'use strict';

  angular
    .module('TasksManager.login-page')
    .controller('LoginPageController', LoginPageController);

  LoginPageController.$inject = ['$location', '$resource', 'Session'];
  function LoginPageController($location, $resource, Session) {
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
            }
          }
        );
    };
  }
})();

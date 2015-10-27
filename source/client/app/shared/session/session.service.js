(function () {
  'use strict';

  angular
    .module('TasksManager.session', ['ngCookies', 'TasksManager.user'])
    .service('Session', Session);

  Session.$inject = ['$cookies', 'User'];
  function Session($cookies,User) {
    var session = {
      get_user: get_user,
      set_user: set_user,
      delete_user: delete_user
    };

    return session;

    /* ---------- */

    function set_user(user_id) {
      User.fetchOne(user_id).then(function(user) {
        $cookies.putObject('user', user);
        console.log('Cookie user: ', user);
      });
    }

    function get_user() {
      console.log('Stored cookie user: ', $cookies.getObject('user'));
      return $cookies.getObject('user');
    }

    function delete_user() {
      $cookies.remove('user');
    }
  }

})();

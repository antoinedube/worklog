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
      delete_user: delete_user,
      user_full_name: user_full_name
    };

    return session;

    /* ---------- */

    function set_user(user_id) {
      User.fetchOne(user_id).then(function(user) {
        $cookies.putObject('user', user);
      });
    }

    function get_user() {
      return $cookies.getObject('user');
    }

    function delete_user() {
      $cookies.remove('user');
    }

    function user_full_name() {
      var user = $cookies.getObject('user');
      if (!user) {
        return '';
      }
      else {
        return user.first_name + ' ' + user.last_name;
      }
    }
  }

})();

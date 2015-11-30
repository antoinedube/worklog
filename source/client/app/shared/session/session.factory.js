(function () {
  'use strict';

  angular
    .module('TasksManager.session', ['ngCookies', 'TasksManager.user'])
    .service('Session', Session);

  Session.$inject = ['$location', '$cookies', 'User'];
  function Session($location,$cookies,User) {
    var session = {
      get_user: get_user,
      is_user_logged_in: is_user_logged_in,
      set_user: set_user,
      delete_user: delete_user,
      user_full_name: user_full_name
    };

    return session;

    /* ---------- */

    function set_user(user_id) {
      User.get({user_id:user_id}).$promise.then(function(user) {
        $cookies.putObject('user', user);
      });
    }

    function is_user_logged_in() {
      console.log('Checking user logged in...');
      if ($cookies.getObject('user')) {
        console.log('Found user');
        return true;
      }
      else {
        console.log('No user found');
        return false;
      }
    }

    function get_user() {
      var current_user = $cookies.getObject('user');
      if (!current_user) {
        $location.path('/login-page');
      }
      else {
        return current_user;
      }
    }

    function delete_user() {
      $cookies.remove('user');
    }

    function user_full_name() {
      var user = get_user();
      if (user) {
        return user.first_name + ' ' + user.last_name;
      }
    }
  }

})();

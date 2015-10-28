(function () {
  'use strict';

  angular
    .module('TasksManager.user', ['ngResource'])
    .factory('User', User);

  User.$inject = ['$resource'];
  function User($resource) {
    return $resource('/api/users/:user_id');
  }
})();


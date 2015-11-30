(function () {
  'use strict';

  angular
    .module('TasksManager.login-page', ['ngRoute', 'ngResource', 'TasksManager.session'])
    .config(['$routeProvider', function($routeProvider) {
     $routeProvider.when('/login-page', {
      templateUrl: 'task_manager/components/login-page/login-page.view.html',
      controller: 'LoginPageController',
      controllerAs: 'vm'
     });
    }]);
})();

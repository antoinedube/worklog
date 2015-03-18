'use strict';

// Declare app level module which depends on views, and components
angular.module('TasksManager', [
  'ngRoute',
  'TasksManager.left-menu',
  'TasksManager.home',
  'TasksManager.tasks-list',
])
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/home'});
}])
.config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
}]);

'use strict';

// Declare app level module which depends on views, and components
angular.module('TasksManager', [
  'ngRoute',
  'TasksManager.left-menu',
  'TasksManager.home',
  'TasksManager.tasks-list',
  'TasksManager.task-view'
])
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/home'});
}])
.config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
    $httpProvider.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded; charset=utf-8";
}]);

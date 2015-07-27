'use strict';

// Declare app level module which depends on views, and components
angular.module('TasksManager', [
  'ngRoute',
  'TasksManager.unauthorized-interceptor',
  'TasksManager.left-menu',
  'TasksManager.home',
  'TasksManager.tasks-list',
  'TasksManager.task-view',
  'TasksManager.day-planner'
])
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/home'});
}])
.config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
    $httpProvider.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded; charset=utf-8";

    $httpProvider.interceptors.push('UnauthorizedInterceptor');
}]);

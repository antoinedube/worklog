'use strict';

angular.module('TasksManager.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: '/static/home/view.html',
    controller: 'HomeCtrl'
  });
}])

.controller('HomeCtrl', [function() {
}]);


'use strict';

angular.module('TasksManager.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'task_manager/components/home/home_view.html',
    controller: 'HomeCtrl'
  });
}])

.controller('HomeCtrl', [function() {
}]);


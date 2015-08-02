'use strict';

angular.module('TasksManager.home', ['ngRoute', 'TasksManager.profile-factory'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'task_manager/components/home/home_view.html',
    controller: 'HomeCtrl'
  });
}])

.controller('HomeCtrl', ['$scope', 'ProfileFactory', function($scope,ProfileFactory) {
}]);


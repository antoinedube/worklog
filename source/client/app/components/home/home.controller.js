(function () {
    'use strict';

    angular.module('TasksManager.home', ['ngRoute', 'TasksManager.task'])

    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/home', {
        templateUrl: 'task_manager/components/home/home.view.html',
        controller: 'HomeCtrl'
      });
    }])

    .controller('HomeCtrl', ['$scope', function($scope) {
    }]);
})();

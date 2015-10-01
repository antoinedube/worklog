(function () {
    'use strict';

    angular.module('TasksManager.home', ['ngRoute', 'TasksManager.tm-forms'])

    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/home', {
        templateUrl: 'task_manager/components/home/home.view.html',
        controller: 'HomeCtrl'
      });
    }])

    .controller('HomeCtrl', ['$scope', function($scope) {
    }]);
})();

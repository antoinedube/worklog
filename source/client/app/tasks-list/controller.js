'use strict';

angular.module('TasksManager.tasks-list', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/tasks-list', {
    templateUrl: '/static/tasks-list/view.html',
    controller: 'TasksListCtrl'
  });
}])

.controller('TasksListCtrl', ['$scope','$http',function($scope,$http) {
    $http.get('/task/')
        .success(function(data,status,headers,config) {
            $scope.taskslist = data;
        })
        .error(function(data,status,headers,config) {
            $scope.message;
        });

    $scope.createNew = function() {
        console.log('Creating new task!!');
    };
}]);

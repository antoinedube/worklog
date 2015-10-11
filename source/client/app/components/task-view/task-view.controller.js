(function () {
    'use strict';

    angular.module('TasksManager.task-view', ['ngRoute', 'TasksManager.task'])

    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/task-view/:task_id', {
        templateUrl: 'task_manager/components/task-view/task-view.view.html',
        controller: 'TaskViewCtrl'
      });
    }])

    .controller('TaskViewCtrl', TaskViewCtrl);
    
    TaskViewCtrl.$inject = ['$scope', '$location', '$routeParams', 'Task'];

    function TaskViewCtrl($scope,$location,$routeParams,Task) {
        Task.fetchOne($routeParams.task_id).then(function(task) {
            $scope.task = task;
        });

        $scope.close = function() {
            $location.path('/tasks-list');
        };
    }

})();


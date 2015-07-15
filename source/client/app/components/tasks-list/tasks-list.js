'use strict';

angular.module('TasksManager.tasks-list', ['ngRoute', 'TasksManager.task-model', 'TasksManager.task-new'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/tasks-list', {
    templateUrl: 'task_manager/components/tasks-list/tasks-list_view.html',
    controller: 'TasksListCtrl'
  });
}])

.controller('TasksListCtrl', ['$scope', 'Task', 'TaskCreationService', function($scope,Task,TaskCreationService) {
    $scope.taskslist = Task.query();

    $scope.create_new = function() {
        TaskCreationService.create().then(function(task) {
                Task.save(task,function(data) {
                    $scope.taskslist.push(data);
            })
        });
    };

    /*
    $scope.create_new = function() {
        $modal.open({
            templateUrl: 'task_manager/shared/task/create/create_view.html',
            controller: 'NewTaskCtrl',
            backdrop: 'static',
            backdropClass: 'fade in',
            windowClass: 'dropdown-menu-right'
        })
        .result.then(function(task) {
            Task.save(task,function(data) {
                $scope.taskslist.push(data);
            })
        });
    };
    */
}]);

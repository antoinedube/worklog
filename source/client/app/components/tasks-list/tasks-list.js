'use strict';

angular.module('TasksManager.tasks-list', ['ngRoute', 'ui.bootstrap.modal', 'TasksManager.task-model', 'TasksManager.task-new'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/tasks-list', {
    templateUrl: 'task_manager/components/tasks-list/tasks-list_view.html',
    controller: 'TasksListCtrl'
  });
}])

.controller('TasksListCtrl', ['$scope', '$modal', 'Task', function($scope,$modal,Task) {
    $scope.taskslist = Task.query();
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

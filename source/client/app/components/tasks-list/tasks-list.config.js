(function () {
    'use strict';

    angular
        .module('TasksManager.tasks-list', ['ngRoute', 'TasksManager.task'])
        .config(['$routeProvider', function($routeProvider) {
          $routeProvider.when('/tasks-list', {
            templateUrl: 'task_manager/components/tasks-list/tasks-list.view.html',
            controller: 'TasksListCtrl',
            controllerAs: 'vm'
          });
        }]);
})();

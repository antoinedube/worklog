(function () {
    'use strict';

    angular
        .module('TasksManager.task-view', ['ngRoute', 'TasksManager.task'])
        .config(['$routeProvider', function($routeProvider) {
          $routeProvider.when('/task-view/:task_id', {
            templateUrl: 'task_manager/components/task-view/task-view.view.html',
            controller: 'TaskViewController',
            controllerAs: 'vm'
          });
        }]);
})();

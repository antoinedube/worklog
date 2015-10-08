(function () {
    'use strict';

    angular.module('TasksManager.task', ['ui.bootstrap', 'ngRoute', 'TasksManager.base-resource'])

    .factory('Task', Task);

    Task.$inject = ['$modal', 'BaseResource'];

    function Task($modal,BaseResource) {
        var task_resource = new BaseResource('/api/task/:task_id');

        var factory = {
            all: all,
            get: get,
            create: create
        };

        return factory;

        function all() {
            return task_resource.query().$promise;
        }

        function get(task_id) {
            return task_resource.get(task_id).$promise;
        }

        function create() {
            return $modal.open({
                templateUrl: 'task_manager/shared/task/task-creation.view.html',
                controller: 'NewTaskCtrl',
                backdrop: 'static',
                backdropClass: 'fade in',
                windowClass: 'dropdown-menu-right'
            }).result.then(function(task) {
                return task_resource.save(task).$promise;
            });
        }
    }
})();


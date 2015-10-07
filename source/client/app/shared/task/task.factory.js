(function () {
    'use strict';

    angular.module('TasksManager.task', ['ui.bootstrap', 'ngRoute', 'TasksManager.base-resource'])

    .factory('Task', Task);

    Task.$inject = ['$modal', 'BaseResource'];

    function Task($modal,BaseResource) {
        var task_resource = new BaseResource('/api/task/:task_id');

        var factory = {
            all: function() {
                return task_resource.query().$promise;
            },
            get: function(task_id) {
                return task_resource.get(task_id).$promise;
            },
            create: function() {
                return $modal.open({
                    templateUrl: 'task_manager/shared/task/task-creation.view.html',
                    controller: 'NewTaskCtrl',
                    backdrop: 'static',
                    backdropClass: 'fade in',
                    windowClass: 'dropdown-menu-right'
                }).result.then(function(task) {
                    console.log('task promise after create' + task);
                    return task_resource.save(task).$promise;
                });
            }
        };

        return factory;
    }
})();


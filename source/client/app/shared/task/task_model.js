'use strict';

angular.module('TasksManager.task-model', ['TasksManager.base-model'])

.factory('Task', ['BaseModel', function(BaseModel) {
    var task_resource = BaseModel('/task/:task_id');
    var Task = {
        all: function() {
            return task_resource.query().$promise;
        },
        get: function(task_id) {
            return task_resource.get(task_id).$promise;
        },
        create: function() {
            return $modal.open({
                templateUrl: 'task_manager/shared/task/task_creation_view.html',
                controller: 'NewTaskCtrl',
                backdrop: 'static',
                backdropClass: 'fade in',
                windowClass: 'dropdown-menu-right'
            }).result
        }
    };

    return Task;
}])


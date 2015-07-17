'use strict';

angular.module('TasksManager.task-factory', ['ui.bootstrap', 'TasksManager.task-new', 'TasksManager.task-model'])

.factory('TaskFactory',['$modal', 'Task', function($modal,Task) {
    return {
        create: function() {
        return $modal.open({
                templateUrl: 'task_manager/shared/task/create/create_view.html',
                controller: 'NewTaskCtrl',
                backdrop: 'static',
                backdropClass: 'fade in',
                windowClass: 'dropdown-menu-right'
            }).result
        },
        get_todays_tasks: function() {
            return null;
        }
    }
}]);

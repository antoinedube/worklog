(function() {
    'use strict';

    angular.module('TasksManager.task')

    .factory('TaskFactory', TaskFactory);

    TaskFactory.$inject = ['$modal', 'Task'];

    function TaskFactory($modal, Task) {

        var TaskFactory = {
            create: create,
        };

        return TaskFactory;

        /* ---------- */

        function create() {
            return $modal.open({
                templateUrl: 'task_manager/shared/task/task-creation.view.html',
                controller: 'NewTaskCtrl',
                backdrop: 'static',
                backdropClass: 'fade in',
                windowClass: 'dropdown-menu-right'
            }).result.then(function(task) {
                console.log('in TaskFactory.create(): ', task);
                return new Task({
                    'name': task.name,
                    'begin_at': task.begin_date,
                    'end_at': task.end_date,
                    'deadline': null,
                    'duration': task.end_date.getTime - task.begin_date.getTime(),
                    'type': task.type
                }).$save();
            });
        }
    }
})();

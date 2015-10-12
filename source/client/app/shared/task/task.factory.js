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
                var new_task = create_from_type(task);
                return new_task.$save();
            });
        }

        function create_from_type(task) {
            var new_task = {};
            switch (task.type) {
                case 'Fixe':
                    new_task = new Task({
                        'name': task.name,
                        'begin_at': task.begin_date,
                        'end_at': task.end_date,
                        'type': 'Fixe'
                    })
                    break;
                case 'Assignée':
                    new_task = new Task({
                        'name': task.name,
                        'begin_at': task.begin_date,
                        'end_at': task.end_date,
                        'deadline': task.deadline,
                        'type': 'Assignée'
                    })
                    break;
                case 'Non-assignée':
                    if (typeof task.deadline !== 'undefined') {
                        new_task = new Task({
                            'name': task.name,
                            'deadline': task.deadline,
                            'type': 'Non-assignée'
                        })
                    } else {
                        new_task = new Task({
                            'name': task.name,
                            'type': 'Non-assignée'
                        })
                    }
                    break;
                default:
                    console.log('Undefined type: ', task.type);
            }
            return new_task;
        }
    }
})();

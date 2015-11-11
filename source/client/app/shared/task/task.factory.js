(function() {
    'use strict';

    angular
        .module('TasksManager.task')
        .factory('TaskFactory', TaskFactory);

    TaskFactory.$inject = ['$uibModal', 'Task'];
    function TaskFactory($uibModal, Task) {
        var factory = {
            create: create,
        };

        return factory;

        /* ---------- */

        function create() {
            return $uibModal.open({
                templateUrl: 'task_manager/shared/task/task-creation.view.html',
                controller: 'NewTaskCtrl',
                controllerAs: 'vm',
                backdrop: 'static',
                backdropClass: 'fade in',
                windowClass: 'dropdown-menu-right'
            }).result.then(function(task) {
                var new_task = create_from_type(task);
                return Task.save(new_task).$promise;
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
                    });
                    break;
                case 'Assignée':
                    new_task = new Task({
                        'name': task.name,
                        'begin_at': task.begin_date,
                        'end_at': task.end_date,
                        'deadline': task.deadline,
                        'type': 'Assignée'
                    });
                    break;
                case 'Non-assignée':
                    if (typeof task.deadline !== 'undefined') {
                        new_task = new Task({
                            'name': task.name,
                            'deadline': task.deadline,
                            'type': 'Non-assignée'
                        });
                    } else {
                        new_task = new Task({
                            'name': task.name,
                            'type': 'Non-assignée'
                        });
                    }
                    break;
                default:
                    console.log('Undefined type: ', task.type);
            }
            return new_task;
        }
    }
})();

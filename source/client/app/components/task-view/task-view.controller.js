(function () {
    'use strict';

    angular
        .module('TasksManager.task-view')
        .controller('TaskViewController', TaskViewController);

    TaskViewController.$inject = ['$location', '$routeParams', 'Task'];
    function TaskViewController($location,$routeParams,Task) {
        var vm = this;

        Task.fetchOne($routeParams.task_id).then(function(task) {
            vm.task = task;
            console.log('Task: ', vm.task);
        });

        vm.close = function() {
            $location.path('/tasks-list');
        };
    }
})();


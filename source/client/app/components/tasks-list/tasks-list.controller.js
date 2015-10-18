(function () {
    'use strict';

    angular
        .module('TasksManager.tasks-list')
        .controller('TasksListCtrl', TasksListController);

    TasksListController.$inject = ['Task', 'TaskFactory'];
    function TasksListController(Task, TaskFactory) {
        var vm = this;

        Task.fetchAll().then(function(tasks) {
            console.log('Tasks list: ', tasks);
            vm.tasks_list = tasks;
        });

        vm.create_new = function() {
            TaskFactory.create().then(function(task) {
                vm.tasks_list.push(task);
            });
        };
    }
})();

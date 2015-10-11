(function() {
    'use strict';

    angular.module('TasksManager.task')
    .factory('TaskHelpers', TaskHelpers);

    function TaskHelpers() {
        var factory = {
            create: create,
        };

        return factory;


        function create(task) {
            var new_task = {};

            return new_task;
        }

    }
})();

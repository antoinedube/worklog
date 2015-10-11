(function () {
    'use strict';

    angular.module('TasksManager.task', ['ui.bootstrap', 'TasksManager.base-model'])

    .factory('Task', Task);

    Task.$inject = ['Base'];

    function Task(Base) {

        var Task = Base.extend({
            $urlRoot: '/api/tasks',
        });

        return Task;
    }
})();


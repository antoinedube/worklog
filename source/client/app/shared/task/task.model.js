(function () {
    'use strict';

    angular
        .module('TasksManager.task', ['ui.bootstrap', 'TasksManager.base-model'])
        .factory('Task', Task);

    Task.$inject = ['Base'];
    function Task(Base) {
        var factory = Base.extend({
            $urlRoot: '/api/tasks',
        });

        return factory;
    }
})();


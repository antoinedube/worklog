(function () {
    'use strict';

    angular
        .module('TasksManager.task', ['ui.bootstrap', 'ngResource'])
        .factory('Task', Task);

    Task.$inject = ['$resource'];
    function Task($resource) {
        return $resource('/api/tasks/:task_id').$promise;
    }
})();


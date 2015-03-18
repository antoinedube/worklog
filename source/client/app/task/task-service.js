'use strict';

angular.module('TasksManager.task-service', ['ngResource'])

.factory('Task', ['$resource', function($resource) {
    return $resource('/api/task/:id', {}, {
            query: {method: 'GET', isArray: true},
            save: {method: 'POST'}
        }
    );
}]);



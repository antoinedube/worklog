'use strict';

angular.module('TasksManager.task-model', ['ngResource'])

.factory('Task', ['$resource', function($resource) {
    return $resource('/api/task/:task_id',{});
}]);


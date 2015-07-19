'use strict';

angular.module('TasksManager.task-model', ['ngResource'])

.factory('Task', ['$resource', function($resource) {
    return $resource('/api/task/:task_id',{});
}])

.factory('FilteredTask', ['$resource', function($resource) {
    return {
        today: $resource('/api/task/today',{})
    };
}]);


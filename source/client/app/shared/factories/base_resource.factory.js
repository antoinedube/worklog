'use strict';

angular.module('TasksManager.base-resource', ['ngResource'])

.factory('BaseResource', ['$resource', function($resource) {
    return function(model_url) {
        return $resource(model_url,{});
    };
}]);


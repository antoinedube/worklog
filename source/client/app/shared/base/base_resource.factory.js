'use strict';

angular.module('TasksManager.base-resource', ['ngResource'])

.factory('BaseResource', ['$resource', function($resource) {
    return function(model_url) {
        var full_url = '/api' + model_url;
        return $resource(full_url,{});
    };
}]);


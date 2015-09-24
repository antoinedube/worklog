(function () {
    'use strict';

    angular.module('TasksManager.base-resource', ['ngResource'])

    .factory('BaseResource', BaseResource);

    BaseResource.$inject = ['$resource'];

    function BaseResource($resource) {
        return function(model_url) {
            return $resource(model_url,{});
        };
    }

})();

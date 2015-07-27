'use strict';

angular.module('TasksManager.unauthorized-interceptor', [])

.factory('UnauthorizedInterceptor',['$q', function($q) {
    return {
        response: function(response) {
            console.log('Response status, success: ', response.status);
            return response;
        },
        responseError: function(response) {
            if (response.status === 401) {
                console.log('Response status, error: ', response.status);
            }
            return response;
        }
    }
}]);

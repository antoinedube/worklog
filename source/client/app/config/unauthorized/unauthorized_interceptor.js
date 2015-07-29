'use strict';

angular.module('TasksManager.unauthorized', ['TasksManager.login'])

.factory('UnauthorizedInterceptor',['$injector', function($injector) {
    return {
        response: function(response) {
            console.log('Response status, success: ', response.status);
            return response;
        },
        responseError: function(response) {
            if (response.status === 401) {
                var LoginFactory = $injector.get('LoginFactory');
                LoginFactory.login();
                console.log('Response status, error: ', response.status);
            }
            return response;
        }
    }
}]);

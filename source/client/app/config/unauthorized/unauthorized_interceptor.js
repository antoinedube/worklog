'use strict';

angular.module('TasksManager.unauthorized', ['ngRoute', 'TasksManager.login'])

// Need to use $injector in order to avoid a circular dependency
.factory('UnauthorizedInterceptor',['$q', '$injector', function($q,$injector) {
    return {
        responseError: function(response) {
            if (response.status === 401) {
                var LoginFactory = $injector.get('LoginFactory');
                var LoginResource = $injector.get('LoginResource');
                var $route = $injector.get('$route');

                LoginFactory.login().result.then(function(user) {
                    LoginResource.save(user,function(data) {
                        console.log(data);
                        $route.reload();
                    });
                });
            }
            return $q.reject(response);
        }
    }
}]);

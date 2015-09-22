'use strict';

angular.module('TasksManager.unauthorized', ['ngRoute', 'TasksManager.user'])

// Need to use $injector in order to avoid a circular dependency
.factory('UnauthorizedInterceptor',['$q', '$injector', function($q,$injector) {
    return {
        responseError: function(response) {
            if (response.status === 401) {
                var User = $injector.get('User');
                var $route = $injector.get('$route');

                User.login().then(function(user) {
                    console.log(user);
                    $route.reload();
                });
            }
            return $q.reject(response);
        }
    }
}]);

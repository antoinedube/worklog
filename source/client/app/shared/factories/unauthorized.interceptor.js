(function () {
    'use strict';

    angular.module('TasksManager.unauthorized', ['ngRoute', 'TasksManager.user-authentication'])

    .factory('UnauthorizedInterceptor', UnauthorizedInterceptor);

    UnauthorizedInterceptor.$inject = ['$q', '$injector', 'Login'];

    function UnauthorizedInterceptor($q,$injector) {
        return {
            responseError: function(response) {
                console.log('Response status: ', response.status);
                if (response.status === 401) {
                    var User = $injector.get('User');
                    var $route = $injector.get('$route');
                    var Login = $injector.get('Login');

                    Login.submit().then(function(user) {
                        $route.reload();
                    });
                }
                return $q.reject(response);
            }
        };
    }
})();

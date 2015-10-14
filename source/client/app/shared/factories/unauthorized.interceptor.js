(function () {
    'use strict';

    angular.module('TasksManager.user-authentication')

    .factory('UnauthorizedInterceptor', UnauthorizedInterceptor);

    UnauthorizedInterceptor.$inject = ['$q', '$injector'];

    function UnauthorizedInterceptor($q,$injector) {
        return {
            responseError: function(response) {
                console.log('Response status: ', response.status);
                if (response.status === 401) {
                    var User = $injector.get('User');
                    var $route = $injector.get('$route');
                    var Login = $injector.get('Login');

                    Login.submit().then(function() {
                        console.log('Logged in');
                        $route.reload();
                    });
                }
                return $q.reject(response);
            }
        };
    }
})();

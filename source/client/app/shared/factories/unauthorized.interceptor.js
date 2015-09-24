(function () {
    'use strict';

    angular.module('TasksManager.unauthorized', ['ngRoute', 'TasksManager.user'])

    .factory('UnauthorizedInterceptor', UnauthorizedInterceptor);

    UnauthorizedInterceptor.$inject = ['$q', '$injector'];

    function UnauthorizedInterceptor($q,$injector) {
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
        };
    }
})();

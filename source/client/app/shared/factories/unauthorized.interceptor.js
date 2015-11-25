(function () {
    'use strict';

    angular
        .module('TasksManager.authentication')
        .factory('UnauthorizedInterceptor', UnauthorizedInterceptor);

    UnauthorizedInterceptor.$inject = ['$q', '$injector'];
    function UnauthorizedInterceptor($q,$injector) {
        return {
            responseError: function(response) {
                if (response.status === 401) {
                    var Login = $injector.get('Login');
                    var $route = $injector.get('$route');
                    Login.submit()
                      .result
                      .then(function() {
                        $route.reload();
                      });
                }
                return $q.reject(response);
            }
        };
    }
})();

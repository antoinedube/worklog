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
                    Login.submit();
                }
                return $q.reject(response);
            }
        };
    }
})();

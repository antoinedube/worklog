(function () {
    'use strict';

    angular
        .module('TasksManagerLogin', ['ngResource'])
        .config(['$httpProvider', function($httpProvider) {
            $httpProvider.defaults.xsrfCookieName = 'csrftoken';
            $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
            $httpProvider.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded; charset=utf-8";
        }]);

})();

(function () {
    'use strict';

    angular.module('TasksManagerLogin', [
            'ngResource'
    ]);


    angular.module('TasksManagerLogin')
    .config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.xsrfCookieName = 'csrftoken';
        $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
        $httpProvider.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded; charset=utf-8";
    }])

    .controller('LoginController', ['$resource', function($resource) {
        var vm = this;

        vm.submit = submit;

        /* ---------- */

        function submit() {
            console.log('User: ', vm.user);
            // $resource('/login').save(vm.user).
        }
    }]);

})();

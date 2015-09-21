(function () {
    'use strict';

    angular.module('TasksManager.User', [])

    .factory('User', User);

    User.$inject = [];

    function User() {
        var factory = {
            login: login,
            logout: logout,
            get_profile: get_profile
        };

        return factory;


        function login() {}

        function logout() {}

        function get_profile() {}
    }
})();


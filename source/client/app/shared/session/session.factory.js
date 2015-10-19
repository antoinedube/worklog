(function () {
    'use strict';

    angular
        .module('TasksManager.session', [])
        .factory('Session', Session);

    Session.$inject = [];
    function Session() {
        var current_user;

        var factory = {
            set_user: set_user
        };

        return factory;

        /* ---------- */

        function set_user(user) {
            current_user = user;
        }
    }

})();

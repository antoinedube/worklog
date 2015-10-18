(function () {
    'use strict';

    angular
        .module('TasksManager.session', [])
        .factory('Session', Session);

    Session.$inject = [];
    function Session() {
        var current_user;
        // Make sure to collect user id

        var factory = {
            set_user: set_user
        };

        return factory;

        /* ---------- */

        function set_user(user) {
            console.log('Session.current_user has been set to: ', user);
            current_user = user;
        }
    }

})();

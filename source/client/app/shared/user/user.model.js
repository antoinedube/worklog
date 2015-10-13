(function () {
    'use strict';

    angular.module('TasksManager.user', ['TasksManager.base-model'])

    .factory('User', User);

    User.$inject = ['Base'];

    function User(Base) {

        var User = Base.extend({
            $urlRoot: '/api/users',
            full_name: full_name
        });

        return User;

        /* ---------- */

        function full_name() {
            return this.first_name + ' ' + this.last_name;
        }
    }
})();


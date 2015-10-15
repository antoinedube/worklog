(function () {
    'use strict';

    angular
        .module('TasksManager.user', ['TasksManager.base-model'])
        .factory('User', User);

    User.$inject = ['Base'];
    function User(Base) {
        var factory = Base.extend({
            $urlRoot: '/api/users',
            full_name: full_name
        });

        return factory;

        /* ---------- */

        function full_name() {
            /*jshint validthis:true */
            return this.first_name + ' ' + this.last_name;
        }
    }
})();


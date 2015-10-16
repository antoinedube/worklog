(function () {
    'use strict';

    angular
        .module('TasksManager.session', [])
        .factory('Session', Session);

    Session.$inject = [];
    var current_user;

    function Session() {
        console.log('Session has been called!');
        return {
        };
    }

})();

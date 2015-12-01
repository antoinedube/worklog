(function () {
    'use strict';

    angular
        .module('TasksManager.authentication')
        .factory('Logout', Logout);

    Logout.$inject = ['$resource', '$location', 'Session'];
    function Logout($resource,$location,Session) {
        return {
            submit: function() {
                return $resource('/logout',{}).save().$promise.then(function(data) {
                    Session.delete_user();
                }, function(data) {
                    console.log('Error: ', data);
                });
            }
        };
    }

})();

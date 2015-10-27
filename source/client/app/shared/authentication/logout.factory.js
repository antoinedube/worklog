(function () {
    'use strict';

    angular
        .module('TasksManager.authentication')
        .factory('Logout', Logout);

    Logout.$inject = ['$resource', '$window', 'Session'];
    function Logout($resource,$window,Session) {
        return {
            submit: function() {
                console.log('Logout.submit() has been called');
                return $resource('/logout',{}).save().$promise.then(function(data) {
                    console.log('Success: ', data);
                    Session.delete_user();
                    $window.location.reload();
                }, function(data) {
                    console.log('Error: ', data);
                });
            }
        };
    }

})();

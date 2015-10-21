(function () {
    'use strict';

    angular
        .module('TasksManager.authentication')
        .factory('Logout', Logout);

    Logout.$inject = ['$resource', '$window'];
    function Logout($resource,$window) {
        return {
            submit: function() {
                console.log('Logout.submit() has been called');
                return $resource('/logout',{}).save().$promise.then(function(data) {
                    console.log('Success: ', data);
                    $window.location.reload();
                }, function(data) {
                    console.log('Error: ', data);
                });
            }
        };
    }

})();

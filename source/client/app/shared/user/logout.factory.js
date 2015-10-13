(function () {
    'use strict';

    angular.module('TasksManager.user-authentication')

    .factory('Logout', ['$resource', function($resource) {
        return {
            submit: function() {
                 return $resource('/logout',{}).save().$promise;
            }
        };
    }]);

})();

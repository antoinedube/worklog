(function () {
    'use strict';

    angular.module('TasksManager.user')

    .factory('Logout', ['BaseResource', function(BaseResource) {
        return {
            submit: function() {
                 return new BaseResource('/logout',{}).save(user).$promise;
            }
        };
    }]);

})();

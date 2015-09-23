'use strict';

angular.module('TasksManager.user')

.factory('Logout', ['BaseResource', function(BaseResource) {
    return {
        submit: function() {
             return BaseResource('/logout',{}).save(user).$promise;
        }
    };
}])



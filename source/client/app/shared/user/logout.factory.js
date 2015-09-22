'use strict';

angular.module('TasksManager.logout', ['TasksManager.base-resource'])

.factory('Logout', ['BaseResource', function(BaseResource) {
    return {
        submit: function() {
             return BaseResource('/logout',{}).save(user).$promise;
        }
    };
}])



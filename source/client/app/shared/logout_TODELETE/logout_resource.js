'use strict';

angular.module('TasksManager.logout', ['ngResource'])

.factory('LogoutResource', ['$resource', function($resource) {
    return $resource('/logout',{});
}])



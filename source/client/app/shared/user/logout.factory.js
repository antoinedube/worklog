'use strict';

angular.module('TasksManager.logout-resource', ['ngResource'])

.factory('LogoutResource', ['$resource', function($resource) {
    return $resource('/logout',{});
}])



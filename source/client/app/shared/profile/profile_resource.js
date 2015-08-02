'use strict';

angular.module('TasksManager.profile-resource', ['ngResource'])

.factory('Profile', ['$resource', function($resource) {
    return $resource('/profile',{});
}]);


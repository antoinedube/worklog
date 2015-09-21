'use strict';

angular.module('TasksManager.profile-resource', ['ngResource'])

.factory('ProfileResource', ['$resource', function($resource) {
    return $resource('/profile',{});
}]);


'use strict';

angular.module('TasksManager.user')

.factory('ProfileResource', ['$resource', function($resource) {
    return $resource('/profile',{});
}]);


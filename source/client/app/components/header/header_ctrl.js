'use strict';

angular.module('TasksManager.header', ['TasksManager.logout'])
.controller('AppHeaderCtrl', ['$scope', 'LogoutResource', function($scope,LogoutResource) {
    $scope.logout = function() {
        LogoutResource.save();
    };
}]);


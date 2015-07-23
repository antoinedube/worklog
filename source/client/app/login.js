'use strict';

// Declare app level module which depends on views, and components
angular.module('TasksManagerLogin', ['ngResource'])
.config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
    $httpProvider.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded; charset=utf-8";
}])
.factory('LoginFactory',['$resource', function ($resource) {
    return $resource('/login',{});
}])
.controller('LoginCtrl',['$scope','LoginFactory',function ($scope,LoginFactory) {
    $scope.is_form_complete = false;

    $scope.user = {
        username: "",
        password: ""
    };

    $scope.connect = function() {
        console.log($scope.user);

        LoginFactory.save($scope.user, function(response) {
            console.log(response);
        }, function (response) {
            console.log('Error: ', response.data);
        });
    };

    $scope.$watch('user.username', function(newValue,oldValue) {
        $scope.is_form_complete = (newValue!=='') ? true:false;
    });

}]);

'use strict';

// Declare app level module which depends on views, and components
angular.module('TasksManagerLogin', ['ngResource'])
.config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
    $httpProvider.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded; charset=utf-8";
}])
.controller('LoginCtrl',['$scope','$resource',function ($scope,$resource) {

}]);

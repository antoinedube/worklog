'use strict';

angular.module('TasksManager.login', ['ui.bootstrap'])

.controller('LoginCtrl', ['$scope', '$modalInstance', function($scope,$modalInstance) {
    $scope.submit = function() {
        $modalInstance.close();
    };

    $scope.cancel = function() {
        $modalInstance.dismiss();
    };

    $scope.open = function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.opened = true;
    };
}]);

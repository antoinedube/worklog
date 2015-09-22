'use strict';

angular.module('TasksManager.user')

.controller('LoginCtrl', ['$scope', '$modalInstance', function($scope,$modalInstance) {
    $scope.user = {
        username: '',
        password: ''
    };

    $scope.is_form_complete = false;

    $scope.submit = function() {
        $modalInstance.close($scope.user);
    };

    $scope.cancel = function() {
        $modalInstance.dismiss();
    };

    $scope.open = function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.opened = true;
    };

    $scope.$watch('user.username', function(newValue,oldValue) {
        $scope.is_form_complete = (newValue!=='') ? true:false;
    });

}]);


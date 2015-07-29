'use strict';

angular.module('TasksManager.login', ['ui.bootstrap'])

.factory('LoginFactory', ['$modal', function($modal) {
    return {
        login: function() {
            return $modal.open({
                    templateUrl: 'task_manager/components/login/login_view.html',
                    controller: 'LoginCtrl',
                    backdrop: 'static',
                    backdropClass: 'fade in',
                    windowClass: 'dropdown-menu-right'
                }).result;
            }
    };
}])

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

'use strict';

angular.module('TasksManager.login', ['ui.bootstrap'])

.factory('LoginResource', ['$resource', function($resource) {
    return $resource('/login',{});
}])

.factory('LoginFactory', ['$modal', function($modal) {
    return {
        login: function() {
            return $modal.open({
                    templateUrl: 'task_manager/shared/login/login_view.html',
                    controller: 'LoginCtrl',
                    backdrop: 'static',
                    backdropClass: 'fade in',
                    windowClass: 'dropdown-menu-right'
                });
            }
    };
}])

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


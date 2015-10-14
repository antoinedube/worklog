(function () {
    'use strict';

    angular.module('TasksManager.user-authentication', ['ui.bootstrap', 'ngResource', 'ngRoute'])

    .factory('Login', Login);

    Login.$inject = ['$resource', '$uibModal'];

    function Login($resource,$uibModal) {
        return {
            submit: function() {
                return $uibModal.open({
                        templateUrl: 'task_manager/shared/user/login.view.html',
                        controller: 'LoginCtrl',
                        backdrop: 'static',
                        backdropClass: 'fade in',
                        windowClass: 'dropdown-menu-right'
                    }).result.then(function(user) {
                       return $resource('/login',{}).save(user).$promise;
                });
            }
        };
    }

})();

(function () {
    'use strict';

    angular
        .module('TasksManager.authentication', ['ui.bootstrap', 'ngResource', 'ngRoute', 'TasksManager.session', 'TasksManager.user'])
        .factory('Login', Login);

    Login.$inject = ['$uibModal'];
    function Login($uibModal) {
        return {
            submit: function() {
                return $uibModal.open({
                        templateUrl: 'task_manager/shared/authentication/login.view.html',
                        controller: 'LoginController',
                        controllerAs: 'vm',
                        backdrop: 'static',
                        backdropClass: 'fade in',
                        windowClass: 'dropdown-menu-right'
                    });
            }
        };
    }
})();

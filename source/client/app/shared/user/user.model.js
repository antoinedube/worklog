(function () {
    'use strict';

    angular.module('TasksManager.user', ['ui.bootstrap', 'TasksManager.base-model'])

    .factory('User', User);

    User.$inject = ['$modal', 'Base'];

    function User($modal) {
/*
        var first_name;
        var last_name;

        get_profile();
*/
        var User = {
 /*           login: login,
            logout: logout,
            first_name: first_name,
            last_name: last_name,*/
            $urlRoot: '/api/users',
            full_name: full_name,
        };

        return User;
/*
        function login() {
            return $modal.open({
                    templateUrl: 'task_manager/shared/user/login.view.html',
                    controller: 'LoginCtrl',
                    backdrop: 'static',
                    backdropClass: 'fade in',
                    windowClass: 'dropdown-menu-right'
                }).result.then(function(user) {
                   return new BaseResource('/login',{}).save(user).$promise;
            });
        }
*/
        function full_name() {
            return 'full name here';
        }
    }
})();


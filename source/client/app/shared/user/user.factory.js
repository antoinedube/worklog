(function () {
    'use strict';

    angular.module('TasksManager.user', ['ui.bootstrap', 'TasksManager.base-resource'])

    .factory('User', User);

    User.$inject = ['$modal', 'BaseResource'];

    function User($modal,BaseResource) {
        var first_name;
        var last_name;

        get_profile();

        var factory = {
            login: login,
            logout: logout,
            first_name: first_name,
            last_name: last_name,
            full_name: full_name,
        };

        return factory;

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

        function logout() {
            return new BaseResource('/logout',{}).save().$promise;
        }

        function get_profile() {
            BaseResource('/profile',{}).get().$promise.then(function(profile) {
                console.log('User profile: ', profile.first_name);
                first_name = profile.first_name;
                last_name = profile.last_name;
            });
        }

        function full_name() {
            return first_name + ' ' + last_name;
        }
    }
})();


(function () {
    'use strict';

    angular.module('TasksManager.user', ['ui.bootstrap', 'TasksManager.base-resource'])

    .factory('User', User);

    User.$inject = ['$modal', 'BaseResource'];

    function User($modal,BaseResource) {
        var factory = {
            login: login,
            logout: logout,
            get_profile: get_profile
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
            return new BaseResource('/profile',{}).get().$promise;
        }
    }
})();


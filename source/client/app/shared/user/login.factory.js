'use strict';

angular.module('TasksManager.login', ['ui.bootstrap', 'TasksManager.BaseResource'])

.factory('Login', ['$modal', 'BaseResource', function($modal,BaseResource) {
    return {
        submit: function() {
            return $modal.open({
                    templateUrl: 'task_manager/shared/login/login_view.html',
                    controller: 'LoginCtrl',
                    backdrop: 'static',
                    backdropClass: 'fade in',
                    windowClass: 'dropdown-menu-right'
                }).result.then(function(user) {
                   return BaseResource('/login',{}).save(user).$promise;
            });
        }
    };
}])

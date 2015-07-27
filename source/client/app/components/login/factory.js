'use strict';

angular.module('TasksManager.login-factory', ['ui.bootstrap'])

.factory('LoginFactory',['$modal', function($modal) {
    return {
        login: function() {
            return $modal.open({
                    templateUrl: 'task_manager/components/login/view.html',
                    controller: 'LoginCtrl',
                    backdrop: 'static',
                    backdropClass: 'fade in',
                    windowClass: 'dropdown-menu-right'
                }).result
            }
        }
}]);

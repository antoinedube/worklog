(function () {
    'use strict';

    angular
        .module('TasksManager.authentication')
        .factory('Logout', Logout);

    Logout.$inject = ['$resource'];
    function Logout($resource) {
        return {
            submit: function() {
                 return $resource('/logout',{}).save().$promise;
            }
        };
    }

})();

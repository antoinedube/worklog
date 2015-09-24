(function () {
    'use strict';

    angular.module('TasksManager', [
        'ngRoute',
        'TasksManager.unauthorized',
        'TasksManager.header',
        'TasksManager.left-menu',
        'TasksManager.home',
        'TasksManager.day-planner',
        'TasksManager.tasks-list',
        'TasksManager.task-view',
        'TasksManager.user'
    ]);


    angular.module('TasksManager')
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/home'});
    }])
    .config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.xsrfCookieName = 'csrftoken';
        $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
        $httpProvider.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded; charset=utf-8";

        $httpProvider.interceptors.push('UnauthorizedInterceptor');
    }]);

})();

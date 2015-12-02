(function () {
    'use strict';

    angular.module('TasksManager', [
        'ngRoute',
        'ngAnimate',
        'TasksManager.header',
        'TasksManager.left-menu',
        'TasksManager.home',
        'TasksManager.login-page',
        'TasksManager.day-planner',
        'TasksManager.tasks-list',
        'TasksManager.task-view'
    ]);


    angular.module('TasksManager')
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/home'});
    }])
    .config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.xsrfCookieName = 'csrftoken';
        $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
        $httpProvider.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded; charset=utf-8";
    }]);

})();

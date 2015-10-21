(function () {
    'use strict';

    angular.module('TasksManagerLogin', [
            'ngResource'
    ]);


    angular.module('TasksManagerLogin')
    .config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.xsrfCookieName = 'csrftoken';
        $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
        $httpProvider.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded; charset=utf-8";
    }])

    .directive('frontPageLogin', FrontPageLogin);

    function FrontPageLogin() {
        var directive =  {
            controller: FrontPageLoginController,
            bindToController: true,
            controllerAs: 'vm',
            link: FrontPageLoginLink,
            replace: true,
            restrict: 'EA',
            scope: {},
            template: '<div id="login-page" class="container">' +
                      '    <h2 class="text-center">Connexion</h2>' +
                      '    <form ng-submit="vm.submit()">' +
                      '        <div class="form-group">' +
                      '            <input type="text" class="form-control" id="login-email" placeholder="Courriel" ng-model="vm.user.username" autofocus>' +
                      '        </div>' +
                      '        <div class="form-group">' +
                      '            <input type="password" class="form-control" id="login-password" placeholder="Mot de passe" ng-model="vm.user.password">' +
                      '        </div>' +
                      '        <button type="submit" class="btn btn-primary btn-block">Connexion</button>' +
                      '    </form>' +
                      '    <div id="login-message" class="text-center">{{vm.login_message}}</div>' +
                      '</div>'
        };

        return directive;
    }

    FrontPageLoginController.$inject = ['$resource', '$window'];
    function FrontPageLoginController($resource, $window) {
        var vm = this;
        vm.user = {};
        vm.login_message = 'Message initial';

        vm.submit = submit;

        /* ---------- */

        function submit() {
            console.log('User: ', vm.user);
            $resource('/login',{})
                .save(vm.user).$promise
                .then(function(data) {
                    console.log('Success: ', data);
                    vm.login_message = 'Connexion réussie';
                    $window.location.reload();
                }, function(data) {
                    console.log('Error: ', data);
                    vm.login_message = 'Connexion refusée'
                    console.log('login message: ', vm.login_message);
                });
        }
    }

    function FrontPageLoginLink(scope, element, attrs, vm) {
    }

})();

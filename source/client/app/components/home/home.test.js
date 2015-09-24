(function () {
    'use strict';

    describe('TasksManager.home module', function() {
        var $scope;
        var home_ctrl;
        var mock_ProfileFactory;

        beforeEach(module('TasksManager.home'));

        beforeEach(module(function($provide) {
            mock_ProfileFactory = {
                get: jasmine.createSpy
            };
            $provide.value('ProfileFactory',mock_ProfileFactory);
        }));

        beforeEach(inject(function($rootScope,$controller) {
            $scope = $rootScope.$new();
            home_ctrl = $controller('HomeCtrl',{$scope: $scope});
        }));

        it('should be defined',function() {
            expect(home_ctrl).toBeDefined();
        });

    });
})();

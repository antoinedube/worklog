'use strict';

describe('TasksManager.home module', function() {
    var $scope;
    var home_ctrl;

    beforeEach(module('TasksManager.home'));

    beforeEach(inject(function($rootScope,$controller) {
        $scope = $rootScope.$new();
        home_ctrl = $controller('HomeCtrl',{$scope: $scope});
    }));

    // Need to mock ProfileFactory
    xit('should be defined',function() {
        expect(home_ctrl).toBeDefined();
    });

});

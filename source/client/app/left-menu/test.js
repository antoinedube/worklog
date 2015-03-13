'use strict';

describe('TasksManager.left-menu module', function() {
    var scope;
    var LeftMenuCtrl;

    beforeEach(function() {
        module('TasksManager.left-menu');
        inject(function($controller,$rootScope) {
            scope = $rootScope.$new();
            LeftMenuCtrl = $controller('LeftMenuCtrl',{$scope:'scope'});
        });
    });

    it('should be defined on creation', function() {
        expect(LeftMenuCtrl).toBeDefined();
    });

});

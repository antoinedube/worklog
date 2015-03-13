'use strict';

describe('TasksManager.tasks-list module', function() {
    var scope;
    var TasksListCtrl;

    beforeEach(function() {
        module('TasksManager.tasks-list');
        inject(function($controller,$rootScope) {
            scope = $rootScope.$new();
            TasksListCtrl = $controller('TasksListCtrl',{$scope:'scope'});
        });
    });

    it('should be defined on creation', function() {
        expect(TasksListCtrl).toBeDefined();
    });
});


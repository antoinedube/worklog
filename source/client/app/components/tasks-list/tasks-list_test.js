'use strict';

describe('TasksManager.tasks-list module', function() {
    var $scope;
    var tasks_list_ctrl;
    var mock_modal;
    var mock_task_factory;

    beforeEach(module('TasksManager.tasks-list'));

    beforeEach(module(function($provide) {
        mock_task_factory = {
            save: jasmine.createSpy(),
            query: jasmine.createSpy()
        };
        $provide.value('Task',mock_task_factory);

        mock_modal = {
            open: jasmine.createSpy() 
        };
        $provide.value('$modal',mock_modal);
    }));

    beforeEach(inject(function($rootScope,$controller) {
        $scope = $rootScope.$new();
        tasks_list_ctrl = $controller('TasksListCtrl',{$scope: $scope});
    }));

    it('should be defined on controller creation', function() {
        expect(tasks_list_ctrl).toBeDefined();
    });

    xit('should query all tasks on controller creation', function() {
        expect(mock_task_factory.query).toHaveBeenCalled();
    });

    xit('should open a modal upon task creation', function() {
        // Must mock modal as a promise
        $scope.createNew();
        expect(mock_modal.open).toHaveBeenCalled();
    });

});


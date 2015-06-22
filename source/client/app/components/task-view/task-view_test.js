'use strict';

describe('TasksManager.task-view module', function() {
    var $scope;
    var task_view_ctrl;
    var mock_modal;
    var mock_task_factory;

    beforeEach(module('TasksManager.task-view'));

    beforeEach(module(function($provide) {
        mock_task_factory = {
            get: jasmine.createSpy()
        };
        $provide.value('Task',mock_task_factory);

        mock_modal = {
            open: function() {
                return {
                    result: {
                        then: function() {}
                    }
                };
            }
        };
        spyOn(mock_modal,'open').and.callThrough();
        $provide.value('$modal',mock_modal);
    }));

    beforeEach(inject(function($rootScope,$controller) {
        $scope = $rootScope.$new();
        task_view_ctrl = $controller('TaskViewCtrl',{$scope: $scope});
    }));

    it('should be defined on controller creation', function() {
        expect(task_view_ctrl).toBeDefined();
    });
});


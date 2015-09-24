(function () {
    'use strict';

    describe('TasksManager.tasks-list module', function() {
        var $scope;
        var tasks_list_ctrl;
        var mock_modal;
        var mock_task;

        beforeEach(module('TasksManager.tasks-list'));

        beforeEach(module(function($provide) {
            mock_task = {
                create: function() {},
                all: function() {}
            };
            spyOn(mock_task,'create').and.returnValue({then: function() {}});
            spyOn(mock_task, 'all').and.returnValue(['']);

            $provide.value('Task',mock_task);
        }));

        beforeEach(inject(function($rootScope,$controller) {
            $scope = $rootScope.$new();
            tasks_list_ctrl = $controller('TasksListCtrl',{$scope: $scope});
        }));

        it('should be defined on controller creation', function() {
            expect(tasks_list_ctrl).toBeDefined();
        });

        it('should query all tasks on controller creation', function() {
            expect(mock_task.all).toHaveBeenCalled();
        });

        it('should call Task.create when creating a new task', function() {
            $scope.create_new();
            expect(mock_task.create).toHaveBeenCalled();
        });
    });
})();

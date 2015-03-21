'use strict';

describe('TasksManager.tasks-list module', function() {
    var $scope;
    var TasksListCtrl;
    var mock_task_factory;

    beforeEach(module('TasksManager.task-model', function($provide) {
        mock_task_factory = {
            save: jasmine.createSpy(),
            query: jasmine.createSpy()
        };

        $provide.value('Task', mock_task_factory);
    }));

    beforeEach(module('TasksManager.tasks-list'));

    beforeEach(inject(function($controller) {
        $scope = {};
        TasksListCtrl = $controller('TasksListCtrl', {$scope: $scope});
    }));

    it('should be defined on controller creation', function() {
        expect(TasksListCtrl).toBeDefined();
    });

    it('should query all tasks on controller creation', function() {
        expect(mock_task_factory.query).toHaveBeenCalled();
    });

    it('should save object on task creation', function() {
        $scope.create();
        expect(mock_task_factory.save).toHaveBeenCalled();
    });
});


'use strict';

describe('TasksManager.tasks-list module', function() {
    var scope;
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

    beforeEach(inject(function($controller,$rootScope) {
            // Should not use rootScope
            // http://stackoverflow.com/questions/18385842/angular-karma-test-getting-typeerror-undefined-is-not-a-function-on-a-scop
            scope = $rootScope.$new();
            TasksListCtrl = $controller('TasksListCtrl',{$scope:'scope'});
        }));

    it('should be defined on creation', function() {
        expect(TasksListCtrl).toBeDefined();
    });
});


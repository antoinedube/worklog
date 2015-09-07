'use strict';

describe('TasksManager.tasks-model module', function() {
    beforeEach(module('TasksManager.task-model'));

    it('should be valid', inject(function(Task) {
        expect(Task).toBeDefined() ;
    }));
});


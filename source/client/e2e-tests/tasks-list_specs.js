'use strict';

describe('TasksManager tasks-list behavior', function() {

    beforeEach(function() {
        browser.get('#/tasks-list');
    });

    it('should automatically redirect to /tasks-list after navigation', function() {
        expect(browser.getLocationAbsUrl()).toMatch("/tasks-list");
    });

    it('should display the tasks-list page', function() {
        browser.findElement(by.id('main-view')).getText().then(function(text) {
            expect(text).toMatch(/^Tâches/);
        });
    });
});


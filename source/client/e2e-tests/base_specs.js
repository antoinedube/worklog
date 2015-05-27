'use strict';

describe('TasksManager basic behavior', function() {

    beforeEach(function() {
        browser.get('#/');
    });

    it('should automatically redirect to /home when location hash/fragment is empty', function() {
        expect(browser.getLocationAbsUrl()).toMatch("/home");
    });

    it('should display the name of the application in the window title', function() {
        expect(browser.getTitle()).toEqual('Organisateur de tâches');
    });

    it('should display the home page', function() {
        browser.findElement(by.id('main-view')).getText().then(function(text) {
            expect(text).toEqual('Home');
        });
    });
});


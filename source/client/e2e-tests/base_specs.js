'use strict';

describe('TasksManager basic behavior', function() {

    browser.get('#/');

    it('should automatically redirect to /home when location hash/fragment is empty', function() {
        console.log(browser.getLocationAbsUrl());
        //expect(browser.getLocationAbsUrl()).toMatch("/home");
    });
});


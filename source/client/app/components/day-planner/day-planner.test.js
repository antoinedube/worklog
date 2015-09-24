(function () {
    'use strict';

    describe('TasksManager.day-planner module', function() {
        var scope;
        var DayPlannerCtrl;

        beforeEach(function() {
            module('TasksManager.day-planner');
            inject(function($controller,$rootScope) {
                scope = $rootScope.$new();
                DayPlannerCtrl = $controller('DayPlannerCtrl',{$scope:'scope'});
            });
        });

        it('should be defined on creation', function() {
            expect(DayPlannerCtrl).toBeDefined();
        });

    });
})();

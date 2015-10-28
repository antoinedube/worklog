(function () {
    'use strict';

    angular
        .module('TasksManager.day-planner')
        .controller('DayPlannerCtrl', DayPlannerCtrl);

    DayPlannerCtrl.$inject = ['Task'];
    function DayPlannerCtrl(Task) {
        var vm = this;
        vm.duration = 3;

        vm.working_hours = [];
        for (var hour = 5 ; hour<23 ; hour++) vm.working_hours.push(String(hour) + 'h');

        console.log('Working hours: ', vm.working_hours);
    }
})();

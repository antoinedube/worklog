(function () {
    'use strict';

    angular
        .module('TasksManager.task')
        .controller('NewTaskCtrl', NewTaskCtrl);

    NewTaskCtrl.$inject = ['$modalInstance'];
    function NewTaskCtrl($modalInstance) {
        var vm = this;
        vm.create = create;
        vm.cancel = cancel;

        /* ---------- */

        function create(task) {
            $modalInstance.close(task);
        }

        function cancel() {
            $modalInstance.dismiss();
        }

    }
})();


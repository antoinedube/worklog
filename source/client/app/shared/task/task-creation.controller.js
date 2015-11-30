(function () {
    'use strict';

    angular
        .module('TasksManager.task')
        .controller('NewTaskController', NewTaskCtrl);

    NewTaskCtrl.$inject = ['$uibModalInstance'];
    function NewTaskCtrl($uibModalInstance) {
        var vm = this;
        vm.create = create;
        vm.cancel = cancel;

        /* ---------- */

        function create(task) {
            $uibModalInstance.close(task);
        }

        function cancel() {
            $uibModalInstance.dismiss();
        }

    }
})();


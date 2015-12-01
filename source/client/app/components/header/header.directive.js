(function () {
  'use strict';

  angular
    .module('TasksManager.header', ['TasksManager.session', 'TasksManager.authentication'])
    .directive('header', Header);

  function Header() {
    var directive = {
      controller: HeaderController,
      bindToController: true,
      controllerAs: 'vm',
      replace: true,
      restrict: 'EA',
      scope: {},
      templateUrl: 'task_manager/components/header/header.view.html'
    };

    return directive;
  }

  HeaderController.$inject = ['Session', 'Logout'];
  function HeaderController(Session, Logout) {
    var vm = this;

    vm.session = Session;
    vm.logout = Logout;
  }
})();


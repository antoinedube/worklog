(function () {
  'use strict';

  angular
    .module('TasksManager.left-menu', ['TasksManager.session'])
    .directive('leftMenu', LeftMenu);

  function LeftMenu() {
    return {
      controller: LeftMenuController,
      bindToController: true,
      controllerAs: 'vm',
      link: LeftMenuLink,
      replace: false,
      restrict: 'EA',
      templateUrl: 'task_manager/components/left-menu/left-menu.view.html'
    };
  }

  LeftMenuController.$inject = ['$location', 'Session'];
  function LeftMenuController($location, Session) {
    var vm = this;
    vm.items = [
      {'name': 'Accueil', 'route': '#/home', 'icon': 'fa-home'},
      {'name': 'Aujourd\'hui', 'route': '#/today', 'icon': 'fa-angle-double-down'},
      {'name': 'Cette semaine', 'route': '#/this-week', 'icon': 'fa-calendar'},
      {'name': 'Tâches', 'route': '#/tasks-list', 'icon': 'fa-tasks'}
    ];

    vm.is_active = function(viewLocation) {
      return (viewLocation === '#'+$location.path());
    };

    vm.session = Session;
  }

  function LeftMenuLink(scope, element, attrs, vm) {
  }

})();

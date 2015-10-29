(function () {
  'use strict';

  angular
    .module('TasksManager.task', ['ui.bootstrap', 'ngResource'])
    .factory('Task', Task)
    .factory('FilteredTask', FilteredTask);

  Task.$inject = ['$resource'];
  function Task($resource) {
    return $resource('/api/tasks/:task_id');
  }

  FilteredTask.$inject = ['$resource'];
  function FilteredTask($resource) {
    return $resource('/api/tasks/:filter');
  }
})();


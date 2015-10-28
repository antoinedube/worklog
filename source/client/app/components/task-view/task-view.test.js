(function () {
  'use strict';

  describe('TasksManager.task-view module', function() {
    var $scope;
    var task_view_ctrl;
    var mock_task_factory;

    beforeEach(module('TasksManager.task-view'));

    beforeEach(inject(function($rootScope,$controller) {
      $scope = $rootScope.$new();
      task_view_ctrl = $controller('TaskViewCtrl',{$scope: $scope});
    }));

    it('should be defined on controller creation', function() {
      expect(task_view_ctrl).toBeDefined();
    });
  });
})();

(function () {
  'use strict';

  describe('TasksManager.tasks-list module', function() {
    var $scope;
    var tasks_list_ctrl;
    var mock_modal;
    var mock_task;
    var mock_task_factory;

    beforeEach(module('TasksManager.tasks-list'));

    beforeEach(module(function($provide) {
      mock_task = {
        query: function() {}
      };
      spyOn(mock_task, 'query').and.returnValue({
          $promise: {
            then: function() {}
          }
      });
      $provide.value('Task', mock_task);

      mock_task_factory = {
        create: function() {},
      }
      spyOn(mock_task_factory, 'create').and.returnValue({
        then: function() {}
      });
      $provide.value('TaskFactory', mock_task_factory);
    }));

    beforeEach(inject(function($rootScope,$controller) {
      $scope = $rootScope.$new();
      tasks_list_ctrl = $controller('TasksListController',{$scope: $scope});
    }));

    it('should be defined on controller creation', function() {
      expect(tasks_list_ctrl).toBeDefined();
    });

    it('should query all tasks on controller creation', function() {
      expect(mock_task.query).toHaveBeenCalled();
    });

    it('should call Task.create when creating a new task', function() {
      tasks_list_ctrl.create_new();
      expect(mock_task_factory.create).toHaveBeenCalled();
    });
  });
})();

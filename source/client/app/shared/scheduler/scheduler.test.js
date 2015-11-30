(function () {
  'use strict';

  describe('TasksManager.task module', function() {
    var mock_filtered_task;

    beforeEach(
      module('TasksManager.task')
    );

    beforeEach(
      module(function($provide) {
        mock_filtered_task = {
          get: function() {}
        };

        spyOn(mock_filtered_task, 'get').and.returnValue({});

        $provide.value('FilteredTask', mock_filtered_task);
      })
    );

    it('should be valid', inject(function(Scheduler) {
      expect(Scheduler).toBeDefined() ;
    }));
  });

})();

(function () {
  'use strict';

  describe('TasksManager.task-model module', function() {
    beforeEach(module('TasksManager.task'));

    it('should be valid', inject(function(Task) {
      expect(Task).toBeDefined() ;
    }));
  });

})();

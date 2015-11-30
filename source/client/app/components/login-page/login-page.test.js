(function () {
  'use strict';

  describe('TasksManager.login-page module', function() {
    var $scope;
    var login_page_ctrl;

    beforeEach(module('TasksManager.login-page'));

    beforeEach(inject(function($rootScope,$controller) {
      $scope = $rootScope.$new();
      login_page_ctrl = $controller('LoginPageController',{$scope: $scope});
    }));

    it('should be defined on controller creation', function() {
      expect(login_page_ctrl).toBeDefined();
    });

  });
})();

'use strict';

describe('Controller: MailsCtrl', function () {

  // load the controller's module
  beforeEach(module('testApp'));

  var MailsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MailsCtrl = $controller('MailsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});

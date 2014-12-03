'use strict';

describe('Directive: myMail', function () {

  // load the directive's module and view
  beforeEach(module('testApp'));
  beforeEach(module('app/myMail/myMail.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<my-mail></my-mail>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the myMail directive');
  }));
});
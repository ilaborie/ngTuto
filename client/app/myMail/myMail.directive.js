'use strict';

angular.module('testApp')
  .directive('myMail', function () {
    return {
      templateUrl: 'app/myMail/myMail.html',
      scope: {
        mail: '='
      },
      restrict: 'E'
    };
  });

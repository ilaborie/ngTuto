'use strict';

angular.module('testApp')
  .controller('ComposeCtrl', function ($scope, $routeParams) {
    $scope.mail = {
      to: $routeParams.to,
      subject: $routeParams.subject,
      body: null
    };

    $scope.sendMail = function () {
      console.log(JSON.stringify($scope.mail));
    }
  });

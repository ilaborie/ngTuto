'use strict';

angular.module('testApp')
  .controller('MailsCtrl', function ($scope, $http) {
    $scope.mails = [];
    $http.get("api/mails").success(function (mails) {
      $scope.mails = mails;
    });
  });

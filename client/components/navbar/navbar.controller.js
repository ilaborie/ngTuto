'use strict';

angular.module('testApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [
      {'title': 'Home', 'link': '/'},
      {'title': 'Compose', 'link': '/compose'}
    ];

    $scope.isCollapsed = true;

    $scope.isActive = function (route) {
      return route === $location.path();
    };
  });

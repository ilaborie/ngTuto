'use strict';

angular.module('testApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/compose', {
        templateUrl: 'app/compose/compose.html',
        controller: 'ComposeCtrl'
      });
  });

'use strict';

angular.module('testApp')
  .filter('fromNow', function (moment) {
    return function (input) {
      return moment(input).fromNow();
    };
  });

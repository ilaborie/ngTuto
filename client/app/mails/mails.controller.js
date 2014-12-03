'use strict';

angular.module('testApp')
  .controller('MailsCtrl', function ($scope) {
    $scope.mail = {
      "_id": {
        "str": "547f7be6a82a8395b89744dd"
      },
      "from": "bflores0@creativecommons.org",
      "date": "2014-11-05T00:16:05Z",
      "subject": "ut massa volutpat",
      "body": "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
      "star": null,
      "attachment": null,
      "folder": "inbox"
    };
  });

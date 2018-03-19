/**
 * Created by sasangachathumal on 3/19/18.
 */
angular.module('practeraChat.groupListCtrl', [])

  .controller('groupListCtrl', function ($scope, Chats) {
    $scope.items = Chats.all();
  });

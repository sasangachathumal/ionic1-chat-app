/**
 * Created by sasangachathumal on 3/19/18.
 */
angular.module('practeraChat.chatListCtrl', [])

  .controller('chatListCtrl', function ($scope, Chats) {
    $scope.items = Chats.all();
  });

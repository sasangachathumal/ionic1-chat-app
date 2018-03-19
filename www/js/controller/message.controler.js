/**
 * Created by sasangachathumal on 3/19/18.
 */
angular.module('practeraChat.messageCtrl', [])

  .controller('messageCtrl', function ($scope, $stateParams, Chats, $ionicHistory, $ionicActionSheet) {
    $scope.chat = Chats.get($stateParams.chatId);

    $scope.myGoBack = function () {
      $ionicHistory.goBack();
    };

    $scope.showActionSheet = function () {

      // Show the action sheet
      var hideSheet = $ionicActionSheet.show({
        buttons: [
          {text: '<b>Share</b> This'},
          {text: 'Move'}
        ],
        destructiveText: 'Delete',
        titleText: 'Modify your album',
        cancelText: 'Cancel',
        cancel: function () {
          // add cancel code..
        },
        buttonClicked: function (index) {
          return true;
        }
      });
    };

  });

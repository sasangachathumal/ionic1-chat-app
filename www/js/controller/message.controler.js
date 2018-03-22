/**
 * Created by sasangachathumal on 3/19/18.
 */
angular.module('practeraChat.messageCtrl', [])

  .controller('messageCtrl', function ($scope, $location, $ionicHistory, $ionicPopup, $ionicPopover) {

    $scope.chatType = $location.search()['type'].toString();
    $scope.chatType = $scope.chatType.replace(/'/g, '');

    $scope.myGoBack = function () {
      $ionicHistory.goBack();
    };

    $scope.editGroupName = function () {
      $scope.data = {};
      var myPopup = $ionicPopup.show({
        template: '<div class="list practera-forms"><label class="item item-input"><input type="text" value="Current name"></label></div>',
        title: 'Change Group Name',
        scope: $scope,
        buttons: [
          {text: 'Cancel'},
          {
            text: 'Save',
            type: 'button-calm',
            onTap: function (e) {
              if (!$scope.data.wifi) {
                //don't allow the user to close unless he enters wifi password
                e.preventDefault();
              } else {
                return $scope.data.wifi;
              }
            }
          }
        ]
      });
    };

    var editGroupPhotoPopup;

    $scope.closeEditGroupPhoto = function () {
      editGroupPhotoPopup.close();
    };

    $scope.editGroupPhoto = function () {
      $scope.data = {};
      editGroupPhotoPopup = $ionicPopup.show({
        templateUrl: 'templates/group/image-edit-popup.html',
        title: 'Change Group Photo',
        scope: $scope,
        buttons: [
          {text: 'Cancel'}
        ]
      });
    };

    $ionicPopover.fromTemplateUrl('templates/chat/popover.html', {
      scope: $scope
    }).then(function (popover) {
      $scope.popover = popover;
    });

    $scope.openPopover = function ($event) {
      $scope.popover.show($event);
    };
    $scope.closePopover = function () {
      $scope.popover.hide();
    };
    //Cleanup the popover when we're done with it!
    $scope.$on('$destroy', function () {
      $scope.popover.remove();
    });
    // Execute action on hidden popover
    $scope.$on('popover.hidden', function () {
      // Execute action
    });
    // Execute action on remove popover
    $scope.$on('popover.removed', function () {
      // Execute action
    });

  });

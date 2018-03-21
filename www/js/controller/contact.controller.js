/**
 * Created by sasangachathumal on 3/21/18.
 */
angular.module('practeraChat.contactListCtrl', [])

  .controller('contactListCtrl', function ($scope, Chats, $stateParams, $ionicHistory) {
    $scope.items = Chats.all();

    $scope.view = $stateParams.viewName;

    $scope.myGoBack = function () {
      $ionicHistory.goBack();
    };

  });

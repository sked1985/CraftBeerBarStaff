angular.module('starter.controllers', [])

.controller('OrdersCtrl', function($scope, $ionicLoading, MenuService) {


        //Loading icon until orders are shown
        $ionicLoading.show({
          template: '<span class="icon spin ion-loading-d"></span> Loading Orders'
        })

        //This displays the menu on the order page
            $scope.menu = MenuService.$asArray();
            $scope.menu.$loaded().then(function () {
              $ionicLoading.hide();
            });


})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
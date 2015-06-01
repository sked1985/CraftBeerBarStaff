angular.module('starter.controllers', [])

.controller('OrdersCtrl', function($scope, $ionicLoading, $ionicListDelegate, OrdersService) {


        //Loading icon until orders are shown
        $ionicLoading.show({
          template: '<span class="icon spin ion-loading-d"></span> Loading Orders'
        })

        //This displays the menu on the order page
            $scope.orders = OrdersService.$asArray();
            $scope.orders.$loaded().then(function () {
              $ionicLoading.hide();
            });

            $scope.remove = function (index) {
             $scope.order.item.splice(index, 1);
           };

})

.controller('ReservationsCtrl', function($scope, Chats) {
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

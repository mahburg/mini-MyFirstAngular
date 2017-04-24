angular.module('friendsList').controller('mainCtrl', function ($scope) {
  $scope.test = "Buongiorno principessa!"
  $scope.newFriend;
  $scope.friends = ['Andy', 'Brenden', 'Sandra', 'Summer', 'Kyle', 'Britta'];
  $scope.click = function () {
    $scope.friends.push($scope.newfriend);
  }
});

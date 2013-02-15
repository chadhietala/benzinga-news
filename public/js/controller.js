function AppCtrl($scope, socket){
  $scope.articles = [];
  count = 0;
  
  $scope.newArticle = function(data){
    if ($scope.articles.length < 1){
      $scope.articles.push(data);
    } else{
      $scope.count = ++count
    }
  }
  socket.on('new:article', function(data){
    $scope.newArticle(data);
  });
}
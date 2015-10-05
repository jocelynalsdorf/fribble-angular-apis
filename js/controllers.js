


app.controller("AppCtrl", function AppCtrl($scope) {
  $scope.name = "Module";
});

app.controller("ShotsListCtrl", function ShotsListCtrl($scope, $http) {
  $scope.list;

  $http.get('https://api.dribbble.com/v1/shots?access_token=fc78dd533521b380630460a261a96967c0312a75ebfd4492d83f87a5654188b6').success(function(data){
    $scope.list = data;
     console.log(data);
  });
});

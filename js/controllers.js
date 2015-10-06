


app.controller("AppCtrl", function AppCtrl($scope) {
  $scope.name = "Module";
});

app.controller("ShotsListCtrl", function ShotsListCtrl($scope, $http, $routeParams) {
  var list =  $routeParams.list;

  $http.get('https://api.dribbble.com/v1/shots/?list=' + list +'&access_token=e348fac8697cca93da8077ca25156265785479e8b9f35425b4369cbd3ddf4a89').success(function(data){
    $scope.list = data;
     // console.log(data);
  });
});

app.controller("ShotsCtrl", function ShotsListCtrl($scope, $routeParams, $http) {
  var id = $routeParams.id
  $http.get('https://api.dribbble.com/v1/shots/' + id + '?access_token=e348fac8697cca93da8077ca25156265785479e8b9f35425b4369cbd3ddf4a89').success(function(data){
    $scope.shot = data;
  // console.log(data);
  });

  $http.get('https://api.dribbble.com/v1/shots/' + id + '/comments?access_token=e348fac8697cca93da8077ca25156265785479e8b9f35425b4369cbd3ddf4a89').success(function(data){
    $scope.comments = data;
    
  console.log(data);
  });

});
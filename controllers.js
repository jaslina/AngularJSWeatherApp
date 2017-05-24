

//CONTROLLERS

weatherApp.controller("homeController",['$scope','$location','cityNameService',function($scope,$location,cityNameService){
  $scope.city =cityNameService.cityName;
  $scope.$watch('city',function(){
    cityNameService.cityName = $scope.city;
  });
  $scope.submit = function(){
    $location.path ("/forecast") ;
  };

}]);


weatherApp.controller("forecastController",['$routeParams','$scope','cityNameService','$resource','$http','$filter','$sce',function($routeParams,$scope,cityNameService,$resource,$http,$filter,$sce){
  $scope.city = cityNameService.cityName
  $scope.days = $routeParams.days || 2;
  console.log("days : "+$scope.days);

  var promise1 = $http.jsonp($sce.trustAsResourceUrl("http://api.openweathermap.org/data/2.5/forecast/daily?id=524901&appid=fa54acb84e5233f664e2e1d04fa16f94&q="+$scope.city+"&cnt="+$scope.days));
  $scope.weatherResult = promise1.then(function(response){
    return response.data;
  });


  console.log($scope.weatherResult);


  $scope.convertToK = function(deg){
    return Math.round((1.8*(deg -273))+32 );
  };
  $scope.convertToDate= function(date){
    return new Date(date * 1000);
  }

}]);

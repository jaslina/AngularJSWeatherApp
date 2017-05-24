//DIRECTIVES

weatherApp.directive("weatherReport",function(){
  return {
    restrict: 'AECM',
    templateUrl:'directives/weatherReport.html',
    replace:true,
    scope:{
      weatherOfDay:"=",
      convertToKelvin:"&",
      convertToDateFormat:"&",
      dateFormat:"@"
    }
  }
});

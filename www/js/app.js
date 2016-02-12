(function() {
  var app = angular.module('starter', ['ionic']);

  app.controller('MainCtrl', function ($scope, $http) {
    $http.get('https://happy-scour-api.herokuapp.com/')
      .success(function(res){
        $scope.message = res.message;
      });

  });

  app.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  });
}());

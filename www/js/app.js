(function() {
  var app = angular.module('HappyScour', ['ionic']);

  //app.controller('MainCtrl', function ($scope, $http) {
  //  $http.get('https://happy-scour-api.herokuapp.com/')
  //    .success(function(res){
  //      $scope.message = res.message;
  //    });
  //
  //});

  app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/')

    $stateProvider.state('home', {
      url: '/home',
      views: {
        home: {
          templateUrl: 'home.html'
        }
      }
    });

    $stateProvider.state('help', {
      url: '/help',
      views: {
        help: {
          templateUrl: 'help.html'
        }
      }
    });
  });

  app.controller('SpotsCtrl', function ($scope, $http) {
    $scope.spots = [];
    $scope.getAllSpots = function() {
      $http.get('https://happy-scour-api.herokuapp.com/spots')
        .success(function(res) {
          $scope.spots = res;
        })
        .error(function(res) {
          alert("Error fetching all spots!");
        });
    }
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

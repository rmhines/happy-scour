(function() {
  var app = angular.module('HappyScour', ['ionic']);

  app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider.state('home', {
      url: '/home',
      views: {
        home: {
          templateUrl: 'home.html',
          controller: 'HomeCtrl'
        }
      }
    })

    .state('spot', {
      url: '/spots/:spotId',
      views: {
        spot: {
          templateUrl: 'spot.html',
          controller: 'SpotCtrl'
        }
      }
    })

    .state('add', {
      url: '/add',
      views: {
        add: {
          templateUrl: 'add.html'
        }
      }
    });
  });

  app.controller('HomeCtrl', function ($scope, $http) {
    $scope.spots = [];
    $scope.getAllSpots = function() {
      $http.get('https://happy-scour-api.herokuapp.com/spots')
        .success(function(res) {
          $scope.spots = res;
        })
        .error(function(res) {
          alert("Error fetching all spots!");
        });
    };
  });

  app.controller('SpotCtrl', function ($scope, $stateParams) {

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

var myShoppingApp = angular.module('myShoppingApp', ['ngRoute', 'ngAnimate']);

myShoppingApp.config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/home', {
      templateUrl: 'views/home.html',
      controller:'ShoppingController'
    })
    .when('/login', {
      templateUrl: 'views/login.html'

      })
    .when('/directory', {
      templateUrl: 'views/directory.html',
      controller: 'ShoppingController'
    }).otherwise({
      redirectTo: '/home'
    });

}]);

myShoppingApp.directive('randomItem', [function(){

  return {
    restrict: 'E',
    scope: {
      items: '=',
      title: '='
    },
    templateUrl: 'views/random.html',
    transclude: true,
    replace:true,
    controller: function($scope){
      $scope.random = Math.floor(Math.random() * 4);
    }
  };

}]);

myShoppingApp.controller('ShoppingController', ['$scope', '$http', function($scope, $http){

  $scope.removeItem = function(item){
    var removedItem = $scope.items.indexOf(item);
    $scope.items.splice(removedItem,1)
  }

  $scope.addItem = function(){
    $scope.items.push({
      name: $scope.newitem.name,
      colour: $scope.newitem.colour,
      price: parseInt($scope.newitem.price),
      available: true
    });

    $scope.newitem.name="";
    $scope.newitem.colour="";
    $scope.newitem.price="";

  };

  $scope.removeAll = function(){
      $scope.items = [];
  };

  $http.get('data/items.json').then(function(response){
    $scope.items = response.data;

  });

}]);

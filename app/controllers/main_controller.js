var pizza_doh = angular.module('pizza_doh', []);

pizza_doh.controller('main', function ($scope) {
  console.log('getting types')
  $scope.types = [
    {'name': 'Thin', code: 'thin', 'ratio': 65},
    {'name': 'New York', code: 'nyc', 'ratio': 67},
    {'name': 'Pan', code: 'pan', 'ratio': 70}
  ];
});

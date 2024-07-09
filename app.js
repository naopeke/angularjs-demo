var app = angular.module('myApp', []);

app.controller('MyController', ['$scope', function($scope){
    $scope.name = 'Jane Doe';
    $scope.age = 28;
}])
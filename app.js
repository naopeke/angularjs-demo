var app = angular.module('myApp', []);

app.controller('MyController', ['$scope', function($scope){
    $scope.firstname = 'Nao';
    $scope.lastname = 'Mukai';
    $scope.fullname = function(){
        return $scope.firstname + " " + $scope.lastname
    };
    $scope.isSpy = true;
    $scope.codename = 'Naopeke'
}])
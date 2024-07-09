var app = angular.module('myApp', []);

app.controller('MyController', ['$scope', function($scope){
   $scope.reviews = [
    {
        comment: 'Awsome',
        by: 'Nao'
    },
    {
        comment: 'Fantastic',
        by: 'Jane'
    },
    {
        comment: 'Excelent',
        by: 'John'
    },
   ]
}])
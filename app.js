var app = angular.module('myApp', []);

app.controller('MyController', ['$scope', function($scope){
    $scope.employees = [
        {
            fname: 'Nao',
            lname: 'Mukai',
            salary: 20000
        },
        {
            fname: 'John',
            lname: 'Doe',
            salary: 50000
        },
        {
            fname: 'Jane',
            lname: 'Doen',
            salary: 40000
        },
    ];
}])
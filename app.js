var app = angular.module('myApp', []);

app.controller('MyController', ['$scope', function($scope){
    $scope.form = {};

    $scope.addReview = function(){
        $scope.reviews.push($scope.form);
        $scope.form ={};
    }

   $scope.reviews = [
    {
        comment: 'Awsome',
        by: 'Nao@example.com'
    },
    {
        comment: 'Fantastic',
        by: 'Jane@example.com'
    },
    {
        comment: 'Excelent',
        by: 'John@example.com'
    },
   ]
}]);

//これを追加すると、index.htmlは<userinformation></userinformation>が可能になる
app.directive('userinformation', function(){
    return {
        restrict: 'E',
        templateUrl: 'userinfo.html'
    };
})

app.directive('userinformation', function(){
    return {
        restrict: 'A', // attributeの場合は、<div userinformation></div>
        templateUrl: 'userinfo.html'
    };
})


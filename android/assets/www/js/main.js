var androidApp = angular.module('itemsModules',['ngRoute']);
androidApp.controller('itemController',function($scope){
    $scope.items = [
        {name : 'Vowels'},
        {name : 'Consonants'},
        {name : 'Common words'},
        {name : 'Common phrases'},
        {name : 'Sentences'},
        {name : 'Focus on you'},
        {name: 'Extra ...'}];
});
androidApp.config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/learn',{
        templateUrl: 'learn.html',
        controller: learnController
    })
        .when('/practise', {
            templateUrl: 'practise.html',
            controller: practiseController
        })
        .otherwise({redirectTo:'/learn'})

}]);



function learnController($scope,$http){
    $scope.vowels = [
        {name : 'a'},
        {name : 'e'},
        {name : 'i'},
        {name : 'o'},
        {name : 'u'}];

    $http.get('data/vowels.json').success(function(data){
        $scope.mainData = data;
        $scope.iAmAFunc('a');
        console.log(data);
    });

    $scope.iAmAFunc=function(arg){
        var v = ['a','e','i','o','u'];
        $scope.touched = $scope.mainData[v.indexOf(arg)];
    }
};


function practiseController($scope){

};
/*
 function vowelController($scope,$routeParams,$http){
 console.log('hsjd')
 $http.get('./data/vowels.json').success(function(data){
 $scope.mainData = data;


 })

 }*/

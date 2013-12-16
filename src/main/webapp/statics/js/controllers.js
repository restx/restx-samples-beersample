var beerSampleApp = angular.module('BeerSampleApp', []);

beerSampleApp.controller('BeerSampleCtrl', function ($scope, $http) {

    $scope.beers = "";

    $scope.breweries = "";

    $scope.$watch('beers', function () {
        $scope.countBeers = $scope.beers.length;
    }, true)

    $scope.$watch('breweries', function () {
        $scope.countBreweries = $scope.breweries.length;
    }, true)

    $scope.displaySomeBreweries = function () {
        $http.get('/api/breweries').success(function (data) {
            $scope.breweries = data;
        });
    };

    $scope.displaySomeBeers = function () {
        $http.get('/api/beers').success(function (data) {
            $scope.beers = data;
        });
    };


});

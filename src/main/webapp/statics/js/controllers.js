var beerSampleApp = angular.module('BeerSampleApp', []);

beerSampleApp.controller('BeerSampleCtrl', function ($scope,$http) {

    $scope.type = "sans";

    $scope.beers = "";

    $scope.breweries = "";

    $scope.beerSampleStat = {'countBeers': $scope.beers.length, 'countBreweries': $scope.breweries.length};

    $scope.displayAllBreweries = function() {
        $http.get('/api/breweries').success(function(data) {
            $scope.breweries = data;
        });
    };

    $scope.displayAllBeers = function() {
        $http.get('/api/beers').success(function(data) {
            $scope.beers = data;
        });
    };

});

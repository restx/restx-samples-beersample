var beerCatApp = angular.module('beerCatApp', []);

beerCatApp.controller('beerListCtrl', function ($scope) {
    $scope.beers = [
        {'name': 'Old Stock Ale 2002',
            'type': 'beer'},
        {'name': 'Bill\'s Tavern & Brewhouse',
            'type': 'brewery'}
    ];
    $scope.beerStat = {'count' : $scope.beers.length};
});

var beerSampleApp = angular.module('BeerSampleApp', []);

beerSampleApp.controller('BeerSampleCtrl', function ($scope,$http) {
    $scope.beers = [
        {
            "name": "Natural Ice",
            "abv": 5.9,
            "ibu": 0,
            "srm": 0,
            "upc": 0,
            "type": "beer",
            "brewery_id": "anheuser_busch",
            "updated": "2010-07-22 20:00:20",
            "description": "",
            "style": "American-Style Light Lager",
            "category": "North American Lager"
        },
        {
            "name": "Bock",
            "abv": 5.5,
            "ibu": 0,
            "srm": 0,
            "upc": 0,
            "type": "beer",
            "brewery_id": "anchor_brewing",
            "updated": "2010-07-22 20:00:20",
            "description": "",
            "style": "Traditional German-Style Bock",
            "category": "German Lager"
        },
        {
            "name": "Pilsner",
            "abv": 0,
            "ibu": 0,
            "srm": 0,
            "upc": 0,
            "type": "beer",
            "brewery_id": "barley_s_brewing_1",
            "updated": "2010-07-22 20:00:20",
            "description": ""
        }
    ];
    $scope.breweries = [
        {
            "name": "21st Amendment Brewery Cafe",
            "city": "San Francisco",
            "state": "California",
            "code": "94107",
            "country": "United States",
            "phone": "1-415-369-0900",
            "website": "http://www.21st-amendment.com/",
            "type": "brewery",
            "updated": "2010-10-24 13:54:07",
            "description": "The 21st Amendment Brewery offers a variety of award winning house made brews and American grilled cuisine in a comfortable loft like setting. Join us before and after Giants baseball games in our outdoor beer garden. A great location for functions and parties in our semi-private Brewers Loft. See you soon at the 21A!",
            "address": [
                "563 Second Street"
            ],
            "geo": {
                "accuracy": "ROOFTOP",
                "lat": 37.7825,
                "lon": -122.393
            }
        },
        {
            "name": "Alaskan Brewing",
            "city": "Juneau",
            "state": "Alaska",
            "code": "99801",
            "country": "United States",
            "phone": "1-907-780-5866",
            "website": "http://www.alaskanbeer.com/",
            "type": "brewery",
            "updated": "2010-07-22 20:00:20",
            "description": "The popularity of our beers has led to heroic efforts to keep up with the demand. We claim the unofficial record for production on a 10 barrel brewing system, with a whopping 42 batches in a single week. The addition of a new, 100-barrel brewhouse in 1995, and a Sankey-type keg system installed the following year, finally made it possible for us to serve the entire Pacific Northwest and later the Desert Southwest.  Brewing beer in Alaska isn't easy. In the coastal community of Juneau, without road connections to the lower 48 states, everything arrives and leaves by water or air, and the weather always has the last word.  We have learned to coordinate shipments for barges that couldn't dock in high winds, ferries that broke down, airplanes that overheaded, and trucks delayed by spring thaws that turned the roads to mush. We learned which suppliers were willing to airlift supplies and spare parts on short notice (at $1 per pound). We mastered wiring, plumbing, waste disposal and air quality control. We discovered that, if you had to, you could pour concrete in January by thawing the ground with heaters. Ah, but it all seems worthwhile if you can go home to a dinner of king crab or fresh halibut.",
            "address": [
                "5429 Shaune Drive"
            ],
            "geo": {
                "accuracy": "ROOFTOP",
                "lat": 58.3573,
                "lon": -134.49
            }
        }
    ];

    $scope.beerSampleStat = {'countBeers': $scope.beers.length, 'countBreweries': $scope.breweries.length};

    $scope.displayAllBreweries = function() {
        $http.get('/api/breweries').success(function(data) {
            $scope.breweries = data;
        });
    };

});

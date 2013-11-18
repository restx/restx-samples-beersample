describe('beerCatApp controllers', function() {

    describe('beerListCtrl', function(){

        it('should create "beers" model with 2 beers', function() {
            var scope = {},
                ctrl = new beerListCtrl(scope);

            expect(scope.beers.length).toBe(2);
        });
    });
});
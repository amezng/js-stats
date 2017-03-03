var stats = require('../jstats');

describe("Stats library Tests",function(){
    describe("summation must",function(){
        it("return 10",function(){
            var getStats = new stats([1,2,4,3])
            var sum = getStats.sum()
            expect(sum).toBe(10)
        });

        it("return 31",function(){
            var getStats = new stats([1,20,5,5])
            var sum = getStats.sum()
            expect(sum).toBe(31)
        });
        
    });


});
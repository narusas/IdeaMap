describe("returns titles", function () {
	var Concept;

	beforeEach(function(done) {
        require(["assets/model/concept"], function(concept){
            Concept = concept;
            done();
        });
    });

	it("contains spec with an expectation", function(done) {

			console.log("Here2");
    		expect(true).toBe(true);
    		console.log("Here3");
    		console.log(Concept);
			done();
    	
  	});
});

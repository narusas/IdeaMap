define(['model/concept', 'paper'], function(Concept, paper){
	console.log("paper");
	console.log(paper);
	console.log(paper.Base);
	
	test('Concept initial properties', 3, function(){
		var c = new Concept();
		equal(0, c.get('x'), "initial x position = 0");
		equal(0, c.get('y'), "initial y position = 0");
		equal("", c.get('text'), "initial text is empty");
	});

	test('change property', 2, function(){
		var c = new Concept();
		equal(0, c.get('x'), "initial x position = 0");
		c.set('x', 10);
		equal(10, c.get('x'), "changed x position = 10");		
	});	

	test('listen changed event', 6, function() {
		var c = new Concept();
		equal(0, c.get('x'), "initial x position = 0");

		var changed = false;
		c.listen(function(propertyName, newValue, oldValue ){
			equal('x', propertyName, 'fired change event source is x');
			equal(10, newValue, 'new value = 10');
			equal(0, oldValue, 'old value = 0');
			changed = true;
		});
		c.set('x', 10);
		equal(10, c.get('x'), "changed x position = 10");
		equal(true, changed, "event listened");
	});



});

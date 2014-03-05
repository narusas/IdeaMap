define(['model/concept', 'paper'], function(Concept, paper){
	test('Initial properties of concept', function(){
		var c = new Concept();
		equal(0, c.x, "initial x position = 0");
		equal(0, c.y, "initial y position = 0");
		equal("", c.text, "initial text is empty");
	});

	test('change property',  function(){
		var c = new Concept();
		equal(0, c.x, "initial x position = 0");
		c.x = 10;
		
		equal(10, c.x, "changed x position = 10");		
	});	

	test('listen changed event',  function() {
		var c = new Concept();
		equal(0, c.x, "initial x position = 0");

		var changed = false;
		c.listen(function(source, propertyName, newValue, oldValue ){
			ok(c === source, "event must occured in we listened ");
			equal('x', propertyName, 'fired change event source is position');
			equal(10, newValue, 'new value = 10');
			equal(0, oldValue, 'old value = 0');
			changed = true;
		});
		c.x = 10;
		equal(10, c.x, "changed x position = 10");
		equal(true, changed, "event listened");
	});

	test('move poisition', function(){
		var c = new Concept();
		c.moveTo(1,3);
		equal(1, c.x);
		equal(3, c.y);
		
	});



});

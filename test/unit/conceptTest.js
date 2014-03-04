define(['model/concept', 'paper'], function(Concept, paper){
	test('Concept initial properties', function(){
		var c = new Concept();
		var p = c.position;
		equal(0, p.x, "initial x position = 0");
		equal(0, p.y, "initial y position = 0");
		 equal("", c.text, "initial text is empty");
	});

	test('change property',  function(){
		var c = new Concept();
		var p = c.position;
		equal(0, p.x, "initial x position = 0");
		c.position = new paper.Point(10, 0);

		p = c.position;
		equal(10, p.x, "changed x position = 10");		
	});	

	test('listen changed event',  function() {
	 	var c = new Concept();
	 	var p = c.position;
		equal(0, p.x, "initial x position = 0");

		var changed = false;
		c.listen(function(source, propertyName, newValue, oldValue ){
			ok(c === source, "event must occured in we listened ");
			equal('position', propertyName, 'fired change event source is position');
			equal(10, newValue.x, 'new value = 10');
			equal(0, oldValue.x, 'old value = 0');
			changed = true;
		});
		c.position  = new paper.Point(10, 0);

		p = c.position;
		equal(10, p.x, "changed x position = 10");
		equal(true, changed, "event listened");
	});



});

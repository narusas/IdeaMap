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

	test('listeners never shared', function(){
		// Note: 
		// straps Base.extend 에 의해 상속 객체를 만들면 property를 복사하게 된다. 
		// 값 복사는 상관없지만 배열등 객체 복사는 상속객체간에 공유객체를 만들게 된다. 
		// 이를 해결하기 위해 lazy initialize를 이용해 객체 공유를 제거한다. 
		// 사실 straps에서 복수의 initilize를 지원하면 되는 문제인데 straps에서는 Base.extends(...)에 넘긴 복수의 객체중
		// initilize를 가진 첫번째 객체의 initialize만을 생성자로 사용하는게 문제. 

		var c1 = new Concept();
		ok(c1.listeners === null);
		c1.listen(function(){});
		ok(c1.listeners !== null);

		var c2 = new Concept();
		ok(c2.listeners === null);
		c2.listen(function(){});
		ok(c2.listeners !== null);
		
		ok (c1.listeners !== c2.listeners);
	});

	test('move poisition', function(){
		var c = new Concept();
		c.moveTo(1,3);
		equal(1, c.x);
		equal(3, c.y);

	});



});

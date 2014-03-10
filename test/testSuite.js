QUnit.config.autostart = false;

require(
	[
		'paper',
		'unit/conceptTest.js', 
		'unit/relationTest.js',
		'unit/ideaMapTest.js',
		
		'unit/conceptLayerTest.js',
		
	], 
	function(paper){
		paper.setup(document.getElementById('myCanvas'));
		QUnit.start(); //Tests loaded, run tests
	}
);
define(
	['model/relation', 'model/concept'], 
	function(Relation, Concept){
		test('make link', function(){
			var c1 = new Concept();
			var c2 = new Concept();
			var relation = c1.linkTo(c2, 'linked');
			equal(c1, relation.endpointA);
			equal(1, c1.relations.length);
			equal(c2, relation.endpointB);
			equal(1, c2.relations.length);
			equal('linked', relation.text);
		});

		test('unlink', function(){
			var c1 = new Concept();
			var c2 = new Concept();
			var relation = c1.linkTo(c2, 'linked');
			relation.unlink();

			equal(null, relation.endpointA);
			equal(0, c1.relations.length);
			equal(null, relation.endpointB);
			equal(0, c2.relations.length);

		});
	}
);
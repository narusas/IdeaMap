define(
	['underscore', 'straps','controller/layers/relationsLayer','controller/layers/conceptsLayer'], 
	function(_, Base, RelationsLayer, ConceptsLayer){
		var Layers = Base.extend({
			initialize: function(ideaMap){
				this.model = ideaMap;
				this.relationsLayer = new RelationsLayer(ideaMap);
				this.conceptsLayer = new ConceptsLayer(ideaMap);

			},
		});

		return Layers;

	}
);
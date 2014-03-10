define(
	['underscore', 'straps','paper','controller/layers/relationsLayer','controller/layers/conceptsLayer'], 
	function(_, Base, paper, RelationsLayer, ConceptsLayer){
		var Layers = Base.extend({
			initialize: function(ideaMap){
				this.model = ideaMap;
				this.relationsLayer = new RelationsLayer(ideaMap);
				this.conceptsLayer = new ConceptsLayer(ideaMap);
				this.scrollables = [this.conceptsLayer, this.relationsLayer];
			},

			scrollTo: function(deltaX, deltaY){
				_.each(this.scrollables, function(scrollable){
					scrollable.layer.position = new paper.Point(
						scrollable.layer.position.x+deltaX, 
						scrollable.layer.position.y+deltaY
					);
				});
			},
		});

		return Layers;

	}
);
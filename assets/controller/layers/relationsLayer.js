define(
	['underscore', 'straps', 'paper', 'controller/layers/layer', 'view/relationView'], 
	function(_, Base, paper, Layer, RelationView){
		var RelationsLayer = Base.extend(Layer, {
			initialize: function(ideaMap){
				this.initializeLayer(ideaMap, ideaMap.relations, RelationView);
				
			},
			modelChanged: function(source, eventName, newValue, oldValue){
				if (eventName === 'addRelation'){
					this.addChild(newValue);
				}
				else if (eventName === 'removeRelation'){
					this.removeChild(newValue);
				}
			},
		});

		return RelationsLayer;
	}
);
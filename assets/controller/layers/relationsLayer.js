define(
	['underscore', 'straps', 'paper', 'controller/layers/layer', 'view/relationView'], 
	function(_, Base, paper, Layer, RelationView){
		var RelationsLayer = Base.extend(Layer, {
			initialize: function(layers, ideaMap){
				this.initializeLayer(layers, ideaMap, ideaMap.relations, RelationView);
			},
			modelChanged: function(source, eventName, newValue, oldValue){
				if (eventName === 'relationAdded'){
					this.addChild(newValue);
				}
				else if (eventName === 'relationRemoved'){
					this.removeChild(newValue);
				}
			},
		});

		return RelationsLayer;
	}
);
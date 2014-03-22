define(
	['underscore', 'straps', 'paper', 'controller/layers/layer', 'view/conceptView'], 
	function(_, Base, paper, Layer, ConceptView){
		var ConceptLayer = Base.extend(Layer, {
			initialize: function(layers, ideaMap){
				this.initializeLayer(layers, ideaMap, ideaMap.concepts, ConceptView);
			},
			modelChanged: function(source, eventName, newValue, oldValue){
				if (eventName === 'conceptAdded'){
					this.addChild(newValue);
				}
				else if (eventName === 'conceptRemoved'){
					this.removeChild(newValue);
				}
			},
		});

		return ConceptLayer;
	}
);
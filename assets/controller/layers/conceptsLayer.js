define(
	['underscore', 'straps', 'paper', 'controller/layers/layer', 'view/conceptView'], 
	function(_, Base, paper, Layer, ConceptView){
		var RelationsLayer = Base.extend(Layer, {
			initialize: function(ideaMap){
				this.initializeLayer(ideaMap, ideaMap.concepts, ConceptView);
			},
			modelChanged: function(source, eventName, newValue, oldValue){
				if (eventName === 'addConcept'){
					this.addChild(newValue);
				}
				else if (eventName === 'removeConcept'){
					this.removeChild(newValue);
				}
				
			},
		});

		return RelationsLayer;
	}
);
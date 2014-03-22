defined(
	['underscore', 'straps', 'paper'], 
	function(_, Base, paper){

		var UiFsm = Base.extend({
			initialize: function(layers){
				this._layers = layers;
			},
			onMouseDown: function(event, hitResult) {
				if (hitResult){// Scroll은 아무런 group도 터치 되지 않은 상태에서 동작함
					return;
				}
				this.layers.scrollTo(event.delta.x, event.delta.y);		
			}
		});

		return UiFsm;
	}
);
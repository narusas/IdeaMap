define(
	['straps', 'model/event'], 
	function(Base, Event){
		var Colors = Base.extend(Event, {

			colorset: {
				'default': {
					'bg': 				['#FFFFFF'],
					'concept-bg': 		['#FFFFFF','#FFFF00', '#00FFFF', '#FF00FF'],
					'concept-border': 	['#FF0000', '#00FF00', '#0000FF'],
					'concept-text': 	['#FF0000', '#00FF00', '#0000FF'],
					'relation-line': 	['#FF0000', '#00FF00', '#0000FF'],
					'relation-text': 	['#FF0000', '#00FF00', '#0000FF'],
				},
			},

			initialize: function(targetColorSet){
				if (!targetColorSet){
					targetColorSet = 'default';
				}
				this.change(targetColorSet);
			},

			color: function(key, index){
				if (index === undefined){
					index = 0;
				}
				return this._selectedColorSet[key][index];
			},
			size: function() {
				return this._selectedColorSet.length;
			},
			change: function(targetColorSet){
				this._selectedColorSet =  this.colorset[targetColorSet];
				this.fireChanged("colorSetChanged", targetColorSet);
			}
		});

		// 일종의 Constant  역활을 수행해야 하기 때문에  싱글톤으로 동작한다.  
		return new Colors();
	}
);
define(
	['straps', 'model/event'], 
	function(Base, Event){
		var Colors = Base.extend(Event, {

			colorset: {
				'default': {
					'colors': ['#000000', '#FFFFFF', '#F5ECD9', '#2BACB5', '#B4CCB9', '#E84D5B','#3B3B3B'],
					'concept-bg': 3,
					'concept-text': 5,
					// Concept border가 가질수 있는 컬러 인덱스 범위. 각각의  index는 colors안의 인덱스이다
					'concept-border-range':[2,3,4,5,6],
					'relation-line': 3,
					'relation-text': 5,

				},
				'firenze': {
					'colors': ['#000000', '#FFFFFF', '#468966', '#FFF0A5', '#FFB03B', '#B64926','#8E2800'],
					'concept-bg': 3,
					'concept-text': 5,
					'concept-border-range':[2,3,4,5,6],
					'relation-line': 4,
					'relation-text': 6,
				},
				'1944mustang':{
					'colors': ['#000000', '#FFFFFF', '#000000', '#263248', '#7E8AA2', '#FFFFFF','#FF9800'],
					'concept-bg': 3,
					'concept-text': 5,
					'concept-border-range':[2,3,4,5,6],
					'relation-line': 4,
					'relation-text': 6,	
				},
				'Granny Smith Apple':{
					'colors': ['#000000', '#FFFFFF', '#85DB18', '#CDE855', '#F5F6D4', '#A7C520','#493F0B'],
					'concept-bg': 3,
					'concept-text': 5,
					'concept-border-range':[2,3,4,5,6],
					'relation-line': 4,
					'relation-text': 6,	
				}
			},

			initialize: function(targetColorSet){
				if (!targetColorSet){
					targetColorSet = 'firenze';
				}
				this.change(targetColorSet);
			},

			colorAt: function(key, index){
				if (index === undefined){
					index = 0;
				}
				return this._selectedColorSet.colors[
					this._selectedColorSet[key][index]
				];
			},
			colorOf:  function(key){
				return this._selectedColorSet.colors[this._selectedColorSet[key]];
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
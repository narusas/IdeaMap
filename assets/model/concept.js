/**
컨셉맵에서 핵심이 되는 컨셉에 대한 모델 클래스. 
*/
define(
	['underscore' , 'paper'], 
	function(_, paper) {
		console.log(paper);
		var Concept = function() {
			// UI 모델 정보를 저장해 두기 위한 내부 객체
			this.ui = { paper:paper}; 

			this.x = 0;
			this.y = 0;
			this.text = "";

			this.listeners = [];
			this.listen = function(listener){
				this.listeners.push(listener);
			};

			this.fireChanged = function(propertyName, oldValue, newValue){
				_.each(this.listeners, function(listener){

					// Old value는 필요 없는 경우가 있기 때문에 마지막 인자로 함 
					listener(propertyName, newValue, oldValue);
				});
			};

			this.get = function(propertyName){
				return this[propertyName];
			};

			this.set = function(propertyName, newValue){
				var oldValue = this[propertyName];
				this[propertyName]  = newValue;
				this.fireChanged(propertyName, oldValue, newValue);
			};
		};
		return  Concept;
	}
);



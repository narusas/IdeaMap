/**
컨셉맵에서 핵심이 되는 컨셉에 대한 모델 클래스. 
*/
define(
	/*
		underscore - common util for js
		straps.js - Class inheritance library with support for bean-style accessors*
	*/
	['underscore' , 'straps','model/entity'], 
	function( _, Base,  Entity) {
		// Base는 straps 에서 제공된다.  
		// 여기서는 Base와 Entity 다중 상속을 하고 있다.
		var Concept = Base.extend( Entity, { 
			initialize: function() {
				this._text = "";
				this.ui = {};
        		
    		},
    		getText:function(){
    			return this._text;
    		},
    		setText:function(newText){
    			var oldValue = this._text;
    			this._text = newText;
    			this.fireChanged('text', this._text, oldValue);
    		},
		});

		_.extend(Concept, Entity);

		return  Concept; // 클래스를 반환함
	}
);



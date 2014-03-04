/**
컨셉맵에서 핵심이 되는 컨셉에 대한 모델 클래스. 
*/
define(
	['underscore' , 'straps','paper'], 
	function(_, Base,  paper) {
		/*
		straps.js - Class inheritance library with support for bean-style accessors*
		*/
		var Concept = Base.extend({ // Base는 straps 에서 제공된다.  
			initialize: function() {
				this._position = new paper.Point(0,0);
        		this._text = "";

        		this._ui = {};
        		this.listeners = [];
    		},
    		listen: function(listener){
    			this.listeners.push(listener);
    		},
    		fireChanged: function(propertyName,  newValue, oldValue){
    			var that = this;
				_.each(this.listeners, function(listener){
					listener(that, propertyName, newValue, oldValue);
				});
			},
    		
    		
    		getPosition: function(){
    			return this._position;
    		},
    		setPosition: function(newPosition){
    			var oldValue = this._position;
    			this._position = newPosition;
    			this.fireChanged('position', this._position, oldValue);
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
		return  Concept;
	}
);



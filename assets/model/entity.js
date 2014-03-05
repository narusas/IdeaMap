/*
	
*/
define(
	['underscore','paper'], 
	function(_, paper){
		var Entity = {
			_x: 0,
			_y: 0,
			listeners: null,
			listen: function(listener, self){
				if(this.listeners === null){
					this.listeners = [];
				}
				if (self === undefined){
					this.listeners.push(listener);
				}
				else {
					this.listeners.push([listener, self]);
				}
    			
    		},
    		fireChanged: function(propertyName,  newValue, oldValue){
    			var that = this;
				_.each(this.listeners, function(listener){
					if (_.isArray(listener)){
						var callback = listener[0];
						var self = listener[1];
						callback.apply(self);
					}
					else {
						listener(that, propertyName, newValue, oldValue);	
					}
				});
			},

			getX: function(){
				return this._x;
			},
			getY: function() {
				return this._y;
			},
			setX: function(value) {
				var oldValue = this._x;
    			this._x = value
    			this.fireChanged('x', this._x, oldValue);
			},
			setY: function(value) {
				var oldValue = this._y;
    			this._y = value
    			this.fireChanged('y', this._y, oldValue);
			},
			moveTo: function(x, y){
				var oldX = this._x;
				var oldY = this._y;
				this.setX(this._x + x);
				this.setY(this._y + y);
				this.fireChanged('position', [this._x, this._y], [oldX, oldY]);
			},
			asPoint: function() {
				return new paper.Point(this._x, this._y);
			}
		};

		return Entity;
	}
);
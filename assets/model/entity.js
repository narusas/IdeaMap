/*
	
*/
define(
	['underscore','paper', 'model/event'], 
	function(_, paper, Event){
		var Entity = {
			_x: 0,
			_y: 0,
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
			/*
			편의상 paper.Point를 직접 사용하고 있는데 약간 회의가 듬
			*/
			asPoint: function() {
				return new paper.Point(this._x, this._y);
			}
		};

		// 이벤트 관련 기능 상속
		_.extend(Entity, Event);

		return Entity;
	}
);
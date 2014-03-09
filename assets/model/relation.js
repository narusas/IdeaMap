define(
	['underscore', 'straps', 'model/entity'], 
	function(_, Base, Entity){
		var Relation = Base.extend(Entity, {
			initialize: function(){
				this._endpointA = null;
				this._endpointB = null;
				this._text = null;
			},
			endpointChanged: function(source, eventName, newValue, oldValue){
				
			},
			getEndpointA: function() {
				return this._endpointA;
			},
			setEndpointA: function(concept){
				var that = this;
				this._endpointA = concept;
				this._endpointA.listen(this.endpointChanged, this);
			},

			getEndpointB: function() {
				return this._endpointB;
			},
			setEndpointB: function(concept){
				var that = this;
				this._endpointB = concept;
				this._endpointB.listen(this.endpointChanged, this);
			},

			getText:function() {
				return this._text;
			},
			setText: function(newText){
				var oldValue = this._text;
				this._text = newText;
				this.fireChanged('textChanged', newText, oldValue);
			},
			unlink: function() {
				this._endpointA.unlink(this);
				this._endpointB.unlink(this);
				
				this.fireChanged('unlinked');	

				// 정리작업을 위해 다른 곳에서 사용할지도 모르기 때문에 null로 clean은 이벤트 처리가 끝난 후에 한다. 
				this._endpointA = null;
				this._endpointB = null;
			},

			isLinked: function(concept){
				return this._endpointA == concept || this._endpointB == concept;
			},

			
			otherSide: function(concept) {
				if (this._endpointA === concept){
					return this._endpointB;
				}
				if (this._endpointB === concept){
					return this._endpointA;
				}
				return null;
			},

			asPoint: function() {
				if (!this._endpointA || !this._endpointB){
					return;
				}
				var pointA 	= this._endpointA.asPoint();
				var pointB 	= this._endpointB.asPoint();
				var left 	= Math.min(pointA.x, pointB.x);
				var right 	= Math.max(pointA.x, pointB.x);
				var top 	= Math.min(pointA.y, pointB.y);
				var bottom 	= Math.max(pointA.y, pointB.y);
				var width 	= right - left;
				var height	= bottom - top;

				var center = new paper.Point(left + width /2, top + height /2);

				return center;	
			},

		});

		return Relation;
	}
);
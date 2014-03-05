define(
	['underscore', 'straps', 'model/entity'], 
	function(_, Base, Entity){
		var Relation = Base.extend(Entity, {
			initialize: function(){
				this._endpointA = null;
				this._endpointB = null;
				this._text = null;
			},
			getEndpointA: function() {
				return this._endpointA;
			},
			setEndpointA: function(concept){
				this._endpointA = concept;
			},

			getEndpointB: function() {
				return this._endpointB;
			},
			setEndpointB: function(concept){
				this._endpointB = concept;
			},

			getText:function() {
				return this._text;
			},
			setText: function(newText){
				var oldValue = this._text;
				this._text = newText;
				this.fireChanged('text', newText, oldValue);
			},
			unlink: function() {
				this._endpointA.unlink(this);
				this._endpointA = null;
				this._endpointB.unlink(this);
				this._endpointB = null;
			},



		});

		return Relation;
	}
);
define(
	['underscore', 'straps', 'paper', 'view/view', 'model/colors'], 
	function(_, Base, paper, View, colors){
		var lineStrokeWidth = 3;

		var RelationView = Base.extend(View, {
			initialize: function(relation) {
				var view = this;
				this.initializeView(relation, "relation");
				
				this.lineComponent = new paper.Path.Line(relation.endpointA.asPoint(),relation.endpointB.asPoint() );
				this.lineComponent.strokeColor = colors.colorOf('relation-line');
				this.lineComponent.strokeWidth = lineStrokeWidth;

				this.textComponent = new paper.PointText(relation.asPoint());
				this.textComponent.fillColor = colors.colorOf('relation-text');
				this.textComponent.content = this.model.text;
				this.updateText();

				this.group.addChild(this.lineComponent);
				this.group.addChild(this.textComponent);
				this.update();
			},
			updateLine: function(){
				this.lineComponent.strokeColor = colors.colorOf('relation-line');
				if(this.model.endpointA){
					this.lineComponent.firstSegment.point 	= this.model.endpointA.asPoint();	
				}
				if (this.model.endpointB){
					this.lineComponent.lastSegment.point 	= this.model.endpointB.asPoint();	
				}
			},
			updateText: function() {
				if (this.model){
					this.textComponent.content	= this.model.text;
					this.textComponent.position = this.model.asPoint();	
					this.textComponent.fillColor = colors.colorOf('relation-text');
				}
			},
			update: function(){
				this.updateLine();
				this.updateText();
			},

		});
		return RelationView;
	}
);
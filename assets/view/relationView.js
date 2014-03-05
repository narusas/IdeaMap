define(
	['underscore', 'paper'], 
	function(_, paper){
		var lineStrokeColor = 'green';
		var lineStrokeWidth = 3;
		var textColor 		= "#000000";

		var RelationView = function(relation){
			var view = this;
			this.model = relation;

			this.model.listen(function(source, propertyName, newValue, oldValue){
				view.update();
			});

			this.group = new paper.Group();
			this.group.viewComponent = this;

			this.lineComponent = new paper.Path.Line(relation.endpointA.asPoint(),relation.endpointB.asPoint() );
			this.lineComponent.strokeColor = lineStrokeColor;
			this.lineComponent.strokeWidth = lineStrokeWidth;

			this.updateLine = function(){
				view.lineComponent.firstSegment.point 	= relation.endpointA.asPoint();
				view.lineComponent.lastSegment.point 	= relation.endpointB.asPoint();
			};

			this.textComponent = new paper.PointText(relation.asPoint());
			this.textComponent.fillColor = textColor;
			this.textComponent.content = relation.text;
			
			this.updateText = function() {
				view.textComponent.content	= relation.text;
				view.textComponent.position = relation.asPoint();
			};
			this.updateText();

			this.group.addChild(this.lineComponent);
			this.group.addChild(this.textComponent);
			
			this.update = function(){
				view.updateLine();
				view.updateText();
			};
		};

		return RelationView;
	}
);
define(
	['underscore', 'paper'], 
	function(_, paper){
		var lineStrokeColor = 'green';
		var lineStrokeWidth = 3;

		var RelationView = function(relation){
			var view = this;
			this.group = new paper.Group();
			this.group.viewComponent = this;

			this.model = relation;

			this.model.listen(function(source, propertyName, newValue, oldValue){
				view.update();
			});


			this.lineComponent = new paper.Path.Line(relation.endpointA.asPoint(),relation.endpointB.asPoint() );
			this.lineComponent.strokeColor = lineStrokeColor;
			this.lineComponent.strokeWidth = lineStrokeWidth;

			this.textComponent = new paper.PointText(relation.asPoint());
			this.textComponent.fillColor = "black";
			this.textComponent.content = relation.text;
			
			this.updateText = function() {
				view.textComponent.content = relation.text;
				// Concept의 position은 ConceptView의 중심점
				view.textComponent.position = relation.asPoint();
			};
			this.updateText();

			this.group.addChild(this.lineComponent);
			
			this.update = function(){
				view.lineComponent.firstSegment.point = relation.endpointA.asPoint();
				view.lineComponent.lastSegment.point = relation.endpointB.asPoint();

				view.updateText();
			};
		};

		return RelationView;
	}
);
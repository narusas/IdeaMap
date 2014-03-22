define(
	['underscore', 'straps', 'paper', 'view/view', 'model/colors'], 
	function(_, Base, paper, View, colors){

		var verticalMargin = 8;
		var horizontalMargin = 10;
		var radius = 10;
		var borderStrokeWidth = 3;
		var selectedScaleUp = 1.2;

		var ConveptView = Base.extend(View, {
			initialize: function(concept, layers){
				var view = this;
				this.parent = layers;
				this.initializeView(concept, "concept");

				this.textComponent = new paper.PointText({
					position: concept.asPoint(),
					fillColor: colors.colorOf('concept-text'),
					pivot: new paper.Point(0,0),
				});
				
				this.updateText();

				this.bgComponent = new paper.Shape.Rectangle({
					point: concept.asPoint(),
					size: view.borderSize() ,
					radius: radius,
					fillColor: colors.colorOf('concept-bg'),
					pivot: new paper.Point(0,0),
				});
				this.updateBg();

				this.borderComponent = new paper.Shape.Rectangle({
					point: concept.asPoint(),
					size: view.borderSize() ,
					radius: radius,
					strokeColor: colors.colorAt('concept-border-range', concept.borderColor),
					strokeWidth: borderStrokeWidth,
					pivot: new paper.Point(0,0),
				});

				this.updateBorder();

				this.group.addChild(this.bgComponent);
				this.group.addChild(this.textComponent);
				this.group.addChild(this.borderComponent);
			},

			borderSize : function() {
				return new paper.Size(
					this.textComponent.bounds.width 	+ horizontalMargin 	* 2,
					this.textComponent.bounds.height 	+ verticalMargin 	* 2
				);
			},
			
			updateText : function() {
				this.textComponent.content = this.model.text;
				// Concept의 position은 ConceptView의 중심점
				this.textComponent.position = this.model.asPoint();
				this.textComponent.fillColor = colors.colorOf('concept-text');
			},
			
			updateBg : function() {
				this.bgComponent.fillColor = colors.colorOf('concept-bg');
				this.bgComponent.size = this.borderSize();
				this.bgComponent.radius = radius;
				this.bgComponent.position = this.model.asPoint();
			},
			
			updateBorder : function(){
				console.log("updateBorder", this.parent.x, this.parent.y);
				this.borderComponent.strokeColor = colors.colorAt('concept-border-range', this.model.borderColor);
				this.borderComponent.size = this.borderSize();
				this.borderComponent.radius = radius;
				this.borderComponent.position 	= this.model.asPoint();
			},

			update : function() {
				this.updateText();
				this.updateBg();
				this.updateBorder();
			},

			scaleUpBorder : function() {
				this.bgComponent.scale( selectedScaleUp );
				this.borderComponent.scale( selectedScaleUp );
				this.update();
			},
			scaleDownBorder : function(){
				var size = this.borderSize();
				this.borderComponent.bounds = new paper.Rectangle(this.model.asPoint(), size);
				this.bgComponent.bounds = new paper.Rectangle(this.model.asPoint(), size);
				this.update();
			},
		});
		return ConveptView;
	}
);
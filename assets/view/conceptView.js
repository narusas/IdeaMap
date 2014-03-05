define(
	['underscore', 'paper'], 
	function(_, paper){

		var verticalMargin = 8;
		var horizontalMargin = 10;
		var radius = 10;
		var bgFillColor = "red";
		var borderStrokeColor = "black";
		var borderStrokeWidth = 3;
		var selectedScaleUp = 1.2;

		var ConveptView = function(concept){
			var view = this;

			this.group = new paper.Group();

			// hitResult에서 group을 검색한 후 View component인 ConceptView 자신을 찾기 위한 parent 객체로서 viewComponent를 추가
			this.group.viewComponent = this;

			this.model = concept;

			this.model.listen(function(source, propertyName, newValue, oldValue){
				view.update();
			
			});

			this.borderSize = function() {
				return new paper.Size(
					view.textComponent.bounds.width 	+ horizontalMargin 	* 2,
					view.textComponent.bounds.height 	+ verticalMargin 	* 2
				);
			};

			this.textComponent = new paper.PointText(concept.asPoint());
			this.textComponent.fillColor = "black";
			
			this.updateText = function() {
				view.textComponent.content = concept.text;
				// Concept의 position은 ConceptView의 중심점
				view.textComponent.position = concept.asPoint();
			};
			this.updateText();

			

			this.bgComponent = new paper.Shape.Rectangle(new paper.Rectangle(
				concept.asPoint(), 
				view.borderSize()
			), radius);
			this.bgComponent.fillColor = bgFillColor;
			this.updateBg = function() {
				view.bgComponent.size = view.borderSize();
				view.bgComponent.radius = radius;
				view.bgComponent.position = concept.asPoint();
				
			};
			this.updateBg();

			this.borderComponent = new paper.Shape.Rectangle(new paper.Rectangle(
				concept.asPoint(), 
				view.borderSize()
			), radius);
			this.borderComponent.strokeColor = borderStrokeColor;
			this.borderComponent.strokeWidth = borderStrokeWidth;

			this.updateBorder = function(){
				view.borderComponent.size = view.borderSize();
				view.borderComponent.radius = radius;
				view.borderComponent.position 	= concept.asPoint();
			};
			this.updateBorder();


			this.group.addChild(this.bgComponent);
			this.group.addChild(this.textComponent);
			this.group.addChild(this.borderComponent);

			this.update = function() {
				view.updateText();
				view.updateBg();
				view.updateBorder();
			};

			this.scaleUpBorder = function() {
				view.bgComponent.scale( selectedScaleUp );
				view.borderComponent.scale( selectedScaleUp );
				view.update();
			};

			this.scaleDownBorder = function(){
				var size = view.borderSize();
				view.borderComponent.bounds = new paper.Rectangle(concept.asPoint(), size);
				view.bgComponent.bounds = new paper.Rectangle(concept.asPoint(), size);
				view.update();
			};

			this.group.startDrag = function(){
				view.scaleUpBorder();
			}

			this.group.endDrag = function(){
				view.scaleDownBorder();
				
				
			
			}

			// this.update = function(){
			// 	// 현재는 position만 반영하지만, text등 다른 property 의 변경도 반영 할수 있어야 함
			// 	text.position = new paper.Point(concept.x,concept.y);
			// 	bgRectanlge.position = new paper.Point(concept.x,concept.y);
			// 	borderRectanlge.position = new paper.Point(concept.x,concept.y);
			// };
		};
		return ConveptView;
	}
);
define(
	['paper'], 
	function(paper){
		var verticalMargin = 8;
		var horizontalMargin = 10;

		var ConveptView = function(concept){
			var view = this;
			this.group = new paper.Group();

			// hitResult에서 group을 검색한 후 View component인 ConceptView 자신을 찾기 위한 parent 객체로서 viewComponent를 추가
			this.group.viewComponent = this;

			this.model = concept;
			this.model.listen(function(source, propertyName, newValue, oldValue){
				view.update();
			});

			var text = new paper.PointText(new paper.Point(concept.x,concept.y));
			text.content = concept.text;
			text.fillColor = 'black';
			text.position = new paper.Point(concept.x,concept.y);
			var textWidth = text.bounds.width;
			var textHeight = text.bounds.height;

			var rectangleDefinition = new paper.Rectangle(
				new paper.Point(concept.x,concept.y), 
				new paper.Size(textWidth + horizontalMargin * 2,textHeight + verticalMargin * 2)
			);

			var bgRectanlge = new paper.Shape.Rectangle(rectangleDefinition, 10);

			var outlineWidth = bgRectanlge.bounds.width;
			var outlineHeight = bgRectanlge.bounds.height;
			bgRectanlge.fillColor = "red";
			bgRectanlge.position = new paper.Point(concept.x,concept.y);
			this.group.addChild(bgRectanlge);

			var borderRectanlge = new paper.Shape.Rectangle(rectangleDefinition, 10);
			borderRectanlge.strokeColor = 'black';
			borderRectanlge.strokeWidth = 3;
			borderRectanlge.position = new paper.Point(concept.x,concept.y);
			this.group.addChild(borderRectanlge);

			this.group.addChild(text);

			this.group.startDrag = function(){
				bgRectanlge.scale(1.2);
				borderRectanlge.scale(1.2);
				
			}

			this.group.endDrag = function(){
				bgRectanlge.bounds.width  	= 	outlineWidth;
				bgRectanlge.bounds.height  	=	outlineHeight;
				bgRectanlge.bounds.point 	= 	view.group.bounds.point;

				borderRectanlge.bounds.width  	= 	outlineWidth;
				borderRectanlge.bounds.height  	=	outlineHeight;
				borderRectanlge.bounds.point 	= 	view.group.bounds.point;
			}
			
			this.update = function(){
				// 현재는 position만 반영하지만, text등 다른 property 의 변경도 반영 할수 있어야 함
				text.position = new paper.Point(concept.x,concept.y);
				bgRectanlge.position = new paper.Point(concept.x,concept.y);
				borderRectanlge.position = new paper.Point(concept.x,concept.y);
			};
		};
		return ConveptView;
	}
);
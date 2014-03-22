/**
View Component들의 base 클래스 
*/
define(
	['underscore','straps', 'paper'], 
	function(_, Base, paper) {
		var View  = {
			initializeView: function(model, type){
				var view = this;
				
				this.viewType = type;
				this.model = model;
				this.model.listen(function(source, eventName, newValue, oldValue){
					if (view.update !== undefined){
						view.update(source, eventName, newValue, oldValue);	
					}
				});

				this.group = new paper.Group({
					pivot : new paper.Point(0,0),
					transformContent: false
				});
				

				// hitResult에서 group을 검색한 후 View component인 ConceptView 자신을 찾기 위한 parent 객체로서 viewComponent를 추가
				this.group.viewComponent = this;
			},
			size: function(width, height, scale){
				return new paper.Size(width * scale, height * scale);
			},
			point: function(x, y, refX, refY, scale){
				return new paper.Point((x + refX) * scale, (y + refY) * scale);
			},
		};

		return View;
	}
);
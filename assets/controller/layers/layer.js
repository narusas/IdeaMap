define(
	['underscore', 'straps', 'paper', 'model/colors'], 
	function(_, Base, paper, colors){
		var Layer = {
			initializeLayer: function(layers, model, alreadyAddedChildrens, ViewClass){
				this.layers = layers;
				this.viewClass = ViewClass;
				this.childViews = {}; // as Map

				this.layer = new paper.Group({
					// !!!! 상대 좌표계를 만들기 위한 핵심 설정
					transformContent : false,
					pivot: new paper.Point(0,0)
				});
				
				this.model = model;
				this.model.listen(this.modelChanged, this);

				this.addAll( alreadyAddedChildrens );
				colors.listen(this.update, this);
			},
			addChild:function(child){
				var view = new this.viewClass(child, this.layers);
				this.childViews[child] = view;
			},
			removeChild:function(child) {
				var view = this.childViews[child];

				//http://paperjs.org/reference/group/#remove
				//Removes the item from the project. If the item has children, they are also removed.
				view.group.remove();
				delete this.childViews[child];

			},
			addAll: function(childrens){
				_.each(childrens, this.addChild, this);
			},
			update: function() {
				_.each(_.values(this.childViews), function(value){
					if (value.update){
						value.update();
					}
				});
			},
		};

		return Layer;
	}
);
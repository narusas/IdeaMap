define(
	['underscore', 'straps', 'paper'], 
	function(_, Base, paper){
		var Layer = {
			initializeLayer: function(model, alreadyAddedChildrens, ViewClass){
				this.model = model;
				this.viewClass = ViewClass;
				this.childViews = {}; // as Map
				this.layer = new paper.Layer();
				this.model.listen(this.modelChanged, this);
				this.addAll( alreadyAddedChildrens );
			},
			addChild:function(child){
				// Paper에서는 shape를 생성할때 현재 Activated된 layer에 자동으로 추가한다. 
				// 따라서 ViewComponent를 생성하기전 현재 Layer를 활성화 한다. 
				this.layer.activate();

				var view = new this.viewClass(child);
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
			}

		};

		return Layer;
	}
);
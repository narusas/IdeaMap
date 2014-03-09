define(
	['underscore', 'straps', 'paper'], 
	function(_, Base, paper){
		var Layer = {
			initializeLayer: function(model, alreadyAddedChild, ViewClass){
				this.model = model;
				this.viewClass = ViewClass;
				this.childViews = {};
				this.model.listen(this.modelChanged, this);
				this.layer = new paper.Layer();
				this.addAll( alreadyAddedChild );
			},
			addChild:function(child){
				this.layer.activate();
				var view = new this.viewClass(child);
				this.childViews[child] = view;
			},
			removeChild:function(child) {
				var view = this.childViews[child];
				this.layer.removeChildren(view);
				view.remove();
				delete this.childViews[child];

			},
			addAll: function(childrens){
				_.each(childrens, this.addChild, this);
			}

		};

		return Layer;
	}
);
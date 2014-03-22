define(
	['underscore', 'straps','paper','controller/layers/relationsLayer','controller/layers/conceptsLayer'], 
	function(_, Base, paper, RelationsLayer, ConceptsLayer){
		var Layers = Base.extend({
			initialize: function(ideaMap){
				this.model = ideaMap;
				this._scrollables = new paper.Layer({
					transformContent: false,
					pivot: new paper.Point(0,0)
				});
				// Paper에서는 shape를 생성할때 현재 Activated된 layer에 자동으로 추가한다. 
				// 따라서 ViewComponent를 생성하기전 현재 Layer를 활성화 한다. 
				this._scrollables.activate();
				
				this._conceptsLayer = new ConceptsLayer(this, ideaMap);
				this._relationsLayer = new RelationsLayer(this, ideaMap);
				// 스크롤시 상대 좌표계를 위한 기준점
				this._scrollX = 0;
				this._scrollY = 0;
				this._scale = 1.0;
			},
			getX: function() {
				return this._scrollX;
			},
			getY: function(){
				return this._scrollY;
			},
			getScale: function() {
				return this._scale;
			},
			zoom: function(deltaScale) {
				this._scrollables.pivot = new paper.Point(0,0);
				this._scale *= deltaScale;
				this._scrollables.pivot = new paper.Point(0,0);
				
				console.log("zoom:", this._scale);
				this._scrollables.scale(deltaScale);
			},
			zoomUp: function() {
				this.zoom(1.25);
			},
			zoomDown: function() {
				this.zoom(0.8);
			},

			scrollTo: function(deltaX, deltaY){

				this._scrollX += deltaX/this.scale;
				this._scrollY += deltaY/this.scale;
				this._scrollables.pivot = new paper.Point(0,0);
				this._scrollables.position = new paper.Point(
					this._scrollables.position.x + deltaX/this.scale,
					this._scrollables.position.y + deltaY/this.scale
				);
				console.log("SX:",this._scrollX,"SY:", this._scrollY);
			},
		});

		return Layers;

	}
);
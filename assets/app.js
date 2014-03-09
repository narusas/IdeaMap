/*
	
*/
define(
	['underscore', 'straps', 'paper','model/ideamap','controller/layers/layers'], 
	function(_, Base, paper, IdeaMap, Layers){
		var App = Base.extend({
			initialize: function(canvas){
				this._canvas = canvas;
				paper.setup(canvas);
				this._ideaMap = new IdeaMap();
				this._layers = new Layers(this._ideaMap);
			},
			getIdeaMap: function() {
				return this._ideaMap;
			},
			getLayers: function(){
				return this._layers;
			},
			getCanvas: function() {
				return this._canvas;
			}
		});

		return App;

	}
);
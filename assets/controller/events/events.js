/*
	화면상에서 발생하는 이벤트들에 대한 mediator 역활을 수행

*/
define(
	['underscore', 'straps', 'paper', 
		'controller/uiFsm/uiFsm',
	], 
	function(_, Base, paper,
		UiFsm
	){
		var Events = Base.extend({
			initialize: function(app) {
				var events = this;
				this.fsm = [new UiFsm(app.layers)];

				paper.tool.onMouseDown  = function(event) { 
					var hitResult = events.hitResult(event);
					_.each(events.fsm, function(fsm){
						fsm.onMouseDown(event, hitResult);
					});
				};

				paper.tool.onMouseDrag  = function(event) { 
					_.each(events.fsm, function(fsm){
						fsm.onMouseDrag(event, hitResult);
					});
				};

				paper.tool.onMouseUp  = function(event) { 
					var hitResult = events.hitResult(event);
					_.each(events.fsm, function(fsm){
						fsm.onMouseUp(event, hitResult);
					});
				};
			},

			hitTest: function(event){
				return paper.project.hitTest(event.downPoint,{type:"group", fill:true});
			},
		});
		return Events;
	}
);
/*
	Main 역활을 수행
*/
require(
	['paper', 'app'],
	function(paper, App){
		var app = new App(document.getElementById('myCanvas'));

		
		var concept1 = app.ideaMap.newConcept('Hello', 100, 100);
		var concept2 = app.ideaMap.newConcept('Hello world is typical text example.', 300, 300);

		var relation1 = app.ideaMap.link(concept1, concept2, 'bunded');
		


		
		// var selectedGroup = null;

		// paper.tool.onMouseDown = function (event) {
		// 	var hitResult = paper.project.hitTest(event.downPoint,{type:"group", fill:true});
		// 	if (hitResult === null) {
		// 		if (selectedGroup == null){
		// 			return;
		// 		}
		// 		// 빈 공간을 클릭 한 것이기 때문에 선택 해제
		// 		selectedGroup.endDrag();
		// 		selectedGroup = null;
		// 		return;
		// 	}

		// 	// 클릭 가능한 것은 item이며 이 아이템들을 묶은 group을 다루고자 하기 때문에 parent를 찾는다. 
		// 	var g = hitResult.item.parent;
		// 	if (selectedGroup === g) {
		// 		// 같은 아이템을 또 클릭하는 것은 무시
		// 		return;
		// 	}
		// 	if (selectedGroup != null){
		// 		// 이미 그룹을 선택한 상태에서 다른 그룹을 선택한 것이기 때문에 기존에 선택된 것을 선택해제
		// 		selectedGroup.endDrag();
		// 	}
		// 	selectedGroup = g;
		// 	console.log("selectedGroup", selectedGroup);
		// 	selectedGroup.startDrag();
		// }

		// paper.tool.onMouseUp = function (event) {
			
		// }

		// paper.tool.onMouseDrag = function (event) {
		// 	if (selectedGroup == null){
		// 		return;
		// 	}
			
		// 	selectedGroup.viewComponent.model.moveTo(event.delta.x, event.delta.y);

		// }

		// javascript 를 이용할경우 paper는 자동 draw를 하지 않는다. 
		// 명시적으로  draw()를 호출하거나 onFrame에 콜백을 넣어주면 된다. 
		paper.view.onFrame = function(){
			
		};

		//paper.view.draw();
	}
);
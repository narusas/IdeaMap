/*
	Main 역활을 수행
*/
require(
	['paper', 'app'],
	function(paper, App){
		var app = new App(document.getElementById('myCanvas'));
		
		
		var concept1 = app.ideaMap.newConcept('Hello', 0, 0);
		var concept2 = app.ideaMap.newConcept('Hello world is typical text example.', 300, 300);

		var relation1 = app.ideaMap.link(concept1, concept2, 'bunded');
		paper.tool.onKeyUp = function(event) {
			if (event.key === '=' || event.key === '+'){
				app.layers.zoomUp();
			}
			if (event.key === '-'){
				app.layers.zoomDown();
			}
			console.log("Bounds:", app.layers._scrollables.bounds);
		}
		
		paper.tool.onMouseDown = function (event) {
			console.log(event.item);
			//app.ideaMap.unlink(relation1);
			//app.layers.relationsLayer.layer.pivot = new paper.Point(0,0);
			// console.log('position', app.layers.relationsLayer.layer.position);
			// console.log('bounds', app.layers.relationsLayer.layer.bounds);
			// console.log('pivot', app.layers.relationsLayer.layer.pivot);
			// app.layers.relationsLayer.layer.position = new paper.Point(220,220);
			// app.layers.relationsLayer.layer.scale(1.2);
			// console.log('position', app.layers.relationsLayer.layer.position);
			// console.log('bounds', app.layers.relationsLayer.layer.bounds);
			// console.log('pivot', app.layers.relationsLayer.layer.pivot);
			// app.layers.scrollTo(100,30);

		};

		paper.tool.onMouseDrag = function (event) {
			app.layers.scrollTo(event.delta.x,event.delta.y);		
		}

		
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
		var count = 0;
		paper.tool.onMouseUp = function (event) {
			console.log("Bounds:", app.layers._scrollables.bounds);
			if (event.event.detail > 1){ // doble click
				console.log("downPoint:", event.downPoint);


				/*
				endpoint는 화면상의 마우스 클릭 위치이다. 
				scale 이 1일때 이 좌표는 layers가 스크롤된 것만큼 뺴주면 된다.
				scale이 2일때 데이터는 화면상에 2배의 크기로 보인다. 따라서 화면좌표를 2로 나누고 
				*/
				var x = event.downPoint.x;
				var y = event.downPoint.y;
				count++;
				var concept1 = app.ideaMap.newConcept(
					'Hello',  
					x / app.layers.scale - app.layers.x,  
					y / app.layers.scale  - app.layers.y
				);								
			}

			
		}

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
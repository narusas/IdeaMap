define(
	['paper', 'model/ideamap', 'controller/layers/layers'], 
	function(paper, IdeaMap, Layers){
		test('컨셉 레이어', function(){
			
			var ideaMap = new IdeaMap();
			var layers = new Layers(ideaMap);
			equal(false, layers.conceptsLayer.layer.hasChildren(), "아직 아무것도 등록되지 않는상태");
			equal(0, layers.conceptsLayer.layer.children.length, "layer의 children배열도 아무것도 없어야 함");

			var concept = ideaMap.newConcept('hello', 100, 100);
			equal(true,  layers.conceptsLayer.layer.hasChildren(), "컨셉을 만들었고 연동되어 컨셉뷰도 만들어져야 함");
			equal(1, layers.conceptsLayer.layer.children.length, "한개");

			ideaMap.removeConcept(concept);
			equal(false,  layers.conceptsLayer.layer.hasChildren(), "컨셉이 삭제되면 더이상 등록된게 없어야 함 ");
			equal(0, layers.conceptsLayer.layer.children.length);
		});

		test('관계 레이어', function(){
			var ideaMap = new IdeaMap();
			var layers = new Layers(ideaMap);
			
			var concept1 = ideaMap.newConcept('hello1', 50, 50);
			var concept2 = ideaMap.newConcept('hello2', 150, 150);

			equal(false, layers.relationsLayer.layer.hasChildren(), "아직 아무것도 등록되지 않는상태");
			equal(0, layers.relationsLayer.layer.children.length, "layer의 children배열도 아무것도 없어야 함");

			var relation = ideaMap.link(concept1, concept2, 'binded');


			equal(true, layers.relationsLayer.layer.hasChildren(), "관계가 만들어 졌기 때문에 관계뷰도 등록되어야 함 ");
			equal(1, layers.relationsLayer.layer.children.length, "한개");

			ideaMap.unlink(relation);
			equal(false, layers.relationsLayer.layer.hasChildren(), "unlink되면 뷰도 제거 되어야 함");
			equal(0, layers.relationsLayer.layer.children.length, "layer의 children배열도 아무것도 없어야 함");
			
		});


	}
);
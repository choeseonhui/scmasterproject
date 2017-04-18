var select_img;

$(function() {
	$("#makebook-button").on("click", function() {
		location.href="makebook";
	});
	getMyBoard();
});

function getMyBoard() {
	select_img = new Array();
	var myBoardListDiv = document.getElementById("myBoardList");
	var myBoardList = $("#myBoard").val();
	if(myBoardList != undefined) {
		var board = JSON.parse(myBoardList);
		var myBoard = '';
		myBoard += '<div id="select-img" class="row">';
		$.each(board, function(index, item) {
			myBoard += '<div class="col-sm-4 portfolio-item">';
			myBoard += '<a href="#" class="portfolio-link" data-toggle="modal">';
			myBoard += "<div class='j-caption caption' img_no='"+item.boa_id+"'>";
			myBoard += '<div class="caption-content">';
			myBoard += '<i class="fa fa-check fa-3x"></i>';
			myBoard += '</div>';
			myBoard += '</div>';
			myBoard += "<img src='"+ item.boa_photo_savefile +"' class='j-img-responsive img-responsive'>";
			myBoard += '</a>'
			myBoard += '</div>';
		});
		myBoard += '</select>';
		myBoard += '</div>';
		myBoardListDiv.innerHTML = myBoard;
	}

	$(".j-caption").on("click", function() {
		var select_item = $(this).attr("img_no");
		$(this).css('opacity', '0');
		$(this).toggleClass("selected");
		toMakeBook(select_item);
	});
	
	function toMakeBook(select_item) {
		if(select_img.indexOf(select_item) < 0) {
			select_img.push(select_item);
			$(".selected").css('opacity', '0.5');
		} else {
			select_img.splice(select_img.indexOf(select_item), 1);
		}
		console.log(select_img);
	}

	//슬라이더를 움직여주는 함수
	function moveSlider(index){
		//슬라이더 이동
		var willMoveLeft=-(index*1570);
		$('.slider_panel').animate({left : willMoveLeft}, 'slow');
		
		//컨트롤 버튼의 active 클래를 부여/제거
		$('.control_button[data-index]='+index+']').addClass('active');
		$('.control_button[data-index]!='+index+']').removeClass('active');
		
	}
	
	//컨트롤 버튼의 클릭 리스너 지정 및 data-index할당
	$('.control_button').each(function(index){
		$(this).attr('data-index', index);
	}).click(function(){
		var index=$(this).attr('data-index');
		moveSlider(index);
	});
	
	//초기 슬라이더 위치 지정
	var positionNUmber=0;
	moveSlider(positionNUmber);
}

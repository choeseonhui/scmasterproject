$(function() {
	var select_img = {};
	
	$("#makebook-button").on("click", function() {
		location.href="makebook";
	});
	
	$("#select-img").on("click", function() {
		console.log("신비로운너의모습");
		select_img.push($(this).attr("img_no"));
		console.log(select_img);
	});
	
	getMyBoard();
});

function getMyBoard() {
	var myBoardListDiv = document.getElementById("myBoardList");
	var myBoardList = $("#myBoard").val();
	if(myBoardList != undefined) {
		var board = JSON.parse(myBoardList);
		var myBoard = '';
		myBoard += '<div id="select-img" class="row">';
		/*myBoard += '<select multiple="multiple" class="image-picker show-html">';*/
		$.each(board, function(index, item) {
			myBoard += '<div class="col-sm-4 portfolio-item">';
			myBoard += '<a href="#" class="portfolio-link" data-toggle="modal">';
			myBoard += '<div class="j-caption caption">';
			myBoard += '<div class="caption-content">';
			myBoard += '<i class="fa fa-check fa-3x"></i>';
			myBoard += '</div>';
			myBoard += '</div>';
			/*myBoard += "<option data-img-src='"+ item.boa_photo_savefile +"' value='"+item.boa_id+"' class='j-img-responsive img-responsive'>";*/
			myBoard += "<img src='"+ item.boa_photo_savefile +"' img_no='"+item.boa_id+"' class='j-img-responsive img-responsive'>";
			myBoard += '</a>'
			myBoard += '</div>';
		});
		myBoard += '</select>';
		myBoard += '</div>';
		myBoardListDiv.innerHTML = myBoard;
	}
}
/*myBoardList*/
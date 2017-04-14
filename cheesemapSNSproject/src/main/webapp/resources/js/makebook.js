$(function() {
	$("#makebook-button").on("click", function() {
		location.href="makebook";
	});
	getMyBoard();
});

function getMyBoard() {
	var myBoardListDiv = document.getElementById("myBoardList");
	var myBoardList = $("#myBoard").val();
	var board = JSON.parse(myBoardList);
	var myBoard = '';
	console.log(board);
	$.each(board, function(index, item) {
		console.log(item);
		myBoard += '<div class="row">';
		myBoard += '<div class="col-sm-4 portfolio-item">';
		myBoard += '<a href="#" class="portfolio-link" data-toggle="modal">';
		myBoard += '<div class="caption">';
		myBoard += '<div class="caption-content">';
		myBoard += '<i class="fa fa-search-plus fa-3x"></i>';
		myBoard += '</div>';
		myBoard += '</div>';
		myBoard += "<img src='"+ item.boa_photo_savefile +"' class='img-responsive' width='300' height='300'>";
		myBoard += '</a>'
		myBoard += '</div>';
		myBoardListDiv.innerHTML = myBoard;
	});
}
/*myBoardList*/
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
	myBoard += '<div class="row">';
	$.each(board, function(index, item) {
		console.log(item);
		myBoard += '<div class="col-sm-4 portfolio-item">';
		myBoard += '<a href="#" class="portfolio-link" data-toggle="modal">';
		myBoard += '<div class="j-caption caption">';
		myBoard += '<div class="caption-content">';
		myBoard += '<i class="fa fa-check fa-3x"></i>';
		myBoard += '</div>';
		myBoard += '</div>';
		myBoard += "<img src='"+ item.boa_photo_savefile +"' class='j-img-responsive img-responsive'>";
		myBoard += '</a>'
		myBoard += '</div>';
	});
	myBoard += '</div>';
	myBoardListDiv.innerHTML = myBoard;
}
/*myBoardList*/
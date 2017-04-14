$(function() {
	$("#makebook-button").on("click", function() {
		location.href="makebook";
		getMyBoard();
	});
});

function getMyBoard() {
	alert("되냐!??");
	var myBoardList = document.getElementById("myBoardList");
	var html = '';
	html += '<div class="row">';
	html += '<div class="col-sm-4 portfolio-item">';
	html += '<a href="#" class="portfolio-link" data-toggle="modal">';
	html += '<div class="caption">';
	html += '<div class="caption-content">';
	html += '<i class="fa fa-search-plus fa-3x"></i>';
	html += '</div>';
	html += '</div>';
	html += '<img src="./resources/img/logo.png" class="img-responsive">';
	html += '</a>'
	html += '</div>';
	myBoardList.innerHTML = html;
}
/*myBoardList*/
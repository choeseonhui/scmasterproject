function boardList() {
	$.ajax({
		type : "get",
		url : "timeline",
		dataType : "json",
		success : function(data) {
			console.log("여기까지");
			var mem_id = $("#mem_id").val();
			var html ="";
			$.each(data, function(index, item) {
				$.each(item, function(index2, item2) {
					console.log(item2);
					if(item2.boa_create_date != undefined) {
						html += "<div class='board' datano='" +
							+item2.boa_id		
							+"'><table><tr>";
						if(item2.boa_photo_savefile != undefined) {
							html +=	"<td rowspan='2'><img src='"+ item2.boa_photo_savefile +"' width='100'>" +
									"</img></td>";
						} else {
							html +=	"<td rowspan='2'><img src='./resources/img/logo.png' width='100'>" +
							"</img></td>";
						}
						html += "<td>" + item2.boa_create_date + ",</td>";
						html += "<td>" + item2.mem_id + ",</td>";
						html += "<td>" + item.boardComment.length + ",</td>";
						html += "<td>" + item.boardLike.length + ",</td></tr>";
						html += "<tr><td colspan='5'>" + item.boardLike.length + "</td></tr>";
					}
					if(item2.tag == mem_id) {
						"<td>ⓞ</td>";
					} else {
						"<td>X</td>";
					}
					html += "</tr></table></div>";
				});
			});
			$("#timeline_div").html(html);
			clickBoard(data);
		},
		error : function(e) {
			console.log(e);
		}
	});
}

//Get the modal
var modalBoard = document.getElementById('myModalBoard');

// Get the <span> element that closes the modal
var spanBoard = document.getElementsByClassName("close")[1];

function clickBoard(data){
var boa_id=$(this).attr("datano");
$(".board").click(function(){
	modalBoard.style.display = "block";
	$.each(data, function(index, item) {
		$.each(item, function(index2, item2) {
			if(item2.boa_id==boa_id){
				
			}
		});
	});
});

}

//When the user clicks on <span> (x), close the modal
spanBoard.onclick = function() {
	modalBoard.style.display = "none";
}


$(document).ready(function() {
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	if (event.target == modalBoard) {
		modalBoard.style.display = "none";
	}
}
});
$(function() {
	$(document).on("click", "#timeline_btn", function() {
		console.log("ajdi");
		/*var html ="";
		html += '<div class="pollSlider">';
		html += '<jsp:include page="timeline.jsp" flush="true"></jsp:include>';
		html += '</div>';*/
		//event.preventDefault();
		boardList();
	});
});
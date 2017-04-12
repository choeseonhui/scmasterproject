function boardList() {
	$.ajax({
		type : "get",
		url : "timeline",
		dataType : "json",
		success : function(data) {
			var mem_id = $("#mem_id").val();
			var html = "";
			$.each(data, function(index, item) {
				$.each(item, function(index2, item2) {
					if(item2.boa_create_date != undefined) {
						html += "<div class='board' datano='" +
							+ item2.boa_id		
							+ "'><table class='j-table w3-hoverable'><tr>";
						if(item2.boa_photo_savefile != undefined) {
							html +=	"<td rowspan='3'><img class='w3-circle' src='"+ item2.boa_photo_savefile +"' width='120' height='120'>" +
									"</img></td>";
						} else if(item2.boa_video_savefile != undefined) {
							html +=	"<td rowspan='3'><video src='"+ item2.boa_video_savefile +"' width='120' height='120'>" +
							"</video></td>";
						}
						else {
							html +=	"<td rowspan='3'><img src='./resources/img/logo.png' width='120' height='120'>" +
							"</img></td>";
						}
						html += "<td>" + item2.mem_id + "</td>";
						html += "<td>좋아요" + item.boardLike.length + " 코멘트" + item.boardComment.length + "</td></tr>";
						html += "<tr><td align='left' colspan='2'>"
						if(item.boardTag.length > 0) {
							$.each(item.boardTag, function(index3, item3) {
								html += "<a>#" + item3.tag_name + " </a>";
							});
						}
						html += "</td></tr>"
						html += "<tr><td align='right' colspan='2'>" + item2.boa_create_date + "</td>";
					}
					html += "</tr></table></div>";
				});
			});
			$("#timeline_div").html(html);
            $('.board').mouseenter(function () {
                $(this).on('drag',function () {
                    $(this).attr('data-mouse-on','true');
                });
            });
            $('.board').mouseleave(function () {
                $(this).attr('data-mouse-on','false');
            });
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
		boardList();
	});
});
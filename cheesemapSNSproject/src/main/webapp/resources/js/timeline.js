function boardList() {
	console.log("여기까지");
	$.ajax({
		type : "get",
		url : "timeline",
		dataType : "json",
		success : function(data) {
			var mem_id = $("#mem_id").val();
			var html ="";
			html += "<table>";
			$.each(data, function(index, item) {
				$.each(item, function(index2, item2) {
					console.log(item2);
					if(item2.boa_create_date != undefined) {
						html += "<tr>";
						if(item2.boa_photo_savefile != undefined) {
							html +=	"<td rowspan='2'><img src='"+ item2.boa_photo_savefile +"' width='150' height='150'>" +
									"</img></td>";
						} else {
							html +=	"<td rowspan='2'><img src='./resources/img/logo.png' width='150' height='150'>" +
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
					html += "</tr>";
				});
			});
			html += "</table>";
			$("#timeline_div").html(html);
		},
		error : function(e) {
			console.log(e);
		}
	});
}

$(function() {
	$("#timeline_btn").on("click", function() {
		console.log("ajdi");
		/*var html ="";
		html += '<div class="pollSlider">';
		html += '<jsp:include page="timeline.jsp" flush="true"></jsp:include>';
		html += '</div>';*/
		boardList();
	});
});
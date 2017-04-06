function boardList() {
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
						html +=	"<td><img src='"+ item2.boa_photo_savefile+"' width='100'>" +
								"</img></td>";
						html += "<td> " + item2.boa_create_date + ", </td>";
						html += "<td> " + item.boardComment.length + ", </td>";
						html += "<td> " + item.boardLike.length; + " </td>";
					}
					if(item2.tag == mem_id) {
						"<td>ⓞ</td>";
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
		/*var html ="";
		html += '<div class="pollSlider">';
		html += '<jsp:include page="timeline.jsp" flush="true"></jsp:include>';
		html += '</div>';*/
		boardList();
	});
});
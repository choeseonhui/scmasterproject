$(function() {
	$("#login_btn").on("click", function() {
		var id = $("#mem_id").val();
		var password = $("#mem_pw").val();

		// ajax 함수
		$.ajax({
			type : "post", // RequestMethod Type
			url : "loginCheck", // RequestMapping value
			data : { // 서버로 전송할 데이터 {키 : 값}형태
				mem_id : id,
				mem_pw : password
			},
			success : function(data) {
				alert("succcc");
			},
			error : function(e) {
				alert("fals");
				// ajax통신 실패시
				console.log(e);
			}
		});
	});
});
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<script src="./resources/js/jquery-3.1.1.js"></script>
<link href="./resources/css/wow_book.css" rel="stylesheet">
<script src="./resources/js/wow_book.min.js"></script>
<script>
	
	$(document).ready(function(){
		var count = ${ count};
		 var userid = sessionStorage.getItem("mem_id");
		 var book = "";
			for (var i = 1; i <= count; i++) {
				book += "<div><img src='userUpload/" + userid + "_" + i + ".png' width='637' height='900'></div>";
			}
			$('#mybook').html(book);
			$('#mybook').wowBook({
				height: 900,
				width: 1273,
				flipSound: false,
				slideShow: false
			});
	});
 
</script>
</head>
<body>
<div id="mybook">

</div>
</body>
</html>
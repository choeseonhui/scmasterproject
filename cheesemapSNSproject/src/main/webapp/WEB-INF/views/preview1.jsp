<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<link href="./resources/css/test1.css" rel="stylesheet" type="text/css">
<link href="./resources/css/wow_book.css" rel="stylesheet">
<link href="./resources/css/animate.css" rel="stylesheet">
<link href="./resources/css/style.css" rel="stylesheet">
<script>
function makepdf2() {	
	var options = {
			allowTaint: true,
			taintTest: false,
			useCORS: true,
			proxy: '/userUpload'
		};
	var page_count = sessionStorage.getItem("page_count");
	var doc = new jsPDF();
	setTimeout(function(){
		doc.addHTML(document.getElementById('page0'), 0, 0, function() {
			console.log('0');
			doc.addPage();
		});
	}, 1000);
	
	setTimeout(function(){
		doc.addHTML(document.getElementById('page0_5'), 0, 0, options, function() {
			console.log('0.5');
			doc.addPage();
		});
	}, 2000);
	
	setTimeout(function(){
		doc.addHTML(document.getElementById('page1'), 0, 0, options, function() {
			console.log('1');
			doc.addPage();
		});
	}, 3000);
	
	setTimeout(function(){
		doc.addHTML(document.getElementById('page2'), 0, 0, options, function() {
			console.log('2');
			doc.addPage();
		});
	}, 4000);
	
	setTimeout(function(){
		doc.addHTML(document.getElementById('page3'), 0, 0, options, function() {
			console.log('3');
			doc.addPage();
		});
	}, 5000);
	
	function content_page_make(i, time){
			setTimeout(function(){
				doc.addHTML(document.getElementById('page4_' + i), 0, 0, options, function() {
					console.log('page4_' + i);
					doc.addPage();
				});
			}, time);
	}
	
	var time = 5000;	
	
	for (var i = 0; i < page_count; i++) {
		time += 1000;
		content_page_make(i, time);
	}
	
	setTimeout(function(){
		doc.addHTML(document.getElementById('page_last'), 0, 0, options, function() {
			console.log('page_last');
			var pdf = doc.output('datauristring');
			var pdf2 = pdf.split(',');
			var userid = sessionStorage.getItem("mem_id")
			console.log('ajax start');
			$.ajax({
				type: 'POST',
				url: 'pdf',
				data: {
					pdf: pdf2[1],
					userid: userid
				},
				success:function(data){
					/* var book = "";
					for (var i = 1; i <= data; i++) {
						book += "<div><img src='userUpload/" + userid + "_" + i + ".png' width='600'></div>";
					}
					$(opener.document).find('#preview_pdf').html(book);
					$(opener.document).find('#preview_pdf').wowBook({
						height: 800,
						width: 900,
						flipSound: false,
						slideShow: true
					}); */
					window.opener.location.href="preview2?count=" + data; 
					window.close();
				},
				error:function(e){
					console.log(e);
				}
			});
			/*doc.save('MyBOOOOOOOK.pdf');*/
		});
	}, (time + 1000));
	
	/*setTimeout(function(){
		doc.addHTML(document.getElementById('page4_0'), 0, 0, function() {
			console.log('4_0');
			doc.save('5.pdf');
		});
	}, 35000);*/
	
}
</script>

</head>
<body id="preview_id" >
	<div id="osirase">
	책을 만들고 있어요!
	</div>
	<div id="loading"><img src="./resources/img/loading.gif"></div>
	<input type="button" id="make" value="makepdf" onclick="makepdf()">
		<div class="page" id="page0"> <img class="background_img" src="./resources/img/testPage0.png"> <img id="cover_img" src="./resources/img/I12.png">
  <div id="cover_title">치즈치즈의 북북북</div>
  <div id="cover_date">17.04.01 ~ 17.04.30</div>
</div>
<div class="page" id="page0_5">
  <div id="member_nick">COCOHELLO</div>
  <div id="collabo">X</div>
  <img id="logo" src="./resources/img/logo.png"> </div>
<div class="page" id="page1"> <img class="background_img" src="./resources/img/testPage1.png">
  <div id="total_div">12323</div>
  <div id="like_div">1233</div>
  <div id="comment_div">112323</div>
  <div id="memories_div">12</div>
  <div class="top3_image" id="top1"> <img class="top3_img" src="./resources/img/I12.png"> </div>
  <div class="top3_image" id="top2"> <img class="top3_img" src="./resources/img/I12.png"> </div>
  <div class="top3_image" id="top3"> <img class="top3_img" src="./resources/img/I12.png"> </div>
  <div class="nickname" id="top1_nick">ziwoong</div>
  <div class="nickname" id="top2_nick">sunny</div>
  <div class="nickname" id="top3_nick">cocohello</div>
</div>
<div class="page" id="page2"> <img class="background_img" id="backimg2" src="./resources/img/testPage2.png"> <img id="post_top2_img" src="./resources/img/I12.png">
  <div id="post_top2_like">47</div>
  <div id="post_top2_comment">44</div>
  <img id="post_top3_img" src="./resources/img/I12.png">
  <div id="post_top3_like">47</div>
  <div id="post_top3_comment">44</div>
</div>
<div class="page" id="page3"> <img class="background_img" id="backimg3" src="./resources/img/testPage3.png">
  <div id="post_top1_div">
    <div id="post_top1_date">2017.04.04 MONDAY PM 4:44</div>
    <img id="post_top1_img" src="./resources/img/I12.png">
    <div id="post_top1_content">오늘 외근합니다</div>
    <div id="post_top1_like">44</div>
    <div id="post_top1_comment">44</div>
  </div>
</div>
<div class="page" id="page3_5"> <img class="background_img" id="back_img3_5" src="./resources/img/testPage3_5.png"> </div>
<div class="page" id="page4"></div>
<div id="mybook"></div>

<script src="./resources/js/jquery-3.1.1.js"></script>
<!-- ssss -->
<script type="text/javascript" src="./resources/js/bootstrap-datepicker.js"></script>
<script type="text/javascript" src="./resources/js/bootstrap-datepicker.kr.js"></script>
<script src="./resources/js/wow_book.min.js"></script>
<script src="./resources/js/jquery.fittext.js"></script>
<script src="./resources/js/jquery.lettering.js"></script>
<script src="./resources/js/jquery.textillate.js"></script>
<script	src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.2/jspdf.debug.js"></script>
<script src="./resources/js/makebook.js"></script>

    <script>
    $(document).ready(function(){
    	$('#osirase').textillate({
    		loop: true
    	});
    	console.log(sessionStorage.getItem("mem_id"));
    	console.log(sessionStorage.getItem("myBoard"));
    	previewer();
    	setTimeout(function(){
    	makepdf2();
    	}, 3000);
    });
    
    
    </script>
</body>
</html>
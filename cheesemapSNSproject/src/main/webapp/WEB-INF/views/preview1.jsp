<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<style>
#preview1 {
	width: 21cm;
	height: 29.7cm;
}
</style>
<title>Insert title here</title>
<link href="./resources/css/test1.css" rel="stylesheet" type="text/css">
</head>
<body id="preview_id">
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
</body>
</html>
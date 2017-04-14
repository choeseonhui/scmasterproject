<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
</head>
<body>
	<div id="wrapBoard">
		<div id="asideBoard">내용</div>
		<div id="sectionBoard">
			<!-- 프로필사진 및 닉네임 -->
			<div id="headerBoard">
				<span id="profilePhotoBoa">프로필사진</span>
				<span id="nickNameBoa">닉네임</span>
			</div>
			<!-- 좋아요 & 날짜 -->
			<div id="likedate">
				<span id="likeit">좋아요</span>
				<span id="time">날짜</span>			
			</div>
			<!-- 댓글 읽기 및 삭제 -->
			<div id="replyBoard">댓글 목록</div>
			<!-- 좋아요 등록, 댓글 등록-->
			<div id="footerBoard">
				<span id="likeHeart"></span>
				<span id="replyWrite">
				<input type="text" name="com_content" id="comContent" /> 
				<input type="button" id="okBtn" class="btn btn-success btn-lg" value="OK" />
				</span>
			</div>
		</div>
	</div>
</body>
</html>
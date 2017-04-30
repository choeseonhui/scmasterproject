<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<h2>Make my map</h2>
<section id="portfolio" class="mymymy">
	<div class="mapmap">
		<span class="makeStep">STEP1&nbsp&nbsp&nbsp&nbsp</span>
		나의 지도에 들어갈 장소를 선택해 주세요
	</div>
	
	<div id="setRoute"></div>
	
	<div class="mapmap">
		<span class="makeStep">STEP2&nbsp&nbsp&nbsp&nbsp</span>
		태그를 입력해 주세요
	</div>
	
	<textarea id="hashtagMap"></textarea>
	
	<div class="mapmap">
		<span class="makeStep">STEP3&nbsp&nbsp&nbsp&nbsp</span>
		메모를 입력해 주세요
	</div>
	
	<textarea id="contentMap"></textarea>
	
	<input type="button" id="makeMyMap" class="btn btn-success btn-lg" onclick="return mymapCheck();" value="Make">
</section>
<!-- hashtag -->
<script src="./resources/js/jquery.hashtags.js"></script>

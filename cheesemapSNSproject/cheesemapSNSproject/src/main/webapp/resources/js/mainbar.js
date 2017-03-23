$(function() {
	var mymenuflag = true;

	$('#logout').click(function() {
		alert('로그아웃 기능 구현 예정입니다.');
		
	});
	
	$('#mymenu').click(function() {
		if (mymenuflag) {
			mymenuflag = false;
			$('.mymenuSlider').animate({
				"margin-right" : '+=500'
			});

		} else {
			mymenuflag = true;
			$('.mymenuSlider').animate({
				"margin-right" : '-=500'
			});
		}
	});
	
	/*$('#mymenu').click(function() {
		if (mymenuflag){
			mymenuflag = false;
			var data = '';
			data += '<ul class="nav navbar-nav navbar-right">';
			data += '<li class="hidden">';
			data += '<a href="#page-top"></a>';
			data += '</li>';
			data += '<li id="logout">';
			data += '<a>update</a>';
			data += '</li>';
			data += '<li id="mymenu">';
			data += '<a>My Menu</a>';
			data += '</li>';
			data += '<li class="page-scroll">'
			data += '<a href="#contact">contact</a>';
			data += '</li>'
			data += '</ul>'
			$("#mymenuclick").html(data);
		} else {
			mymenuflag = true;
			$("#mymenuclick").empty();
		}
	});*/
	
	
});

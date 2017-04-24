$(function() {
	$('#menu-home').click(function() {
		sliderInit();
		$("#flag_contact").val("true");
	});

	$('#menu-contact').click(function() {
		sliderInit();
		$("#flag_contact").val("false");
	});

	$('#menu-my-menu').click(function() {
		var mem_id = $("#mem_id").val();
		if ($("#flag_contact").val() == 'true') {
			if ($("#flag_my_menu").val() == 'true') {
				createDefaultMymenu();
				$.ajax({
					type : "POST",
					url : "mymenu",
					data : {
						mem_id : mem_id
					},
					success : function(data) {
						var myMenu = document.getElementById("myMenu2");
						var follow = '';
						follow += "<p onclick='clickFollower();' id='clickFollower'>follower : " + data.fol_follower + "</p>";
						follow += "<p onclick='clickFollowing();' id='clickFollowing'>following : " + data.fol_following + "</p>";
						myMenu.innerHTML = follow;
					},
					error : function(e) {
						console.log(e);
					}
				});
				$('.menu-slider').animate({
					"margin-left" : '+=500'
				});
				$('.map-control').animate({
					"margin-left" : '+=250'
				});
				$("#flag_my_menu").val('false');
			} else {
				$('.menu-slider').animate({
					"margin-left" : '-=500'
				});
				$('.map-control').animate({
					"margin-left" : '-=250'
				});
				$("#flag_my_menu").val('true');
			}
		}
	});

	$('#pollSlider-button').click(function() {
		if ($("#flag_contact").val() == 'true') {
			if ($("#flag_timeline").val() == 'true') {
				$("#flag_timeline").val('false');
				$('#pollSlider-button').animate({
					"margin-right" : '+=500'
				});
				$('.pollSlider').animate({
					"margin-right" : '+=500'
				});
				$('.searchClass').animate({
					"margin-right" : '+=500'
				});
			} else {
				$("#flag_timeline").val('true');
				$('#pollSlider-button').animate({
					"margin-right" : '-=500'
				});
				$('.pollSlider').animate({
					"margin-right" : '-=500'
				});
				$('.searchClass').animate({
					"margin-right" : '-=500'
				});
			}
		}
	});
});

function clickFollower() {
	var mem_id = $("#mem_id").val();
	console.log('asdf');
	$.ajax({
		type : "POST",
		url : "clickFollower",
		success : function(data) {
			var myMenu = document.getElementById("myMenuAll");
			var follow = ""; 
			$.each(data, function(index, item) {
				console.log(item);
				follow = "<div class='user' datano='" + item.mem_id
					+ "'><div class='start'><table class='j-table w3-hoverable'><tr><td rowspan='2'>";
				follow += "<img class='w3-circle' src=download?mem_id="+ item.mem_id +" width='60' height='60'></img></td>"
				follow += '<td>'+item.mem_nickname+'</td>';
				follow += '<td>'+item.mem_id+'</td>';
				follow += "</tr></div>"
			});
			myMenu.innerHTML = follow;
		},
		error : function(e) {
			console.log(e);
		}
	});
}

function clickFollowing() {
	console.log('qwer');
	$.ajax({
		type : "POST",
		url : "clickFollowing",
		success : function(data) {
			var myMenu = document.getElementById("myMenuAll");
			var follow = ""; 
			$.each(data, function(index, item) {
				console.log(item);
				follow = "<div class='user' datano='" + item.mem_id
					+ "'><div class='start'><table class='j-table w3-hoverable'><tr><td rowspan='2'>";
				follow += "<img class='w3-circle' src=download?mem_id="+ item.mem_id +" width='60' height='60'></img></td>"
				follow += '<td>'+item.mem_nickname+'</td>';
				follow += '<td>'+item.mem_id+'</td>';
				follow += "</tr></div>"
			});
			myMenu.innerHTML = follow;
		},
		error : function(e) {
			console.log(e);
		}
	});
}

function sliderInit() {
	if ($("#flag_timeline").val() == 'true') {
	} else {
		$("#flag_timeline").val("true");
		$('#pollSlider-button').animate({
			"margin-right" : '-=500'
		});
		$('.pollSlider').animate({
			"margin-right" : '-=500'
		});
		$('.searchClass').animate({
			"margin-right" : '-=500'
		});
	};

	if ($("#flag_my_menu").val() == 'true') {
	} else {
		$("#flag_my_menu").val("true");
		$('.menu-slider').animate({
			"margin-left" : '-=500'
		});
		$('.map-control').animate({
			"margin-left" : '-=250'
		});
	};
};

function createDefaultMymenu() {
	var myMenu = document.getElementById("menu-slider");
	var myMenuDefault = ''; 
	myMenuDefault += '<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>';
	myMenuDefault += '<h2>My menu</h2>';
	myMenuDefault += '<hr>';
	myMenuDefault += '<div id="myMenuAll" class="row">';
	myMenuDefault += '<div id="profilePhoto" class="row">';
	myMenuDefault += '<c:choose>';
	myMenuDefault += '<c:when test="${mem_savefile == null }">';
	myMenuDefault += '<img class="img-responsive" src="./resources/img/logo.png" alt="">';
	myMenuDefault += '</c:when>';
	myMenuDefault += '<c:otherwise>';
	myMenuDefault += '<img class="img-responsive" src="download?mem_id=${mem_id }" height="150" width="170" alt="profile">';
	myMenuDefault += '</c:otherwise>';
	myMenuDefault += '</c:choose>';
	myMenuDefault += '</div>';
	myMenuDefault += '<div id="myMenu1" class="row">';
	myMenuDefault += '<p><b>${mem_nickname }</b></p>';
	myMenuDefault += '<p><a id="myBtn">update</a></p>';
	myMenuDefault += '</div>';
	myMenuDefault += '<br>';
	myMenuDefault += '<div id="myMenu2" class="row">';
	myMenuDefault += '</div>';
	myMenuDefault += '<div id="write-button" data-flag="false">';
	myMenuDefault += '<img src="./resources/img/pencil.png"/>';
	myMenuDefault += '</div>';
	myMenuDefault += '<div id="makebook-button" data-flag="false">';
	myMenuDefault += '<img src="./resources/img/cart.png"/>';
	myMenuDefault += '</div>';
	myMenuDefault += '</div>';
	myMenuDefault += '<input type="hidden" id="mem_id" value="${mem_id }">';
}
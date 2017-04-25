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
						follow += "<p onclick='clickMyPosts();' id='clickPosts'>My Posts  : " + data.count_board + "</p>";
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

function initUser() {
	var divhtml = "";
	divhtml += "<div id='fixed-menu-bar'><ul class='nav nav-tabs'>";
	divhtml += "<li role='presentation' id='comp-first'><a id='tagcomp'>#tag</a></li>";
	divhtml += "<li role='presentation' class='active' id='comp-second' class='none' ><a id='usercomp'>User</a></li>";
	divhtml += "</ul></div><br><br><br><div id='userList'></div><div id='tagList'></div>";
	$(".pollSlider").html(divhtml);
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
		}
	}
}

var stateNow;
function clickFollower() {
	$.ajax({
		type : "POST",
		url : "clickFollower",
		success : function(data) {
			initUser();
			var myMenu = document.getElementById("myMenuAll");
			var follow = ""; 
			var mem_id = null;
			$.each(data, function(index, item) {
				mem_id = item.mem_id;
				stateNow = null;
				followCheckTd(mem_id);
				follow += "<div class='user'><table class='j-table'><tr><td rowspan='2'>";
				follow += "<img class='w3-circle' src=download?mem_id="+ item.mem_id +" width='90' height='90'></img></td>"
				follow += '<td>'+item.mem_nickname+'</td>'
				follow += '<td id="fol_state" rowspan="2">';
				if(stateNow.length > 0) {
					follow += '<img src="./resources/img/minus.png" onclick="followRemove();" width="25" height="25" fol_id="';
					follow += mem_id;
					follow += '">';
				} else {
					follow += '<img src="./resources/img/plus.png" onclick="followAdd();" width="25" height="25" fol_id="';
					follow += mem_id;
					follow += '">';
				}
				follow += '</tr>';
				follow += '<tr><td>'+item.mem_id+'</td></tr></table></div>';
			});
			$("#userList").show();
			$("#userList").html(follow);
		},
		error : function(e) {
			console.log(e);
		}
	});
}

function followCheckTd(mem_id) {
	$.ajax({
		type : "get",
		url : "followCheck2",
		data : {
			board_id : mem_id
		},
		cache : false,	// 한번에 여러번 실행 시켜주기 위한 key 
		async : false,	// 한번에 여러번 실행 시켜주기 위한 key
		success : function(state){
			stateNow = state;
		},
		error : function(e) {
			console.log(e);
		}
	});
}

function clickFollowing() {
	$.ajax({
		type : "POST",
		url : "clickFollowing",
		success : function(data) {
			initUser();
			var myMenu = document.getElementById("myMenuAll");
			var follow = "";
			follow += "<div class='user'>";
			$.each(data, function(index, item) {
				follow += "<table class='j-table'><tr><td rowspan='2'>";
				follow += "<img class='w3-circle' src=download?mem_id="+ item.mem_id +" width='60' height='60'></img></td>"
				follow += '<td>'+item.mem_nickname+'</td>'
				follow += '<tr><td>'+item.mem_id+'</td></tr></table>';
			});
			follow += "</div>";
			$("#userList").show();
			$("#userList").html(follow);
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

function followAdd() {
	var mem_id = $(this).attr("fol_id");
	console.log(mem_id);
	$("#fol_state").html('<img src="./resources/img/plus.png" onclick="followAdd();" width="25" height="25">');
	$.ajax({
		type : "get",
		url : "followAdd",
		data : {
			board_id : mem_id
		},
		success : function(data){
			followState(board_id);
		},
		error : function(e) {
			console.log(e);
		}
	});
}

function followRemove() {
	var mem_id = $(this).attr("fol_id");
	console.log(mem_id);
	$("#fol_state").html('<img src="./resources/img/minus.png" onclick="followRemove();" width="25" height="25">');
	$.ajax({
		type : "get",
		url : "followRemove",
		data : {
			board_id : mem_id
		},
		success : function(data){
			followState(board_id);
		},
		error : function(e) {
			console.log(e);
		}
	});
}

function clickMyPosts(){
	$('.menu-slider').animate({
		"margin-left" : '-=500'
	});
	$('.map-control').animate({
		"margin-left" : '-=250'
	});
	$("#flag_my_menu").val('true');
	$.ajax({
		type : "POST",
		url : "clickMyPosts",
		success : function(data) {
			boardList();
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
	    			}
	    		};
		},
		error : function(e) {
			console.log(e);
		}
	});
	
};

function clickMyPosts(){
	$('.menu-slider').animate({
		"margin-left" : '-=500'
	});
	$('.map-control').animate({
		"margin-left" : '-=250'
	});
	$("#flag_my_menu").val('true');
	
	
	$.ajax({
		type : "POST",
		url : "clickMyPosts",
		success : function(data) {
			
			boardList();
			
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
	    			}
	    		};
		},
		error : function(e) {
			console.log(e);
		}
	});
};

$(function() {
	$('#menu-home').click(function() {
		$("#flag_contact").val("true");
		sliderInit();
			$('#searchWord').css("visibility","visible");
	});

	$('#menu-contact').click(function() {
		$("#flag_contact").val("false");
		sliderInit();
			$('#searchWord').css("visibility", "hidden");
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
						follow += "<p onclick='clickCart();' id='clickCart'>Cart</p>";
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
				$("#searchWord").animate({					
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
				$("#searchWord").animate({					
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
			$('#searchWord').animate({
				"margin-right" : '+=500'
			});
		} else {
		}
	}
}

function clickUser() {
	var searchUser = $(".user_id").attr("user_id");
	$.ajax({
		type:"GET",
		url : "seachResult",
		data: {
			userId : searchUser								
		},
		success: function(data) {
			boardList();
			$("#searchWord").html("&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+searchUser+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp");
			$("#searchWord").css("background-color","white");
			$("#searchWord").attr("timeLineFlag", true);
			$("#tags").attr("style", "display : none");
		},
		error : function(e) {
			console.log(e);
		}
	});
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
				follow += "<div id='user' class='user' fol_id='";
				follow += mem_id; 	
				follow += "'><table class='j-table'><tr><td rowspan='2'>";
			
	            follow += '<img id="sec-user-search'+index+'" user_id = "'+item.mem_id +'" class="w3-circle user_id" src="download?mem_id='+item.mem_id+'" width="90" height="90"></img>';			
	            follow += '<td style=" width: 200px;border-bottom: 1px solid #e6e0e0;">'+item.mem_nickname+'</td>'
				follow += '<td class="fol_state" rowspan="2">';
				if(stateNow.length > 0) {
					follow += '<img id="folStateImg" class="folStateImg" src="./resources/img/minus.png" onclick="followRemove();" width="25" height="25" fol_id="';
					follow += mem_id;
					follow += '">';
				} else {
					follow += '<img id="folStateImg" class="folStateImg" src="./resources/img/plus.png" onclick="followAdd();" width="25" height="25" fol_id="';
					follow += mem_id;
					follow += '">';
				}
				follow += '</tr>';
				follow += '<tr><td>'+item.mem_id+'</td></tr></table></div>';
				$(document).on("click","#sec-user-search"+index+"",function(){                   
					var searchUser = $("#sec-user-search"+index+"").attr("user_id");
					$("#resultUserlist").val(searchUser);
					console.log(searchUser);
	                $.ajax({
	                	type:"GET",
	                	url : "seachResult",
	                	data: {
	                		userId : searchUser                        
	                	},
	                	success: function(data) {
	                		boardList();
	                		$("#searchWord").html("&nbsp&nbsp"+searchUser+"&nbsp&nbsp");
	                		$("#searchWord").css("background-color","white");
	                		$("#searchWord").attr("timeLineFlag", true);
	                		$("#tags").attr("style", "display : none");
	                		$(".dropdownMenu").css("display","none");
	                	},
	                	error : function(e){
	                		console.log(e);
	                	}
	                });
				});
			});
			$("#userList").show();
			$("#userList").html(follow);
			$('.folStateImg').on('mouseover', function() {
				$(this).attr('clicked','true');
				$(this).parent().attr('clicked','true');
			});
			$('.folStateImg').on('mouseleave', function(){
				$(this).attr('clicked','false');
				$(this).parent().attr('clicked','false');
			});
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
			var mem_id = null;
			$.each(data, function(index, item) {
				mem_id = item.mem_id;
				stateNow = null;
				followCheckTd(mem_id);
				follow += "<div id='user' class='user' fol_id='";
				follow += mem_id; 	
				follow += "'><table class='j-table'><tr><td rowspan='2'>";
	            follow += '<img id="sec-user-search'+index+'" user_id = "'+item.mem_id +'" class="w3-circle user_id" src="download?mem_id='+item.mem_id+'" width="90" height="90"></img>';
				follow += '<td>'+item.mem_nickname+'</td>'
				follow += '<td class="fol_state" rowspan="2">';
				if(stateNow.length > 0) {
					follow += '<img id="folStateImg" class="folStateImg" src="./resources/img/minus.png" onclick="followRemove();" width="25" height="25" fol_id="';
					follow += mem_id;
					follow += '">';
				} else {
					follow += '<img id="folStateImg" class="folStateImg" src="./resources/img/plus.png" onclick="followAdd();" width="25" height="25" fol_id="';
					follow += mem_id;
					follow += '">';
				}
				follow += '</tr>';
				follow += '<tr><td>'+item.mem_id+'</td></tr></table></div>';
		
				$(document).on("click","#sec-user-search"+index+"",function() {                   
					var searchUser = $("#sec-user-search"+index+"").attr("user_id");               
					$("#resultUserlist").val(searchUser);   
						console.log(searchUser);
						$.ajax({
							type:"GET",
							url : "seachResult",
							data: {
								userId : searchUser                        
							},
							success: function(data) {
								boardList();
								$("#searchWord").html("&nbsp&nbsp"+searchUser+"&nbsp&nbsp");
								$("#searchWord").css("background-color","white");
								$("#searchWord").attr("timeLineFlag", true);
								$("#tags").attr("style", "display : none");
								$(".dropdownMenu").css("display","none");
							},
							error : function(e){
								console.log(e);
							}
						});
					});
				});
				$("#userList").show();
				$("#userList").html(follow);
				$('.folStateImg').on('mouseover', function() {
					$(this).attr('clicked','true');
					$(this).parent().attr('clicked','true');
				});
				$('.folStateImg').on('mouseleave', function() {
					$(this).attr('clicked','false');
					$(this).parent().attr('clicked','false');
				});
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
			$('#searchWord').animate({
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
	var mem_id = $('.folStateImg[clicked="true"]').attr("fol_id");
	var folDiv = '';
	folDiv += '<img class="folStateImg" src="./resources/img/minus.png" onclick="followRemove();" width="25" height="25" fol_id="';
	folDiv += mem_id;
	folDiv += '">';
	$(".fol_state[clicked='true']").html(folDiv);
	$.ajax({
		type : "get",
		url : "followAdd",
		data : {
			board_id : mem_id
		}
	});
	$('.folStateImg').on('mouseover', function(){
		$(this).attr('clicked','true');
		$(this).parent().attr('clicked','true');
	});
	$('.folStateImg').on('mouseleave', function(){
		$(this).attr('clicked','false');
		$(this).parent().attr('clicked','false');
	});
}

function followRemove() {
	var mem_id = $('.folStateImg[clicked="true"]').attr("fol_id");
	var folDiv = '';
	folDiv += '<img class="folStateImg" src="./resources/img/plus.png" onclick="followAdd();" width="25" height="25" fol_id="';
	folDiv += mem_id;
	folDiv += '">';
	$(".fol_state[clicked='true']").html(folDiv);
	$.ajax({
		type : "get",
		url : "followRemove",
		data : {
			board_id : mem_id
		}
	});
	$('.folStateImg').on('mouseover', function(){
		$(this).attr('clicked','true');
		$(this).parent().attr('clicked','true');
	});
	$('.folStateImg').on('mouseleave', function(){
		$(this).attr('clicked','false');
		$(this).parent().attr('clicked','false');
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
    				$("#searchWord").animate({					
    					"margin-right" : '+=500'
    				});
    			}
    		};
    		$("#searchWord").html(" &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspMyPost&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp");
    		$("#searchWord").css("background-color","white");
			$("#searchWord").attr("timeLineFlag", true);
			$("#tags").attr("style", "display : none");
		},
		error : function(e) {
			console.log(e);
		}
	});
	
};

function clickCart(){
	$('.menu-slider').animate({
		"margin-left" : '-=500'
	});
	$('.map-control').animate({
		"margin-left" : '-=250'
	});
	$("#flag_my_menu").val('true');
	
	$.ajax({
		type : "POST",
		url : "clickCart",
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
	    			$("#searchWord").animate({					
    					"margin-right" : '+=500'
    				});
	    		}
	    	};
	    	$("#searchWord").html("&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp LikeCart &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp");
	    	$("#searchWord").css("background-color","white");
			$("#searchWord").attr("timeLineFlag", true);
			$("#tags").attr("style", "display : none");
		},
		error : function(e) {
			console.log(e);
		}
	});
};

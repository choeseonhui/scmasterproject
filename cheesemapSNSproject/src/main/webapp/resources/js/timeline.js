function boardList() {
	$.ajax({
		type : "get",
		url : "timeline",
		dataType : "json",
		success : function(data) {
			var mem_id = $("#mem_id").val();
			var html = "";
			$.each(data, function(index, item) {
				$.each(item, function(index2, item2) {
					if(item2.boa_create_date != undefined) {
						html += "<div class='board' datano='" +
							+ item2.boa_id		
							+ "'><div class='start'><table class='j-table'><tr>";
						if(item2.boa_photo_savefile != undefined) {
							html +=	"<td rowspan='3'><img class='w3-circle' id='selectImg' src='"+ item2.boa_photo_savefile +"' width='120' height='120' datano='" +
							+ item2.boa_id		
							+ "'>" +
									"</img></td>";
						} else if(item2.boa_video_savefile != undefined) {
							html +=	"<td rowspan='3'><video src='"+ item2.boa_video_savefile +"' width='120' height='120'  id='selectImg' datano='" +
							+ item2.boa_id		
							+ "' >" +
							"</video></td>";
						}
						else {
							html +=	"<td rowspan='3'><img id='selectImg'  src='./resources/img/logo.png' width='120' height='120' datano='" +
							+ item2.boa_id		
							+ "'></img></td>";
						}
						html += "<td>" + item2.mem_id + "</td>";
						html += "<td>좋아요" + item.boardLike.length + " 코멘트" + item.boardComment.length + "</td></tr>";
						html += "<tr><td align='left' colspan='2'>"
						if(item.boardTag.length > 0) {
							$.each(item.boardTag, function(index3, item3) {
								html += "#<a id='upup'>"+item3.tag_name+"</a>";								
							});
						}
						html += "</td></tr>"
						html += "<tr><td align='right' colspan='2'><i class='glyphicon glyphicon-time'>" + item2.boa_create_date + "</i></td>";
					}
					html += "</tr></table></div></div>";
				});
			});
			$("#timeline_div").html(html);
			$(document).on("click","#selectImg",function(){
				var boa_id=$(this).attr("datano");
				clickBoard(boa_id);
			});
		},
		error : function(e) {
			console.log(e);
		}
	});
}

// 로그인한 id
var loginid=document.getElementById("mem_id").value;
console.log(loginid);
//좋아요 플래그
var flag=0;
var board_id;
var real_board_id;

function clickBoard(boa_id){
	//Get the modal
	var modalBoard = document.getElementById('myModalBoard');
	// Get the <span> element that closes the modal
	var spanBoard = document.getElementsByClassName("close")[1];
	//When the user clicks on <span> (x), close the modal
	spanBoard.onclick = function() {
		$("#replyBoard").html("");
		$("#likeHeart").html("");
		modalBoard.style.display = "none";
	}
	//$(document).ready(function() {
	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
		if (event.target == modalBoard) {
			$("#replyBoard").html("");
			$("#likeHeart").html("");
			modalBoard.style.display = "none";
		}
	}
	//});	
	modalBoard.style.display = "block";
	//좋아요 플래그 초기화
	flag=0;
	//해당 게시글 가져오기
	$.ajax({
		type : "post",
		url : "boardRead",
		data : {
			boa_id : boa_id
		},
		success : function(board){
			//게시글 내용
			board_id = board.mem_id;
			real_board_id = board.boa_id;
			followState(); // 팔로우상태
			$("#asideBoard").html(board.boa_content);
			//게시글 작성자 정보
			searchMember(board.mem_id);
			//좋아요수
			likeRead(board.boa_id);
			//날짜
			$("#time").html(board.boa_create_date);
			//댓글읽기
			replyRead(boa_id);
			//댓글쓰기
			$("#okBtn").off("click");
			$("#okBtn").on("click", function(){
				var comContent=$("#comContent").val();
				console.log(comContent);
				$.ajax({
					type : "post",
					url : "replyWrite",
					data : {
						com_content : comContent,
						mem_id : loginid,
						boa_id : boa_id
					},
					success : function(data){
						if(data==1){
							replyRead(boa_id);
							$("#comContent").val("");
						}
					},
					error : function(e){
						console.log(e);
					}
				});
			});
		},
		error : function(e){
			console.log(e);
		}
	});

}

function searchMember(mem_id){
	//닉네임, 프로필사진
	console.log(mem_id);
	$.ajax({
		type : "get",
		url : "searchMember",
		data : {
			mem_id : mem_id
		},
		success : function(member){
			if(member.mem_savefile != null) {
				$("#profilePhotoBoa").html('<img id="memberPhoto" src="download?mem_id='+ member.mem_id +'">');
			}else{
				$("#profilePhotoBoa").html('<img id="memberPhoto" src="./resources/img/logo.png">');
			}
			$("#nickNameBoa").html("<span>"+member.mem_nickname+"</span>");
		},
		error : function(e) {
		console.log(e);
		}
	});	
}

function followState() {
	$.ajax({
		type : "get",
		url : "followCheck",
		data : {
			board_id : board_id
		},
		success : function(state){
			if(state == 'ing') {
				$("#followState").html('<a id="fol_cancel">-</a>');
			} else if(state == 'yet') {
				$("#followState").html('<a id="fol_add">+</a>');
			} else if(state == 'i') {
				$("#followState").html('<a id="delete_board">X</a>');
			}
			function_fol();
		},
		error : function(e) {
			console.log(e);
		}
	});	
}

function function_fol() {
	$("#fol_cancel").on("click", function() {
		$("#followState").html('<a id="fol_add">+</a>');
		$.ajax({
			type : "get",
			url : "followRemove",
			data : {
				board_id : board_id
			},
			success : function(data){
				followState(board_id);
			},
			error : function(e) {
				console.log(e);
			}
		});
	});
	
	$("#fol_add").on("click", function() {
		$("#followState").html('<a id="fol_cancel">-</a>');
		$.ajax({
			type : "get",
			url : "followAdd",
			data : {
				board_id : board_id
			},
			success : function(data){
				followState(board_id);
			},
			error : function(e) {
				console.log(e);
			}
		});
	});

	$("#delete_board").on("click", function() {
		$.ajax({
			type : "get",
			url : "deleteBoard",
			data : {
				boa_id : real_board_id
			},
			success : function(data){
				var modalBoard = document.getElementById('myModalBoard');
				$("#replyBoard").html("");
				$("#likeHeart").html("");
				modalBoard.style.display = "none";
			},
			error : function(e) {
				console.log(e);
			}
		});
	});
}

function likeRead(boa_id){
	console.log(boa_id);
	$.ajax({
		type : "get",
		url : "getBoardLike",
		data : {
			boa_id : boa_id
		},
		success : function(data){
			console.log(data);
			$("#likeit").html("좋아요  "+data.length+"개");
			$.each(data, function(index, like){
				if(like.mem_id==loginid){
					flag=1;
				}
			});
			//좋아요쓰기
			if(flag==1){
				$("#likeHeart").html("<a href='javascript:clickHeart("+boa_id+")'><img id='heart' src='./resources/img/heartfull.png'></a>");
			}else if(flag==0){
				$("#likeHeart").html("<a href='javascript:clickHeart("+boa_id+")'><img id='heart' src='./resources/img/heart.png'></a>");
			}
		}
		
	});
}

//댓글 읽기
function replyRead(boa_id){
	console.log(boa_id);
	var replyBoard="<ul>";
	$.ajax({
		type : "get",
		url : "getBoaCommentNick",
		data : {
			boa_id : boa_id
		},
		success : function(data){
			console.log(data);
			$("#replyBoard").html(function(){
				$.each(data, function(index, reply){
					replyBoard+="<li><span class='replyNick'>"+reply.MEM_NICKNAME+"</span>"
					+"<span>"+reply.COM_CONTENT;
					if(reply.MEM_ID==loginid){
						replyBoard+="<a href='javascript:delReply("+
						reply.COM_ID+","+reply.BOA_ID+")'>&times;</a></span></li>";
					}else{
						replyBoard+="</span>";
					}
				});
				return replyBoard+"</ul>";	
			});
		}
	});
}

//좋아요 클릭 이벤트 처리
function clickHeart(boa_id){
	console.log(boa_id);
	if(flag==0){
		flag=1;
	}else if(flag==1){
		flag=0;
	}
	$.ajax({
		type : "get",
		url : "likeupdate",
		data : {
			boa_id : boa_id,
			mem_id : loginid,
			flag : flag
		},
		success : function(data){
			if(data==1){
				likeRead(boa_id);
			}
		},
		error : function(e) {
			console.log(e);
			}
	});
}

//댓글삭제
function delReply(com_id, boa_id){
	$.ajax({
		type : "get",
		url : "delReply",
		data : {
			com_id : com_id
		},
		success : function(data){
			if(data==1){
				replyRead(boa_id);
			}
		},
		error : function(e){
			console.log(e);
		}
	});
}

$(function() {
	$(document).on("click", "#timeline_btn", function() {
		boardList();
	});
	
	$(document).on("click","#upup", function(){
		var searchDic = $(this).text();
		searchStart(searchDic);
	});

});

function searchStart(searchWord){
	var divhtml = "";
 	divhtml += "<div id='fixed-menu-bar'><ul class='nav nav-tabs'>";
 	divhtml += "<li role='presentation' class='active' id='comp-first'><a id='tagcomp'>#tag</a></li>";
 	divhtml += "<li role='presentation' id='comp-second' class='none' ><a id='usercomp'>User</a></li>";
 	divhtml += "<li role='presentation' id='comp-third' class='none' ><a id='mymapcomp'>My Map</a></li>";
 	divhtml += "</ul></div><br><br><br><div id='userList'></div><div id='tagList'></div><div id='mymapList'></div>";
 	$(".pollSlider").html(divhtml);

 	var search = searchWord;
	$.ajax({
		type : "GET",	//type of request Method
		url : "search",	//value pf requestMethod
		data :{
			word : search
		},
		 dataType : 'json',
		 	success : function(object){				
				var taglist = {};
				var userlist = {};
				var mymaplist = {};
		 		for(key in object) {
		 			console.log(key);
		 			if (key == "tagList") {
		 				taglist = object[key];
		 			}
		 			if (key =="memberList") {					
		 				userlist = object[key];
		 			}
		 			if (key =="mymapList") {
		 				mymaplist= object[key];
		 			}
		 		}
		 		var taghtml = '';
				if(taglist.length != 0 ){
					$.each(taglist, function() {
						$.map($(this), function(val,index){
							console.log(val.TAG_NAME);
						 	taghtml += '<br><h2><a id="fir-tag-search'+index+'" class="'+val.TAG_NAME+'"> # '+val.TAG_NAME+'</a><h2><br>';
						 	taghtml += '<h5>'+val.COUNT+'개의 게시글이 존재합니다.</h5><hr>';   	   
						 	$(document).on("click", "#fir-tag-search"+index+"", function() {					
						 		var searchTag = $("#fir-tag-search"+index+"").attr("class");
						 		console.log(searchTag);
						 		$.ajax({							
									type:"GET",
									url : "seachResult",
									data: {
									tagName : searchTag								
									},
									success: function(data){
										boardList();
									},
									error : function(e){
										console.log(e);
									}
						 		});
						 	});
						});	
					});
				}else{
					console.log("ssss");
				};
				$("#tagList").show();
				$("#tagList").html(taghtml);
				var userhtml ='';	
				if(userlist.length != 0 ){
					$.each(userlist, function(index, value ) {
						userhtml += '<br><h1><a id="sec-user-search'+index+'" class="'+value.mem_id+'">'+value.mem_id+'<br></a></h1><h5>유저 닉네임 : '+value.mem_nickname+'</h5><hr>';					 
						$(document).on("click","#sec-user-search"+index+"",function(){
							var searchUser = $("#sec-user-search"+index+"").attr("class");					
							$("#resultUserlist").val(searchUser);
							$.ajax({
								type:"GET",
								url : "seachResult",
								data: {
									userId : searchUser								
								},
								success: function(data){
									boardList();
								},
								error : function(e){
									console.log(e);
								}
							});
						});
					});
				} else {
					userhtml += '<h5>해당 하는 유저가  존재 하지 않습니다.</h5>';
				};
				$("#userList").hide();
				$("#userList").html(userhtml);
				var mymaphtml = '';
				if(mymaplist.length != 0){
					$.each(mymaplist, function(index, value) {				
						mymaphtml += '<br><h2><a id="thir-mymap-search'+index+'" class="'+value.tag_name+'">#'+value.tag_name+'</a></h2><br>';
						$(document).on("click","#thir-mymap-search"+index+"",function(){
							var searchMymap= $("#thir-mymap-search"+index+"").attr("class");
							console.log(searchMymap);
							$.ajax({										
								type:"GET",
								url : "seachResult",
								data: {
								mymapTag : searchMymap								
							},
							success: function(data){
								boardList();
							},
							error : function(e){
								console.log(e);
							}
						});
					});
                });
			 }else{
				 mymaphtml += '<h5> 해당 하는 태그가 존재하지 않습니다.</h5>';
			 }
			 $("#mymapList").hide();
			 $("#mymapList").html(mymaphtml);
		},
		error : function(e){
			//ajax 통신 실패시	
			console.log("전체적인 그냥 실패");
			console.log(e);
		}
	});
}

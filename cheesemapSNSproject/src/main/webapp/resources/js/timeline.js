var selectedMarker=[];

function boardList() {
	setTimeout(function(){
		$.ajax({
			type : "get",
			url : "timeline",
			dataType : "json",
			success : function(data) {
				var mem_id = $("#mem_id").val();
				var html = "";
				var boardMarker = [];
				$.each(data, function(index, item) {
					boardMarker.push(item.board);
					$.each(item, function(index2, item2) {
						if(item2.boa_create_date != undefined) {
							html += "<div class='message-item' datano='" +
								+ item2.boa_id
								+ "'><div class='message-inner'><table class='j-table' style=' width: 400px;'><tr style=' color:#a5a5a5;'>";
							if(item2.boa_photo_savefile != undefined) {
								html +=	"<td rowspan='3'><img class='w3-circle selectImg' id='selectImg' src='"+ item2.boa_photo_savefile +"' width='120' height='120' datano='" +
								+ item2.boa_id
								+ "'></img></td>";
							} else if(item2.boa_video_savefile != undefined) {
								html +=	"<td rowspan='3'><video class='selectImg' src='"+ item2.boa_video_savefile +"' width='120' height='120'  id='selectImg' datano='" +
								+ item2.boa_id
								+ "' ></video></td>";
							}
							else {
								html +=	"<td rowspan='3'><img id='selectImg' class='selectImg' src='./resources/img/logo.png' width='120' height='120' datano='" +
								+ item2.boa_id
								+ "'></img></td>";
							}
							$.ajax({
								type : "get",
								url : "searchMember",
								data : {
									mem_id : item2.mem_id
								},
								cache : false,	// 한번에 여러번 실행 시켜주기 위한 key 
								async : false,	// 한번에 여러번 실행 시켜주기 위한 key
								success : function(member){
									html += "<td style='color: #5eb7ce;'>" + member.mem_nickname + "</td>";
								},
								error : function(e) {
								console.log(e);
								}
							});	
							html += "<td>좋아요" + item.boardLike.length + " 코멘트" + item.boardComment.length + "</td></tr>";
							html += "<tr><td align='left' colspan='2' style='border-top: 1px solid #d8d8d8; font-size: 25px;'>";
							if(item.boardTag.length > 0) {
								$.each(item.boardTag, function(index3, item3) {
									html += "#<a id='upup' style='color: #80cee0;'>"+item3.tag_name+"</a>";						
								});
							}
							html += "</td></tr>";
							html += "<tr><td align='right' colspan='2'><i class='glyphicon glyphicon-time'>" + item2.boa_create_date + "</i></td>";
						}
						html += "</tr></table></div></div>";
					});
				});
				$("#timeline_div").html(html);
				$(".selectImg").on("click", function() {
					var boa_id = $(this).attr("datano");
					clickBoard(boa_id);
				});
				$(".selectImg").on("mouseover", function() {
					bangbang($(this).attr("datano"));
				});
				$(".selectImg").on("mouseleave", function() {
					goAwayBangbang();
				});
				$(".selectImg").on('dragstart',function(){
                    console.log('드래그 시작');
                    $('#myBasket_div').attr('data-mouse-in',true);
                    console.log( $('#myBasket_div').attr('data-mouse-in'));
                });
                $(".selectImg").on('dragend',function(){
                    console.log('드래그 끝');
                    if ($('#myBasket_div').attr('data-mouse-in') === 'true') {
                        console.log('바구니에 넣는 액션 성공');
                        var into_basket = $(this).attr('datano');
                        var dupCount = 0;
                        for (var i = 0; i < selectedMarker.length; i++) {
                            if (selectedMarker[i] === into_basket) {
                                dupCount++;
                            }
                        }
                        if (dupCount == 0) {
                            selectedMarker.push(into_basket);
                        }
                        $('#myBasket_div').attr('data-mouse-in',false);
                        var newContent = '';
                        newContent += '장바구니에 ' + selectedMarker.length + '개가 담겨 있어요!';
                        $('#myBasket-content-div').html(newContent);
                        var basketFlag=$("#myBasket-button").attr('basketFlag');
                        if(selectedMarker.length>0&&basketFlag=='true'){
                        	$("#makeMyMapBtn").attr("style", "visibility: visible");
                        }else{
                        	$("#makeMyMapBtn").attr("style", "display: none");
                        }
                    }
                });
			
				//검색어로 마크띄우기 호출
				var timeLineFlag=$("#searchWord").attr("timeLineFlag");
				if(timeLineFlag=='true'){
					setBoardMarker(boardMarker);
				}
			},
			error : function(e) {
				console.log(e);
			}
		});
	}, 50);
}
//마이맵
function mapList(){
	setTimeout(function(){
		$.ajax({
			type : "get",
			url : "timelineMap",
			dataType : "json",
			success : function(mymapList) {
				var html = "";
				$.each(mymapList, function(index, item) {
					html += "<div class='message-item' datano='" + item.map_id + "'><div class='message-inner'><table class='j-table'><tr>";
					html +=	"<td rowspan='3'><img class='w3-circle selectImg' id='selectImg' src='./resources/img/planet-earth.png' width='120' height='120' datano='" +
					+ item.map_id + "'></img></td>";
					html += "<td>" + item.mem_nickname + "</td>";
					html += "<td style=' text-align: left'>";
					if(item.map_tag_list.length > 0) {
						$.each(item.map_tag_list, function(index2, map_tag) {
							html += "#<a id='upup'>"+map_tag+"</a>";						
						});
					}
					html += "</td></tr>";
					html += "<tr><td align='left' colspan='2' style='width: 315px'>"+item.map_content+"</td></tr>";
					html += "<tr><td align='right' colspan='2'><i class='glyphicon glyphicon-time'>" + item.map_create_date + "</i></td>";
					html += "</tr></table></div></div>";
				});
				$("#timeline_div").html(html);
				$(".selectImg").on("click", function() {
					var map_id = $(this).attr("datano");
					clickMyMap(map_id);
				});
			},
			error : function(e){
				console.log(e);
			}
		});
	}, 50);
	
}

function clickMyMap(map_id){
	$.ajax({
		type : "get",
		url : "getBoardListByMapID",
		data : {
			map_id : map_id
		},
		success : function(data){
            console.log(data);
            dataToMapjs(data);
			boardList();
		},
		error : function(e){
			console.log(e);
		}
	});
}


//검색어 태그 지우고 초기화
$("#searchWord").click(function(){
    $(this).attr("timeLineFlag", false);
    $("#searchWord").html("");
    $("#searchWord").css("background-color","");
    $("#tags").attr("style", "visibility: visible");
    refresh(map);
});

// 로그인한 id
var loginid=document.getElementById("mem_id").value;
//좋아요 플래그
var flag=0;
var board_id;
var real_board_id;
var selectedMarker = [];

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
	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
		if (event.target == modalBoard) {
			$("#replyBoard").html("");
			$("#likeHeart").html("");
			modalBoard.style.display = "none";
		}
	}
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
			$("#nickNameBoa").html("<span style='font-size : 18px'>"+member.mem_nickname+"</span>");
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
				$("#followState").html('<a id="fol_cancel"><img src="./resources/img/fol.png" style=" width: 25px; height: 25px;"></a>');
			} else if(state == 'yet') {
				$("#followState").html('<a id="fol_add"><img src="./resources/img/foll.png" style=" width: 30px;"></a>');
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
		startup(searchDic);
	});

});

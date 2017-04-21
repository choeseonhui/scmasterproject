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
							+ "'><div class='start'><table class='j-table w3-hoverable'><tr>";
						if(item2.boa_photo_savefile != undefined) {
							html +=	"<td rowspan='3'><img class='w3-circle' src='"+ item2.boa_photo_savefile +"' width='120' height='120'>" +
									"</img></td>";
						} else if(item2.boa_video_savefile != undefined) {
							html +=	"<td rowspan='3'><video src='"+ item2.boa_video_savefile +"' width='120' height='120'>" +
							"</video></td>";
						}
						else {
							html +=	"<td rowspan='3'><img src='./resources/img/logo.png' width='120' height='120'>" +
							"</img></td>";
						}
						html += "<td>" + item2.mem_id + "</td>";
						html += "<td>좋아요" + item.boardLike.length + " 코멘트" + item.boardComment.length + "</td></tr>";
						html += "<tr><td align='left' colspan='2'>"
						if(item.boardTag.length > 0) {
							$.each(item.boardTag, function(index3, item3) {
								html += "<a>#" + item3.tag_name + " </a>";
							});
						}
						html += "</td></tr>"
						html += "<tr><td align='right' colspan='2'><i class='glyphicon glyphicon-time'>" + item2.boa_create_date + "</i></td>";
					}
					html += "</tr></table></div></div>";
				});
			});
			$("#timeline_div").html(html);
			$(".board").click(function(){
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
//좋아요 플래그
var flag=0;

var board_id;

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
			board_id = board.mem_id;
			console.log(board_id);
			followState();
			//게시글 내용
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
	$.ajax({
		type : "get",
		url : "searchMember",
		data : {
			mem_id : mem_id
		},
		success : function(member){
			if(member.mem_savefile!=null){
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
	
	});
}

function likeRead(boa_id) {
	$.ajax({
		type : "get",
		url : "getBoardLike",
		data : {
			boa_id : boa_id
		},
		success : function(data){
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
	var replyBoard="<ul>";
	$.ajax({
		type : "get",
		url : "getBoaCommentNick",
		data : {
			boa_id : boa_id
		},
		success : function(data){
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
});
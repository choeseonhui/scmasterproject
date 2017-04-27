var select_img;
var bookTitle;

function moveSlider(index){
		//슬라이더 이동
		var willMoveLeft=-(index*1570);
	
		
		$('.slider_panel').animate({
			left : willMoveLeft
		      }, {
		        duration: 500,
		        complete: function () {
		        	$("html, body").animate({ scrollTop: 0 });
		        }
		      });     
		
		/*//컨트롤 버튼의 active 클래를 부여/제거
		$('.control_button[data-index]='+index+']').addClass('active');
		$('.control_button[data-index]!='+index+']').removeClass('active');*/
      }
	

$(document).ready(function(){
	$("#makeBookCancel").on("click", function() {
		location.href="main";
	});
	
	$("#makebook-button").on("click", function() {
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
		location.href="makebook";
	});
	titleDate();
	
	getMyBoard();

	$("#book_ok_btn1").on("click", function() {
		bookTitle = $("#bookTitle").val();
		fromDate = $("#dp2").val();
		toDate = $("#dp3").val();
		sessionStorage.setItem("fromDate", fromDate);
		sessionStorage.setItem("toDate", toDate);
		sessionStorage.setItem("bookTitle", bookTitle);
		
		$.ajax({
			
			type : "get",			//type of request Method
			url : "first",      //value pf requestMethod
			data : {
				fromDate : fromDate, 
				toDate : toDate
			},
				
			dataType:"json",
			success : function(data){				
			    	getMyBoard(data);
			    	sessionStorage.setItem("myBoardList", data);
					moveSlider(1);
			},
			error : function(e){
				//ajax 통신 실패시
			console.log("통신실패");
				console.log(e);
			}
		});
	});
	
	$("#upload").change(function() {
		var formData = new FormData();
		formData.append("file",	$("#upload")[0].files[0]);
			$.ajax({
				type : "POST",
				url : "fileupload",
				data : formData,
				processData : false,
				contentType : false,
				dataType : "text",
				success : function(data) {
					$("#imgDiv").html('<img id="userPhoto" src="' + data + '">');
					
					$("#mainPhoto").val(data);
					sessionStorage.setItem("mainPhoto", data);
				},
				error : function(e) {
					console.log(e);
				}
			});
		});
	
	
	 $(document).on("click","#book_ok_btn2",function(){
		/*previewer();*/
		moveSlider(2);
		console.log("선택한 이미지 boa_id :"+select_img);
		console.log("표지 이미지 :" + $("#mainPhoto").val());
		console.log("유저의 책 이름 : "+ bookTitle);
		sessionStorage.setItem("select_img", select_img);
		window.open("preview", "책 만들기", "width=500, height=500, toolbar=no, scrollbars=no, resizable=no");
	});

});

function titleDate() {
	var d = new Date();

	var month = d.getMonth()+1;
	var day = d.getDate();

	var output = d.getFullYear() + '/' +
	    (month<10 ? '0' : '') + month + '/' +
	    (day<10 ? '0' : '') + day;
	
	var titleDate = '';
	var titleDateDiv = document.getElementById("title_date");
	if(titleDateDiv != undefined){
	
	titleDate += '<div class="col-lg-8 col-lg-offset-2">';
	titleDate += '<div class="row control-group ">';
	

	titleDate += '<div id="firstdiv" class="form-group col-xs-12 floating-label-form-group controls animated" style=" display:none; padding-right: 50px; text-align: center; background-color: white; border-radius :30px; opacity :0.8; border-style:groove;  border: 1.5px dashed rgb(120, 94, 77); ">';
	titleDate += '<hr><div class="bookbook" style="font-size: 22px; color: #e2bfb3;"><span style="font-size:33px; color: #dd9e89">STEP1&nbsp&nbsp&nbsp&nbsp</span>책 제목을 입력해 주세요 </div><hr><br>';
	titleDate += '<div class="inputtitle"><span><p style="font-size: 3em; display: inline;">[&nbsp&nbsp&nbsp&nbsp&nbsp</p><input type="text" name="Title" class="form-control" placeholder="Title" id="bookTitle" required data-validation-required-message="Please Enter Title." style="height: 50px; font-size: 2em;"><p style="font-size: 3em; display: inline;">&nbsp&nbsp&nbsp&nbsp&nbsp]</p><span></div>';
	titleDate += '<p class="help-block text-danger"></p>';
	
	titleDate += '<br><hr><span style="color:lightgray;">책을 만들 게시글 기간을 설정 해 주세요.</span><hr><br>';

	titleDate +='<div class="dateDiv">';
	
	titleDate += '<input type="text" value="2017/01/01" data-date-format="yy/mm/dd" id="dp2" size= "10px">';
	titleDate += '-';
	titleDate += '<input type="text" value="'+output+'" data-date-format="yy/mm/dd" id="dp3"  size= "10px"><br><br>';

	
	titleDate += '</div>';

	titleDate +='<div class="form-group col-xs-12 floating-label-form-group controls" >';
	titleDate +='<hr><span style="color: lightgray;">표지에 들어갈 사진을 선택하세요.</span><hr>';
	titleDate += '<span id="imgDiv">';
	titleDate += '<img id="userPhoto" src="./resources/img/default.jpg"></span><br><br><br><br><br>';
	titleDate += '<input type="file" id="upload" name="originalfile" style="margin: auto;"><br><br><br><br>';
	titleDate +='</div>';


	
	
	titleDate += '<div id="loginalert"></div>';
	
	
     titleDate += '</div>';
     
     
     
	titleDate += '</div><br><br>';
	titleDate += '<div class="row control-group" style ="padding-left: 45%;">';
 	titleDate += '<input type="button" class="btn btn-success btn-lg" id="book_ok_btn1" value="next" >';
 	titleDate += '</div>';


	

	titleDateDiv.innerHTML = titleDate;

	
/*	$(".floating-label-form-group").css("border-right","1px solid black");*/
	

	}
	
	$('#dp2').datepicker({
		dateFormat: 'yy/mm/dd'
	});
	
	$('#dp3').datepicker({
		dateFormat: 'yy/mm/dd'
	});
}

function getMyBoard(myBoardList) {
	select_img = new Array();
	/*var myBoardListDiv = document.getElementById("myBoardList");
	*//*var myBoardList = $("#myBoard").val();*/
	if(myBoardList != null) {
	/*	var board = JSON.parse(myBoardList);*/
		var myBoard = '';
		myBoard += '<div style="margin: auto; border-radius: 30px; width: 430px; text-align: center; color: rgb(226, 191, 179); font-size: 22px; opacity: 0.9; background-color: white;"><span style="font-size:33px; color: #dd9e89">STEP2&nbsp&nbsp</span>책에 넣을 사진을 골라 보세요</div><hr style="border-style: dashed; width: 600px;">';
		myBoard += '<div id="select-img" class="row" style=" text-align: center; background-color: white; border-radius: 30px; opacity: 0.8; border: 1.5px dashed rgb(120, 94, 77);">';
		
		
		$.each(myBoardList, function(index, item) {
			myBoard += '<div class="col-sm-4 portfolio-item" style=" transform: scale(0.8);">';
			myBoard += '<a href="#" class="portfolio-link" data-toggle="modal">';
			myBoard += "<div class='j-caption caption' img_no='"+item.boa_id+"'>";
			myBoard += '<div class="caption-content">';
			myBoard += '<i class="fa fa-check fa-3x"></i>';
			myBoard += '</div>';
			myBoard += '</div>';
			myBoard += "<img src='"+ item.boa_photo_savefile +"' class='j-img-responsive img-responsive'>";
			myBoard += '</a>'
			myBoard += '</div>';
			
		});
		
		myBoard += '</select>';
		myBoard += '</div><br><br>';
		myBoard += '<div class="row control-group" style ="padding-left: 50%;" >';
		myBoard += '<input type="button" class="btn btn-success btn-lg" id="book_ok_btn2" value="next" >';
		myBoard += '</div>';
		
		
		$("#myBoardList").html(myBoard);
	
	}

	$(".j-caption").on("click", function() {
		var select_item = $(this).attr("img_no");
		$(this).css('opacity', '0');
		$(this).toggleClass("selected");
		toMakeBook(select_item);
	});
	
	function toMakeBook(select_item) {
		if(select_img.indexOf(select_item) < 0) {
			select_img.push(select_item);
			$(".selected").css('opacity', '0.5');
		} else {
			select_img.splice(select_img.indexOf(select_item), 1);
		}
	}

	//슬라이더를 움직여주는 함수
	
	//초기 슬라이더 위치 지정
	var positionNUmber=0;
	moveSlider(positionNUmber);

	//맨처음띠용하고나오는거
	$("#firstdiv").addClass('animated bounceInUp');
	$("#firstdiv").css("display","inline");
}

//2단계
function previewer() {
	/*var mem_id = $("#mem_id").val();*/
	var mem_id = sessionStorage.getItem("mem_id");
	var mem_nick = "";
	var like_div = 0;
	var comment_div = 0;
	var total_div = 0;
	var memories_div = 0;
	/*var cover_img=$("#mainPhoto").val();*/
	var cover_img = sessionStorage.getItem("mainPhoto");
	var startDate= sessionStorage.getItem("fromDate");
	var endDate=sessionStorage.getItem("toDate");
	var select_img = sessionStorage.getItem("select_img").split(',');
	var bookTitle = sessionStorage.getItem("bookTitle");
	console.log(select_img);
	
	/*0페이지*/
	$("#cover_img").attr("src", cover_img);
	$("#cover_title").html(bookTitle);
	$("#cover_date").html(startDate+" ~ "+endDate);
	
	
	/*0_5페이지*/
	// 회원정보 불러오기
	 $.ajax({ 
		type : "get", 
		url : "searchMember",
		data : { mem_id : mem_id },
		success : function(member){ 
			/*if(member.mem_savefile!=null){
				$("#profilePhotoBook").html('<img id="memberPhotoBook" src="download?mem_id='+ member.mem_id +'">'); }else{
			 	$("#profilePhotoBook").html('<img id="memberPhotoBook" src="./resources/img/logo.png">'); }*/ 
			mem_nick=member.mem_nickname;
			$("#member_nick").html(mem_nick);
		},
		error : function(e) { console.log(e); }
		});
	 
	 /*1페이지*/
	// 가장 좋아요 많이 한 친구
	$.ajaxSettings.traditional = true;
	$.ajax({
		type : "post",
		url : "bestOfLike",
		contentType : "application/json; charset=utf-8",
		data : JSON.stringify({
			mem_id : mem_id,
			select_img : select_img
		}),
		dataType : "json",
		success : function(bList) {
			$.each(bList, function(index, member) {
				if (member.mem_savefile != null) {
					$("#top" + (index + 1)).html(
							"<img class='top3_img' src='top3Upload//" + member.mem_savefile
									+ "'>");
				} else {
					$("#top" + (index + 1)).html(
							"<img class='top3_img' src='./resources/img/logo.png'>");
				}
				$("#top" + (index + 1) + "_nick").html(member.mem_nickname);
			});
		},
		error : function(e) {
			console.log(e);
		}
	});

	/*2~3페이지*/
	//가장 인기 많은 게시물
	$.ajaxSettings.traditional = true;
	$.ajax({
		type : "post",
		url : "bestOfBoard",
		data : {"select_img" : select_img},
		success : function(bList) {
			$.each(bList, function(index, item) {
				$("#post_top" + (index + 1)+"_like").html(item.boardLike.length);
				$("#post_top" + (index + 1)+"_comment").html(item.boardCommentNick.length);
				$("#post_top" + (index + 1)+"_img").attr("src", item.board.boa_photo_savefile);
				if(index==0){
					$("#post_top" + (index + 1)+"_date").html(item.board.boa_create_date);
					$("#post_top" + (index + 1)+"_content").html(item.board.boa_content);
				}
			});
		},
		error : function(e){
			console.log(e);
		}
	});

	/*4페이지*/
	// 선택한 게시글과 관련정보 불러오기
	// tList : ArrayList<Timeline>,
	// timeLine : timeline, timeVar : board, comment, tag, like
	$.ajaxSettings.traditional = true;
	$.ajax({
		type : "post",
		url : "selectedBoardList",
		data : {"select_img" : select_img},
		success : function(tList) {
			memories_div += tList.length;
			var page4="";
			var page_count = 0;
			$.each(tList, function(index, timeLine) {
				like_div += timeLine.boardLike.length;
				comment_div += timeLine.boardCommentNick.length;
				page4+="<div class='page ver' id='page4_"+index+"'>"
					+"<img class='background_img' src='./resources/img/page6.png'>"
					+"<div class='post_date'>"+timeLine.board.boa_create_date+"</div>" 
					+"<img class='post_img' src="+timeLine.board.boa_photo_savefile+">"
					+"<div class='post_content'>"+timeLine.board.boa_content+"</div>"
					+"<div class='post_hashtag'>";
				$.each(timeLine.boardTag, function(index2, tag){
					page4+="#"+tag.tag_name+"  ";
				});
				page4+="</div>"+"<div class='post_like'>"
					+timeLine.boardLike.length+"</div>"
					+"<div class='post_comment'>"+timeLine.boardCommentNick.length+"</div>"
					+"<div class='post_comment_div'>";
				$.each(timeLine.boardCommentNick, function(index2, comment){
					if(index2<=9){
						page4+="<div class='post_comment_nick'>"+comment.MEM_NICKNAME+"</div>"
						+"<div class='post_comment_content'>"+comment.COM_CONTENT+"</div>";
					}
				});
				page4+="</div></div>";
				page_count++;
			});
			total_div = like_div + comment_div;
			$("#total_div").html(total_div);
			$("#like_div").html(like_div);
			$("#comment_div").html(comment_div);
			$("#memories_div").html(memories_div);
			page4+="<div class='page ver' id='page_last'> <img class='background_img' id='lastpage' src='./resources/img/testPage_last.png'> </div>"; 
			$("#page4").html(page4);
			console.log("페이지 카운트" + page_count);
			sessionStorage.setItem("page_count", page_count);
		},
		error : function(e) {
			console.log(e);
		}
	});
}


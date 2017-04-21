var select_img;
var bookTitle;






function moveSlider(index){
		//슬라이더 이동
		var willMoveLeft=-(index*1570);
		$('.slider_panel').animate({left : willMoveLeft}, 'slow');
		
		/*//컨트롤 버튼의 active 클래를 부여/제거
		$('.control_button[data-index]='+index+']').addClass('active');
		$('.control_button[data-index]!='+index+']').removeClass('active');*/
      }
	

$(document).ready(function(){
	$("#makebook-button").on("click", function() {
		location.href="makebook";
	});
	titleDate();
	
	getMyBoard();

	$("#book_ok_btn1").on("click", function() {
		bookTitle = $("#bookTitle").val();
		fromDate = $("#dp2").val();
		toDate = $("#dp3").val();
		console.log(bookTitle);
		console.log(fromDate);
		console.log(toDate);
		
		$.ajax({
			
			type : "get",			//type of request Method
			url : "first",      //value pf requestMethod
			data : {
				fromDate : fromDate, 
				toDate : toDate},
				
			dataType:"json",
			success : function(data){				
			    	getMyBoard(data);
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
					console.log(data);
					$("#imgDiv").html('<img id="userPhoto" src="' + data + '">');
					
					$("#mainPhoto").val(data);
				},
				error : function(e) {
					console.log(e);
				}
			});
		});
	
	
	 $(document).on("click","#book_ok_btn2",function(){
		moveSlider(2);
		console.log("선택한 이미지 boa_id :"+select_img);
		console.log("표지 이미지 :" + $("#mainPhoto").val());
		console.log("유저의 책 이름 : "+ bookTitle);
		
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
	titleDate += '<div class="row control-group">';
	

	titleDate += '<div class="form-group col-xs-12 floating-label-form-group controls" style="padding-right: 50px; background-color: white; border-radius :30px; opacity :0.9;">';
	titleDate += '<hr><span class="bookbook" style="text-align : center;"><h3> 책 제목을 입력해 주세요(죄송해요 css는 수정중이에요)</h3> </span><hr><br>';
	titleDate += '<div class="inputtitle"><span class="">[&nbsp&nbsp&nbsp&nbsp&nbsp<input type="text" name="Title" class="form-control" placeholder="Title" id="bookTitle" required data-validation-required-message="Please Enter Title.">&nbsp&nbsp&nbsp&nbsp&nbsp]<span></div>';
	titleDate += '<p class="help-block text-danger"></p>';
	
	titleDate += '<br><hr>책을 만들 게시글 기간을 설정 해 주세요.<hr><br>';

	titleDate +='<div class="dateDiv">';
	titleDate += 'From';
	titleDate += '<input type="text" value="2017/01/01" data-date-format="yy/mm/dd" id="dp2" size= "5px">';
	titleDate += 'To';
	titleDate += '<input type="text" value="'+output+'" data-date-format="yy/mm/dd" id="dp3"  size= "5px">';
/*	titleDate += '</div>';*/
	
	
	titleDate += '</div>';

	titleDate +='<div class="form-group col-xs-12 floating-label-form-group controls" >';
	titleDate +='<hr><h3>표지에 들어갈 사진을 선택하세요.</h3><hr>';
	titleDate += '<span id="imgDiv">';
	titleDate += '<img id="userPhoto" src="http://placehold.it/150x170"></span>';
	titleDate += '<input type="file" id="upload" name="originalfile">';
	titleDate +='</div>';

/*	titleDate += '</div>';*/
	
	titleDate += '<br>';
	titleDate += '<div id="loginalert"></div>';

	
	
	titleDate += '</div>';
	titleDate += '</div>';
	

	
	titleDate += '<div class="row control-group" style ="padding-left: 450px;">';
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
	 
	console.log("여기에요");
	console.log(myBoardList);
	select_img = new Array();
	/*var myBoardListDiv = document.getElementById("myBoardList");
	*//*var myBoardList = $("#myBoard").val();*/
	if(myBoardList != null) {
	/*	var board = JSON.parse(myBoardList);*/
		var myBoard = '';
		myBoard += '<hr><h2>사진을 골라주시떼</h2><hr>';
		myBoard += '<div id="select-img" class="row">';
		
		
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
		myBoard += '</div>';
		myBoard += '<div class="row control-group" style ="padding-left: 450px;" >';
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
		console.log(select_img);
	}

	//슬라이더를 움직여주는 함수
	
	//컨트롤 버튼의 클릭 리스너 지정 및 data-index할당
	$('.control_button').each(function(index){
		$(this).attr('data-index', index);
	}).click(function(){
		var index=$(this).attr('data-index');
		moveSlider(index);
	});
	
	//초기 슬라이더 위치 지정
	var positionNUmber=0;
	moveSlider(positionNUmber);
}


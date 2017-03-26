
function joinFormCheck() {
		var idcheck = document.getElementById("idJoin").value;
		if (idcheck.length == 0) {
			alert("id error");
			return false;
		}
		var password = document.getElementById("passwordJoin").value;
		if (password.length == 0) {
			alert("password error");
			return false;
		}
		var passwordcheck = document.getElementById("passwordCheck").value;
		if (passwordcheck.value != password.value) {
			alert("password check error");
			return false;
		}
		var birth = document.getElementById("birth").value;
		if (birth.length == 6) {
			alert("birth error");
			return false;
		}
		var nickname = document.getElementById("nickname").value;
		if (nickname.length == 0) {
			alert("nickname error");
			return false;
		}
		var idTypeCheck=$("#idLabel").attr("check");
		if(idTypeCheck=="no"){
			alert("id error");
			return false;
		}
		var idTypeCheck=$("#nnLabel").attr("check");
		if(nameTypeCheck=="no"){
			alert("nickname error");
			return false;
		}
		return true;
	}

$(document).ready(function(){
/* 파일정보를 임시저장하는 ajax */
	$("#upload").change(function(){
		
		var formData = new FormData();
		formData.append("file",$("#upload")[0].files[0]);
		
		$.ajax({
			type:"POST",					
			url:"fileupload",				
			data:formData,
			processData: false,
		    contentType: false,
			dataType:"text",				
			success:function(data){	
				console.log(data);
				$("#imgDiv").html('<img id="userPhoto" src="'+data+'">');		
				},
			error: function(e){			
				console.log(e);
			}
		});
	});
/* id 중복확인을 하는 ajax */
	$("#idJoin").keyup(function(){
		var idJoin=$(this).val();
		var regExp = /[0-9a-zA-Z][_0-9a-zA-Z-]*@[_0-9a-zA-Z-]+(\.[_0-9a-zA-Z-]+){1,2}$/;
		
		if(idJoin.length>0){
		$.ajax({
			type : "get",
			url : "idCheck",
			data : {
				mem_id : idJoin
			},
			success : function(data){
				// ajax통신 성공 시
				// (중복되는 것이 없으면)반환값이 0
				// (중복되는 것이 있으면)반환값이 1
				if(data==0&&regExp.test(idJoin)){
					$("#idLabel").removeAttr("check");
					$("#idLabel").attr("check", "yes");
					$("#idLabel").text("ID : You can use this email address");
				}else{
					$("#idLabel").removeAttr("check");
					$("#idLabel").attr("check", "no");
					$("#idLabel").text("ID : You can NOT use this email address");
				}
			},
			error : function(e) {
				// ajax통신 실패시
				console.log(e);
			}
		});
		}
	});
/* nickname 중복확인을 하는 ajax */
	$("#nickname").keyup(function(){
		var nickname=$(this).val();
		if(nickname.length>0){
		$.ajax({
			type : "get",
			url : "nicknameCheck",
			data : {
				mem_nickname : nickname
			},
			success : function(data){
				// ajax통신 성공 시
				// (중복되는 것이 없으면)반환값이 0
				// (중복되는 것이 있으면)반환값이 1
				if(data==0){
					$("#nnLabel").removeAttr("check");
					$("#nnLabel").attr("check", "yes");
					$("#nnLabel").text("Nickname : You can use this nickname");
				}else{
					$("#nnLabel").removeAttr("check");
					$("#nnLabel").attr("check", "no");
					$("#nnLabel").text("Nickname : You can NOT use this nickname");
				}
			},
			error : function(e) {
				// ajax통신 실패시
				console.log(e);
			}
		});
		}
	});
	
});
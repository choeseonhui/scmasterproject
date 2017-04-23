$(document).ready(function() {
	// Get the modal
	var modal = document.getElementById('myModal');

	// Get the button that opens the modal
	var btn = document.getElementById("myBtn");

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	// When the user clicks the button, open the modal
	$("#myBtn").click(function(event) {
		event.preventDefault();
		$.ajax({
			type : "get",
			url : "searchMe",
			success : function(mem) {
				modal.style.display = "block";
				document.getElementById("passwordJoin").value = mem.mem_pw;
				document.getElementById("passwordCheck").value = mem.mem_pw;
				document.getElementById("birth").value = mem.mem_birth;
				document.getElementById("nickname").value = mem.mem_nickname;
				if (mem.mem_gender == "Male") {
					$("#genderM").attr("checked", "checked");
				} else {
					$("#genderF").attr("checked", "checked");
				}
				$("#imgDiv").html('<img id="userPhoto" src="download?mem_id='+ mem.mem_id +'">');
			}
		});

	});
	
	//modyfyMember Ajax
	$("#modifyBtn").click(function(event) {
		var formData = new FormData();
		formData.append("mem_id", $("#idJoin").val()); 
		formData.append("mem_pw", $("#passwordJoin").val()); 
		formData.append("mem_birth", $("#birth").val());
		formData.append("mem_nickname", $("#nickname").val());
		formData.append("mem_gender", $("input:radio[name='mem_gender']:checked").val());
		formData.append("file",	$("#upload")[0].files[0]);

		$.ajax({
			type : "post",
			url : "modifyMem",
			processData : false, 
			contentType : false,
			data : formData,
			success : function(data){
				alert(data);
				if(data==1){
					modal.style.display = "none";
				}
			},
			error : function(e) {
				console.log(e);
			}
		});
		
	});
	
	
	//closeAccount
	$("#closeBtn").click(function(event) {
		$.ajax({
			type : "get",
			url : "closeAccount",
			dataType : "text",
			success : function(data){
				alert(data);
				if(data=='1'){
					location.href="logout";
					modal.style.display = "none";
				}
			},
			error : function(e) {
				console.log(e);
			}
		});
		
	});

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
		modal.style.display = "none";
	}

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	}
	
});
	$(document).ready(function() {
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
				},
				error : function(e) {
					console.log(e);
				}
			});
		});
	});
	
function modifyCheck() {
	var password = document.getElementById("passwordJoin").value;
	if (password.length == 0) {
		alert("password error");
		return false;
	}
	var passwordcheck = document.getElementById("passwordCheck").value;
	if (password != passwordcheck) {
		alert("password check error");
		return false;
	}
	var birth = document.getElementById("birth").value;
	if (birth.length != 6 || isNaN(birth) == true) {
		alert("birth error");
		return false;
	}
	var nickname = document.getElementById("nickname").value;
	if (nickname.length == 0) {
		alert("nickname error");
		return false;
	}
	var idTypeCheck = $("#idLabel").attr("check");
	if (idTypeCheck == "no") {
		alert("id error");
		return false;
	}
	var nameTypeCheck = $("#nnLabel").attr("check");
	if (nameTypeCheck == "no") {
		alert("nickname error");
		return false;
	}
	return true;
}

<!DOCTYPE html>
<html lang="en">

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<head>

	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<!-- <meta http-equiv="X-UA-Compatible" content="IE=edge">
	 --><meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="description" content="">
	<meta name="author" content="">
	

	<title>B Class - Cheese Map</title>

	<!-- Bootstrap Core CSS -->
	<link href="./resources/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">

	<!-- Theme CSS -->
	<link href="./resources/css/freelancer.css" rel="stylesheet">

	<!-- Custom Fonts -->
	<link href="./resources/vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
	<link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css">
	<link href="https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic" rel="stylesheet" type="text/css">

	<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
	<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
	<!--[if lt IE 9]>
		<script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
		<script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
	<![endif]-->
	
	<!-- Theme JavaScript -->
	<script src="./resources/js/freelancer.js"></script>

	
	
<script type="text/javascript">
	window.onload = function(){
			
		if(${not empty loginErr}){			
			
			$('#login').get(0).scrollIntoView(true);
			var aaa = document.getElementById("loginalert");
			aaa.innerHTML = "<div class='alert alert-danger'><strong>error!</strong> please input your id and password correctly </div>";
			

		
	}}
	
		
	</script>

	
</head>

	<!-- login Grid Section -->
	<section id="login">
		<div class="container">
			<div class="row">
				<div class="col-lg-12 text-center">
					<h2>Login</h2>
					<hr class="star-primary">
				</div>
			</div>
			<div class="row">
				<div class="col-lg-8 col-lg-offset-2">
					<form action="loginCheck" method="post" onsubmit="return formCheck();">
						<div class="row control-group">
							<div class="form-group col-xs-12 floating-label-form-group controls">
								<label for="id">ID</label>
								<input type="text" name= "id" class="form-control" placeholder="ID" id="id" required data-validation-required-message="Please enter your ID.">
								<p class="help-block text-danger"></p>
							</div>
						</div>
						<div class="row control-group">
							<div class="form-group col-xs-12 floating-label-form-group controls">
								<label for="password">password</label>
								<input type="password" name= "password" class="form-control" placeholder="Password" id="password" required data-validation-required-message="Please enter your Password.">
								<p class="help-block text-danger"></p>
							</div>
						</div>
						
						<div id="loginalert"></div>
						<div class="row control-group">
							<br>
							<input type="submit" class="btn btn-success btn-lg"  id="login" value="Login">
						</div>
					</form>
				</div>
			</div>
		</div>
	</section>


	
	<!-- jQuery -->
	<script src="./resources/vendor/jquery/jquery.min.js"></script>

	<!-- Bootstrap Core JavaScript -->
	<script src="./resources/vendor/bootstrap/js/bootstrap.min.js"></script>

	<!-- Plugin JavaScript -->
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>

	<!-- Contact Form JavaScript -->
	<script src="./resources/js/jqBootstrapValidation.js"></script>
	<script src="./resources/js/contact_me.js"></script>

	<!-- Theme JavaScript -->
	<script src="./resources/js/freelancer.js"></script>
	
</body>

</html>

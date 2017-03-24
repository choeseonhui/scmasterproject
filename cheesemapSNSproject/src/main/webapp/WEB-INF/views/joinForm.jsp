<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="">
<meta name="author" content="">

<title>B Class - Cheese Map</title>

<!-- Bootstrap Core CSS -->
<link href="./resources/vendor/bootstrap/css/bootstrap.min.css"
	rel="stylesheet">

<!-- Theme CSS -->
<link href="./resources/css/freelancer.css" rel="stylesheet">

<!-- Custom Fonts -->
<link href="./resources/vendor/font-awesome/css/font-awesome.min.css"
	rel="stylesheet" type="text/css">
<link href="https://fonts.googleapis.com/css?family=Montserrat:400,700"
	rel="stylesheet" type="text/css">
<link
	href="https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic"
	rel="stylesheet" type="text/css">

<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
<!--[if lt IE 9]>
		<script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
		<script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
	<![endif]-->

<!-- Theme JavaScript -->
<script src="./resources/js/freelancer.js"></script>

<!-- Test JavaScript -->
<script type="text/javascript">
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
		return true;
	}
</script>
</head>

<body>




	<!-- joinform Grid Section -->
	<section id="join">
		<div class="container">
			<div class="row">
				<div class="col-lg-12 text-center">
					<h2>Join Us</h2>
					<hr class="star-primary">
				</div>
			</div>
			<div class="row">
				<div class="col-lg-8 col-lg-offset-2">
					<form action="join" method="post"
						onsubmit="return joinFormCheck();">
						<div class="row control-group">
							<div
								class="form-group col-xs-12 floating-label-form-group controls">
								<label for="id">ID</label> 
								<input type="text"
									class="form-control"
									placeholder="Please enter Your E-mail address as a ID" id="idJoin"
									required
									data-validation-required-message="Please enter your ID.">
									<ul><li class="page-scroll active">
										<a href="checkEmail">Email Authentication</a>
									</li></ul>
								<p class="help-block text-danger"></p>
							</div>
						</div>
						<div class="row control-group">
							<div
								class="form-group col-xs-12 floating-label-form-group controls">
								<label for="password">password</label> <input type="password"
									class="form-control" placeholder="Password" id="passwordJoin"
									required
									data-validation-required-message="Please enter your Password.">
								<p class="help-block text-danger"></p>
							</div>
						</div>
						<div class="row control-group">
							<div
								class="form-group col-xs-12 floating-label-form-group controls">
								<label for="passwordCheck">password check</label> <input
									type="password" class="form-control"
									placeholder="Please enter the same password again"
									id="passwordCheck" required
									data-validation-required-message="Please enter your Password.">
								<p class="help-block text-danger"></p>
							</div>
						</div>
						<div class="row control-group">
							<div
								class="form-group col-xs-12 floating-label-form-group controls">
								<label for="birth">Birth</label> <input type="password"
									class="form-control"
									placeholder="Please enter your date of birth ex)1999-01-01 > 990101"
									id="birth" required
									data-validation-required-message="Please enter your date of birth.">
								<p class="help-block text-danger"></p>
							</div>
						</div>
						<div class="row control-group">
							<div
								class="form-group col-xs-12 floating-label-form-group controls">
								<label for="nickname">Nickname</label> <input type="password"
									class="form-control" placeholder="Nickname" id="nickname"
									required
									data-validation-required-message="Please enter a nickname.">
								<p class="help-block text-danger"></p>
							</div>
						</div>
						<div class="row control-group">
							<div
								class="form-group col-xs-12 floating-label-form-group controls coco">
								<span id="genderSpan">Gender</span> 
								<span id="genderSpan"><input type="radio"	name="gender" value="Male" checked>Male</span> 
								<span id="genderSpan"><input type="radio" name="gender" value="Female">Female</span> 
								<p class="help-block text-danger"></p>
							</div>
						</div>
						<div class="row control-group">
							<br> <input type="submit" class="btn btn-success btn-lg"
								value="Join">
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
	<script
		src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>

	<!-- Contact Form JavaScript -->
	<script src="./resources/js/jqBootstrapValidation.js"></script>
	<script src="./resources/js/contact_me.js"></script>

	<!-- Theme JavaScript -->
	<script src="./resources/js/freelancer.js"></script>

</body>
</html>
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
						onsubmit="return joinFormCheck();" enctype="multipart/form-data">

						<div class="row control-group">
							<div
								class="form-group col-xs-12 floating-label-form-group controls">
								<label for="id" id="idLabel">ID</label> <input type="text"
									class="form-control"
									placeholder="Please enter Your E-mail address as a ID"
									id="idJoin" name="mem_id" required
									data-validation-required-message="Please enter your ID.">
								<p class="help-block text-danger"></p>
							</div>
						</div>
						<div class="row control-group">
							<div
								class="form-group col-xs-12 floating-label-form-group controls">
								<label for="password">password</label> <input type="password"
									class="form-control" placeholder="Password" id="passwordJoin"
									name="mem_pw" required
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
								<label for="birth">Birth</label> <input type="text"
									class="form-control"
									placeholder="Please enter your date of birth ex)1999-01-01 > 990101"
									id="birth" name="mem_birth" required
									data-validation-required-message="Please enter your date of birth.">
								<p class="help-block text-danger"></p>
							</div>
						</div>
						<div class="row control-group">
							<div
								class="form-group col-xs-12 floating-label-form-group controls">
								<label for="nickname" id="nnLabel">Nickname</label> <input
									type="text" class="form-control" placeholder="Nickname"
									id="nickname" name="mem_nickname" required
									data-validation-required-message="Please enter a nickname.">
								<p class="help-block text-danger"></p>
							</div>
						</div>
						<div class="row control-group">
							<div
								class="form-group col-xs-12 floating-label-form-group controls coco">
								<span class="genderSection" id="gender">Gender</span> <span
									class="genderSection gender_sub"><input type="radio"
									name="mem_gender" value="Male" checked>Male</span> <span
									class="genderSection gender_sub"><input type="radio"
									name="mem_gender" value="Female">Female</span> <span> <span
									id="imgDiv"> <img id="userPhoto"
										src="http://placehold.it/150x170">
								</span> <input type="file" id="upload" name="upload">
								</span>
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
	<!-- JS -->
	<script src="./resources/js/joinForm.js"></script>
	<!-- CSS 추가부분-->
	<link href="./resources/css/joinForm.css" rel="stylesheet"
		type="text/css">
</body>
</html>
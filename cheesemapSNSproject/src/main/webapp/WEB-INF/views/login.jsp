<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<html lang="en">
<head>

<title>B Class - Cheese Map</title>
<script type="text/javascript">
window.onload = function(){
	if(${not empty loginErr}){			
		$('#login').get(0).scrollIntoView(true);
		var aaa = document.getElementById("loginalert");
		aaa.innerHTML = "<div class='alert alert-danger'><strong>error!</strong> please input your id and password correctly</div>";
	}
}
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
					<form action="loginCheck" method="post"
						onsubmit="return formCheck();">
						<div class="row control-group">
							<div
								class="form-group col-xs-12 floating-label-form-group controls">
								<label for="id">ID</label> <input type="text" name="id"
									class="form-control" placeholder="ID" id="id" required
									data-validation-required-message="Please enter your ID.">
								<p class="help-block text-danger"></p>
							</div>
						</div>
						<div class="row control-group">
							<div
								class="form-group col-xs-12 floating-label-form-group controls">
								<label for="password">password</label> <input type="password"
									name="password" class="form-control" placeholder="Password"
									id="password" required
									data-validation-required-message="Please enter your Password.">
								<p class="help-block text-danger"></p>
							</div>
						</div>
	
						<div id="loginalert"></div>
						<div class="row control-group">
							<br> <input type="submit" class="btn btn-success btn-lg"
								id="login" value="Login">
						</div>
					</form>
				</div>
			</div>
		</div>
	</section>
</body>
</html>

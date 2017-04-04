<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
	<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
</head>
<body>
		<div class="row">
			<div class="col-lg-12 text-center">
				<h2>Join Us</h2>
				<hr class="star-primary">
			</div>
		</div>
		<div class="row">
			<div class="col-lg-8 col-lg-offset-2">
					<div class="row control-group">
						<div class="form-group col-xs-12 floating-label-form-group controls">
							<label for="id" id="idLabel">ID</label>
							<input type="email" class="form-control" id="idJoin" name="mem_id" value="${mem_id}" readonly>
							<p class="help-block text-danger"></p>
						</div>
					</div>
					<div class="row control-group">
						<div class="form-group col-xs-12 floating-label-form-group controls">
							<label for="password">password</label>
							<input type="password" class="form-control" placeholder="Password" id="passwordJoin" name="mem_pw" required data-validation-required-message="Please enter your Password.">
							<p class="help-block text-danger"></p>
						</div>
					</div>
					<div class="row control-group">
						<div class="form-group col-xs-12 floating-label-form-group controls">
							<label for="passwordCheck">password check</label> <input type="password" class="form-control" placeholder="Please enter the same password again" id="passwordCheck" required data-validation-required-message="Please enter your Password.">
							<p class="help-block text-danger"></p>
						</div>
					</div>
					<div class="row control-group">
						<div class="form-group col-xs-12 floating-label-form-group controls">
							<label for="birth">Birth</label> <input type="text" class="form-control" placeholder="Date of birth" id="birth" name="mem_birth" required data-validation-required-message="Please enter your date of birth.">
							<p class="help-block text-danger"></p>
						</div>
					</div>
					<div class="row control-group">
						<div class="form-group col-xs-12 floating-label-form-group controls">
							<label for="nickname" id="nnLabel">Nickname</label>
							<input type="text" class="form-control" placeholder="Nickname" id="nickname" name="mem_nickname" required data-validation-required-message="Nickname">
							<p class="help-block text-danger"></p>
						</div>
					</div>
					<div class="row control-group">
						<div class="form-group col-xs-12 floating-label-form-group controls coco">
							<span class="genderSection" id="gender">Gender</span>
							<span class="genderSection gender_sub">
							<input type="radio" id="genderM" name="mem_gender" value="Male" >Male</span>
							<span class="genderSection gender_sub">
							<input type="radio"	id="genderF" name="mem_gender" value="Female" >Female</span>
							<span> 
								<span id="imgDiv">
								</span>
								<input type="file" id="upload" name="originalfile">
							</span>
							<p class="help-block text-danger"></p>
						</div>
					</div>
					<br>
					<div class="row control-group">
						<input type="button" id="modifyBtn" class="btn btn-success btn-lg"	onclick="return modifyCheck();" value="Modify">
						<input type="button" id="closeBtn" class="btn btn-success btn-lg"	onclick="return modifyCheck();" value="Close Account">
					</div>
			</div>
		</div>

</body>
</html>
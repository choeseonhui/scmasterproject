		<div class="row">
			<div class="col-lg-12 text-center">
				<h2>Update user info</h2>
				<hr class="star-primary">
			</div>
		</div>
		<div class="row">
			<div class="col-lg-8 col-lg-offset-2">
					<div class="row control-group">
						<div class="form-group col-xs-12 floating-label-form-group controls">
							<label for="id" id="idLabel" class="mdlabel">ID</label>
							<input type="email" class="form-control" id="idJoin" name="mem_id" value="${mem_id}" readonly>
							<p class="help-block text-danger"></p>
						</div>
					</div>
					<div class="row control-group">
						<div class="form-group col-xs-12 floating-label-form-group controls">
							<label for="password" class="mdlabel">password</label>
							<input type="password" class="form-control" placeholder="Password" id="passwordJoin" name="mem_pw" required data-validation-required-message="Please enter your Password.">
							<p class="help-block text-danger"></p>
						</div>
					</div>
					<div class="row control-group">
						<div class="form-group col-xs-12 floating-label-form-group controls">
							<label for="passwordCheck" class="mdlabel">password check</label> <input type="password" class="form-control" placeholder="Please enter the same password again" id="passwordCheck" required data-validation-required-message="Please enter your Password.">
							<p class="help-block text-danger"></p>
						</div>
					</div>
					<div class="row control-group">
						<div class="form-group col-xs-12 floating-label-form-group controls">
							<label for="birth" class="mdlabel">Birth</label> <input type="text" class="form-control" placeholder="Date of birth" id="birth" name="mem_birth" required data-validation-required-message="Please enter your date of birth.">
							<p class="help-block text-danger"></p>
						</div>
					</div>
					<div class="row control-group">
						<div class="form-group col-xs-12 floating-label-form-group controls">
							<label for="nickname" id="nnLabel" class="mdlabel">Nickname</label>
							<input type="text" class="form-control" placeholder="Nickname" id="nickname" name="mem_nickname" required data-validation-required-message="Nickname">
							<p class="help-block text-danger"></p>
						</div>
					</div>
					<div class="row control-group">
						<div class="form-group col-xs-12 floating-label-form-group controls coco">
						<label for="gender" id="genderMD" class="mdlabel">Gender</label>
						<span class="gengen">
							<span class="genderSection gender_sub">
							<input type="radio" id="genderM" name="mem_gender" value="Male" >Male</span>
							<span class="genderSection gender_sub">
							<input type="radio"	id="genderF" name="mem_gender" value="Female" >Female</span>
						</span>
						<span class="gengen">
							<input type="file" id="upload" name="originalfile">
							<span id="imgDiv">
							</span>
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

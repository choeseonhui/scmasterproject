<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ include file="./CheckJSP/loginCheck.jsp"%>

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="">
<meta name="author" content="">

<title>Main - CheeseMap</title>
<!-- animate.css -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css">
	

<!-- W3 CSS -->
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">

<!-- jquery-ui CSS -->
<link rel="stylesheet" href="//code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css">

<!-- Bootstrap Core CSS -->
<link href="./resources/vendor/bootstrap/css/bootstrap.min.css"
	rel="stylesheet">

<!-- Bootstrap Core CSS -->
<link href="./resources/vendor/bootstrap/css/bootstrap.css" rel="stylesheet">

<!-- Theme CSS -->
<link href="./resources/css/freelancer.css" rel="stylesheet">

<!-- board_list -->
<link href="./resources/css/board_list.css" rel="stylesheet">

<!-- my_menu -->
<link href="./resources/css/my_menu.css" rel="stylesheet">

<!-- map -->
<link href="./resources/css/map.css" rel="stylesheet">

<!-- map -->
<link href="./resources/css/table.css" rel="stylesheet">

<!-- myBasket -->
<link href="./resources/css/myBasket.css" rel="stylesheet">

<!-- searchForm.css -->
<link href="./resources/css/searchForm.css" rel="stylesheet">

<!--  autocomplete.css -->

<link href="./resources/css/autocomplete.css" rel="stylesheet">

<link href="./resources/css/timeline.css" rel="stylesheet">
<!-- Custom Fonts -->
<link href="./resources/vendor/font-awesome/css/font-awesome.min.css"
	rel="stylesheet" type="text/css">
<link href="https://fonts.googleapis.com/css?family=Montserrat:400,700"
	rel="stylesheet" type="text/css">
<link
	href="https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic"
	rel="stylesheet" type="text/css">

<!-- modifyMem -->
<link href="./resources/css/modifyMem.css" rel="stylesheet">
<link href="./resources/css/joinForm.css" rel="stylesheet">

<!-- boardRead -->
<link href="./resources/css/boardRead.css" rel="stylesheet">

<!-- makeMap -->
<link href="./resources/css/makeMap.css" rel="stylesheet">

<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
<!--[if lt IE 9]>
				<script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
				<script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
			<![endif]-->

<style>
html{
overflow : hidden;
}
</style>
</head>
<body id="page-top" class="index">
	<div id="skipnav">
		<a href="#maincontent">Skip to main content</a>
	</div>

	<!-- Navigation -->
	<nav id="mainNav"
		class="navbar navbar-default navbar-fixed-top navbar-custom">
		<div class="container">
			<!-- Brand and toggle get grouped for better mobile display -->
			<div class="navbar-header page-scroll">
				<button type="button" class="navbar-toggle" data-toggle="collapse"
					data-target="#bs-example-navbar-collapse-1">
					<span class="sr-only">Toggle navigation</span> Menu <i
						class="fa fa-bars"></i>
				</button>
				<a id="menu-home" class="navbar-brand" href="#page-top">We Are
					Cheese</a>
			</div>

			<!-- Collect the nav links, forms, and other content for toggling -->
			<div class="collapse navbar-collapse"
				id="bs-example-navbar-collapse-1">
				<ul class="nav navbar-nav navbar-right">
					<li class="hidden"><a href="#page-top"></a></li>
					<li><a href="#" id="logout">logout</a></li>
					<li><a id="menu-my-menu">My Menu</a></li>
					<li class="page-scroll"><a id="menu-contact" href="#contact">contact</a></li>
				</ul>
			</div>
			<!-- /.navbar-collapse -->
		</div>
		<!-- /.container-fluid -->
	</nav>
	
	
	
<!-- hidden  -->
<input type="hidden" id="flag_my_menu" value="true">
<input type="hidden" id="flag_timeline" value="true">
<input type="hidden" id="flag_contact" value="true">
	
<input type="hidden" id="hide_flag" value="true">
<input type="hidden" id="called" value="true">

	<!-- Header -->
	<header>

		<!-- map  -->
		<div id="map"></div>
		
		<input type="hidden" id="firstLoading" value="true">

		<div id="style-selector-control" class="map-control">
			<select id="style-selector" class="selector-control">
				<option value="default">Default</option>
				<option value="silver">Silver</option>
				<option value="night">Night mode</option>
				<option value="retro">Retro</option>
				<option value="hiding" selected="selected">Hide features</option>
			</select>
		</div>

		<!-- menu btn -->
		<div id="pollSlider-button">
			<h1 id="timeline_btn">&#9776;</h1>
		</div>
		
		<!-- 장소 검색창 -->
		 <input id="pac-input" class="controls" type="text" placeholder="Search Box">
		
		<!-- search -->
		<div class="row">
			<div class="searchClass">
					<a id="searchWord" timeLineFlag="false" href="#"></a>
				<div class="input-group">
					<input type="text" class="search_input_form" placeholder="search" id="tags">
					<div class="dropdownMenu" style=" width :180px; position: absolute; float: left; margin-top: -50px; width:auto;  max-height: 200px;overflow-y: auto;  overflow-x: hidden; border-radius:3px; box-shadow :0 0 5px rgba(0,0,0,.0975);background:#fff; top:100px;">     
						</button>
					</span>
					
				</div>
				<!-- /input-group -->
				<!-- <input type="text" id="autocomplete"> -->
			</div>
			<!-- /.col-lg-6 -->
		</div>
		
		<!-- 바구니바구니비구니 -->
            <div id="myBasket_div">
                <div id="myBasket-exit-div">
                    <img id="myBasket-exit-button" src="./resources/img/delete-button.png">
                </div>
                <div id="myBasket-content-div">
                    지금 아무것도 없어요!
                </div>
            </div>

		<!-- timeline -->
		<div id="timeline_div" class="pollSlider"></div>
		
		<!-- write form -->
		<div id="write-slider"></div>

        <!-- My Menu -->
		<div id="menu-slider" class="menu-slider">
			<jsp:include page="myMenu.jsp" flush="true"></jsp:include>
		</div>

		<!-- 회원정보수정 팝업 -->
		<!-- The Modal -->
		<div id="myModal" class="modal">
		<!-- Modal content -->
			<div class="modal-content modalBoard">
				<span class="close">&times;</span>
				<jsp:include page="modifyMem.jsp" flush="true"></jsp:include>
			</div>
		</div>
		
		<!-- 게시판 팝업 -->
		<!-- The Modal -->
		<div id="myModalBoard" class="modal">
		<!-- Modal content -->
			<div class="modal-content modalBoard">
				<span class="close">&times;</span>
				<jsp:include page="boardRead.jsp" flush="true"></jsp:include>
			</div>
		</div>
		
		<!-- 장바구니 팝업 -->
		<!-- The Modal -->
		<div id="myModalBasket" class="modal">
		<!-- Modal content -->
			<div class="modal-content modalBasket">
				<span class="close">&times;</span>
				<jsp:include page="makeMap.jsp" flush="true"></jsp:include>
			</div>
		</div>
		<input type="button" id="makeMyMapBtn" onclick="makeMyMap" class="btn btn-success btn-lg" style="display : none" value="makeMyMap:D">
		
		<!--  main div -->
		<div class="container" id="maincontent" tabindex="-1">
			<div class="row">
				<div class="col-lg-12">
					<div class="intro-text">
						<h1 class="name">WE ARE CHEESE</h1>
					</div>
				</div>
			</div>
		</div>
	</header>

	<!-- Contact Section -->
	<section id="contact">
		<div class="container">
			<div class="row">
				<div class="col-lg-12 text-center">
					<h2>Contact Me</h2>
					<hr class="star-primary">
				</div>
			</div>
			<div class="row">
				<div class="col-lg-8 col-lg-offset-2">
					<!-- To configure the contact form email address, go to mail/contact_me.php and update the email address in the PHP file on line 19. -->
					<!-- The form should work on most web servers, but if the form is not working you may need to configure your web server differently. -->
					<form name="sentMessage" id="contactForm" novalidate>
						<div class="row control-group">
							<div
								class="form-group col-xs-12 floating-label-form-group controls">
								<label for="name">Subject</label> <input type="text"
									class="form-control" placeholder="Subject" id="subject"
									required
									data-validation-required-message="Please enter the subject of this mail.">
								<p class="help-block text-danger"></p>
							</div>
						</div>
						<div class="row control-group">
							<div
								class="form-group col-xs-12 floating-label-form-group controls">
								<label for="email">Email Address</label> <input type="email"
									class="form-control" placeholder="Email Address" id="email"
									required
									data-validation-required-message="Please enter your email address.">
								<p class="help-block text-danger"></p>
							</div>
						</div>
						<div class="row control-group">
							<div
								class="form-group col-xs-12 floating-label-form-group controls">
								<label for="message">Message</label>
								<textarea rows="5" class="form-control" placeholder="Message"
									id="message" required
									data-validation-required-message="Please enter a message."></textarea>
								<p class="help-block text-danger"></p>
							</div>
						</div>
						<br>
						<div id="success"></div>
						<div class="row">
							<div class="form-group col-xs-12">
								<button type="button" id="sendMsg"
									class="btn btn-success btn-lg">Send</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	</section>

	<!-- Footer -->
	<footer class="text-center">
		<div class="footer-above">
			<div class="container">
				<div class="row">
					<div class="footer-col col-md-4">
						<h3>Location</h3>
						<p>Seoul Gangnam-gu Samseong-dong Trade Center COEX</p>
					</div>
					<div class="footer-col col-md-4">
						<h3>Around the Web</h3>
						<ul class="list-inline">
							<li><a href="http://facebook.com/"
								class="btn-social btn-outline"> <span class="sr-only">Facebook</span><i
									class="fa fa-fw fa-facebook"></i></a></li>
							<li><a href="http://plus.google.com/"
								class="btn-social btn-outline"> <span class="sr-only">Google
										Plus</span><i class="fa fa-fw fa-google-plus"></i></a></li>
							<li><a href="http://twitter.com/"
								class="btn-social btn-outline"> <span class="sr-only">Twitter</span><i
									class="fa fa-fw fa-twitter"></i></a></li>
							<li><a href="http://www.instagram.com/"
								class="btn-social btn-outline"> <span class="sr-only">Instagram</span><i
									class="fa fa-fw fa-linkedin"></i></a></li>
						</ul>
					</div>
					<div class="footer-col col-md-4">
						<h3>About Cheese Member</h3>
						<p>Namkung JI-woong / Lee Soo Kyoung / Oh Tae Gwan / Choi Seon
							Hee</p>
					</div>
				</div>
			</div>
		</div>
		<div class="footer-below">
			<div class="container">
				<div class="row">
					<div class="col-lg-12">Copyright &copy; Your Website 2017</div>
				</div>
			</div>
		</div>
	</footer>

	<!-- jQuery -->
	<script src="./resources/vendor/jquery/jquery.min.js"></script>
	
	
	<!--search  -->
	<script src="https://code.jquery.com/jquery-1.12.4.js"></script>
  <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
	
	

	<!-- Bootstrap Core JavaScript -->
	<script src="./resources/vendor/bootstrap/js/bootstrap.min.js"></script>

	<!-- Plugin JavaScript -->
	<script
		src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>

	<!-- Contact Form JavaScript -->
	<script src="./resources/js/jqBootstrapValidation.js"></script>
	<script src="./resources/js/contact_me.js"></script>

	<!-- main.js -->
	<script src="./resources/js/main.js"></script>
	<script src="//code.jquery.com/ui/1.11.4/jquery-ui.min.js"></script>

	<!-- map JavaScript -->
	<script	src="https://maps.googleapis.com/maps/api/js?key=AIzaSyApHkc_70xfMcN5SF0_8T6uNpspm-GXyDo&callback=initMap&libraries=places&language=ja&region=JP" async defer></script>
	<script src="./resources/js/markerclusterer.js"></script>
	<script src="./resources/js/map.js"></script>

	<!-- Login JavaScript -->
	<script src="./resources/js/login.js"></script>

	<!-- Theme JavaScript -->
	<script src="./resources/js/freelancer.js"></script>

	<!-- Modify JavaScript -->
	<script src="./resources/js/modifyMem.js"></script>

	<!-- logout.js -->
	<script	src="https://cdnjs.cloudflare.com/ajax/libs/bootbox.js/4.4.0/bootbox.min.js"></script>
	<script src="./resources/js/logout.js"></script>
	
	<!--search.js  -->
	<script src="./resources/js/search.js"></script>
	
	<!-- timeline JavaScript -->
	<script src="./resources/js/timeline.js"></script>
	
	<!-- makebook JavaScript -->
	<script src="./resources/js/makebook.js"></script>
	
	<!-- myBasket JavaScript -->
	<script src="./resources/js/myBasket.js"></script>
	
	<!-- makeMap JavaScript -->
	<script src="./resources/js/makeMap.js"></script>
	
	<!--  auto compelete -->
	<script src="./resources/vendor/jquery/jquery.autocomplete.js"></script>
	<script src="./resources/vendor/jquery/jquery.autocomplete.min.js"></script>
	<!-- hashtag -->
	<script src="./resources/js/autosize.min.js"></script>
	<script src="./resources/js/jquery.hashtags.js"></script>
</body>
</html>

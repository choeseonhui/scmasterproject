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

    <title>MakeBook - Cheese Map</title>




<link rel="stylesheet" href="http://fonts.googleapis.com/earlyaccess/nanumbrushscript.css">
<!-- animate.css -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css">

  
  
    <!-- Bootstrap Core CSS -->
    <link href="./resources/vendor/bootstrap/css/bootstrap.css" rel="stylesheet">

    <!-- Theme CSS -->
    <link href="./resources/css/freelancer.css" rel="stylesheet">

	<!-- makebook CSS -->
	<link href="./resources/css/makebook.css" rel="stylesheet">
	
	<!-- jquery-ui CSS -->
	<link rel="stylesheet" href="//code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css">

<!--  date Picker-->
    <link rel="stylesheet" type="text/css" href="./resources/css/datepicker3.css" />


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
    
<style>
@import url(http://fonts.googleapis.com/earlyaccess/jejugothic.css); 

html{
	overflow-x : hidden;
	overflow-y : auto;
	}
	
body{
font-family: 'Jeju Gothic', serif; }
#preview{
	overflow-x : hidden;
	overflow-y : auto;
}
</style>
</head>

<body id="page-top" class="index">
	<div id="skipnav">
		<a href="#maincontent">Skip to main content</a>
	</div>
    <!-- Navigation -->
    <nav id="mainNav" class="navbar navbar-default navbar-fixed-top navbar-custom">
        <div class="container">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header page-scroll">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span class="sr-only">Toggle navigation</span> Menu <i class="fa fa-bars"></i>
                </button>
                <a class="navbar-brand" href="#page-top">WE ARE CHEESE</a>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
			<div class="collapse navbar-collapse"
				id="bs-example-navbar-collapse-1">
				<ul class="nav navbar-nav navbar-right">
					<li class="hidden"><a href="#page-top"></a></li>
					<li><a href="#" id="makeBookCancel">cancel</a></li>
				</ul>
			</div>
            <!-- /.navbar-collapse -->
        </div>
        <!-- /.container-fluid -->
    </nav>

 
 <!-- Portfolio Grid Section -->
    <section id="portfolio">
        <div class="row">
            <div class="col-lg-12 text-center">
            	<hr class="star-primary">
                <h2 style="color: white; opacity: 0.8;">Make Book</h2>
                <hr class="star-primary">
                 <p style="color: #E3E3E3 ">가장 아름다운 책을 당신에게 선물하세요!</p>
            </div>
        </div>
        <div class="animation_canvas">
        
        <div class="slider_panel">
			<div id="title_date" class="slider_form"></div>
       		<div id="myBoardList" class="container slider_form"></div>
			<div id="preview" class="slider_form">
				<jsp:include page="preview1.jsp" flush="true"></jsp:include>
			</div>
			<div id="finishBk" class="slider_form"></div>
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
							<li>
								<a href="http://facebook.com/" class="btn-social btn-outline">
									<span class="sr-only">Facebook</span>
									<i class="fa fa-fw fa-facebook"></i>
								</a>
							</li>
							<li>
								<a href="http://plus.google.com/" class="btn-social btn-outline">
									<span class="sr-only">Google Plus</span>
									<i class="fa fa-fw fa-google-plus"></i>
								</a>
							</li>
							<li>
								<a href="http://twitter.com/" class="btn-social btn-outline">
									<span class="sr-only">Twitter</span>
									<i class="fa fa-fw fa-twitter"></i>
								</a>
							</li>
							<li>
								<a href="http://www.instagram.com/" class="btn-social btn-outline">
									<span class="sr-only">Instagram</span>
									<i class="fa fa-fw fa-linkedin"></i>
								</a>
							</li>
						</ul>
					</div>
					<div class="footer-col col-md-4">
						<h3>About Cheese Member</h3>
						<p>Namkung JI-woong / Lee Soo Kyoung / Oh Tae Gwan / Choi Seon Hee</p>
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

    <!-- Scroll to Top Button (Only visible on small and extra-small screen sizes) -->
    <div class="scroll-top page-scroll hidden-sm hidden-xs hidden-lg hidden-md">
        <a class="btn btn-primary" href="#page-top">
            <i class="fa fa-chevron-up"></i>
        </a>
    </div>

    <!-- jQuery -->
    <script src="./resources/vendor/jquery/jquery.min.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="./resources/vendor/bootstrap/js/bootstrap.min.js"></script>

<!-- ssss -->
<script type="text/javascript" src="./resources/js/bootstrap-datepicker.js"></script>
<script type="text/javascript" src="./resources/js/bootstrap-datepicker.kr.js"></script>


    <!-- Plugin JavaScript -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>

    <!-- Contact Form JavaScript -->
    <script src="./resources/js/jqBootstrapValidation.js"></script>
    <script src="./resources/js/contact_me.js"></script>

   <!-- animated  -->
<script src="./resources/js/fullclip.js"></script>

    <!-- Theme JavaScript -->
    <script src="./resources/js/freelancer.min.js"></script>
    
    <!-- MakeBook JavaScript -->
    <script	src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.2/jspdf.debug.js"></script>
	<script src="./resources/js/html2canvas.js"></script>
    <script src="./resources/js/makebook.js"></script>
    
    <!-- jquery JavaScript -->
    <script src="//code.jquery.com/jquery.min.js"></script>
    <script src="//code.jquery.com/ui/1.11.4/jquery-ui.min.js"></script>

	<input type="hidden" id="myBoard" value='${myBoard }'>
	<input type="hidden" id="mainPhoto">
	

	<input type="hidden" id="mem_id" value="${mem_id}">
	
	
</body>

</html>

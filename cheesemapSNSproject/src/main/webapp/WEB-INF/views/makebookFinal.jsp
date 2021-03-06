<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>MakeBook - Cheese Map</title>
    
    <!-- pdf -->
	<link href="./resources/css/wow_book.css" rel="stylesheet">

    <!-- 부트스트랩 통합 CSS -->
    <link href="./resources/css/makebookFinal.css" rel="stylesheet">

	<!-- jquery-ui CSS -->
	<link rel="stylesheet" href="//code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css">

    <!-- Custom Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic" rel="stylesheet" type="text/css">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
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
			<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
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
				<p style="color: #E3E3E3">가장 아름다운 책을 당신에게 선물하세요!</p>
			</div>
		</div>
		<div id="mybook"></div>
		<button class="btn" id="pdf_download" type="submit">PDF로 보관하기</button>
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

	<!-- Plugin JavaScript -->
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>

	<!-- Contact Form JavaScript -->
	<script src="./resources/js/jqBootstrapValidation.js"></script>
	<script src="./resources/js/contact_me.js"></script>

	<!-- Theme JavaScript -->
	<script src="./resources/js/freelancer.min.js"></script>

	<!-- jQuery -->
	<script src="./resources/vendor/jquery/jquery.min.js"></script>

	<!-- Bootstrap Core JavaScript -->
	<script src="./resources/vendor/bootstrap/js/bootstrap.min.js"></script>

	<!-- Theme JavaScript -->
	<script src="./resources/js/freelancer.min.js"></script>
	
	<!-- pdf JavaScript -->
	<script src="./resources/js/wow_book.min.js"></script>
	
	<script>
	var userid = sessionStorage.getItem('mem_id');
	
	$(document).ready(function(){
		var count = ${ count};
		 var userid = sessionStorage.getItem("mem_id");
		 var book = "";
			for (var i = 1; i <= count; i++) {
				book += "<div><img src='userUpload/" + userid + "_" + i + ".png' width='637' height='900'></div>";
			}
			$('#mybook').html(book);
			$('#mybook').wowBook({
				height: 900,
				width: 1273,
				flipSound: false,
				slideShow: false
			});
			
			$('#pdf_download').click(function(){
				book_download();
			});
			
	});
	//final_url
	function book_download(){
		var url = 'userUpload/';
		var filename = userid + ".pdf";
		var final_url = url + filename;
		window.open(final_url, "MybookPDF", "left=500, width=500, height=750, toolbar=no, scrollbars=yes, resizable=yes");
	}
 
</script>
<script type="text/javascript">

$(function(){
	$("#makeBookCancel").on("click", function() {
		location.href="main";
	});
});


</script>
</body>
</html>

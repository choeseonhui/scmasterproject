<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="ko">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no">
		<meta name="keywords" content="">
		<meta name="description" content="">
		<title>Cheese - MAKE BOOK</title>
		<!--[if lt IE 9]>
		<script src="../../js/html5shiv.min.js"></script>
		<script src="../../js/respond.min.js"></script>
		<![endif]-->
		<link rel="stylesheet" href="./resources/css/makebook.css" />
		<script type="text/javascript" src="./resources/js/makebook.js"></script>
		<script src="./resources/js/makebookEtc.js"></script>
	</head>
	
	<body>
		<header>
			<h1>TITLE</h1>
			
			<nav><!-- load common.html .nav --><script type="text/javascript" src="/js/gnb_nav.js"></script></nav>
		</header>
		
		<!-- page -->
		<section class="container bookSetting">
			
			<!-- stepbar -->
			<div class="bar_step">
				<ul class="wrap_step">
					<li class="btn_pre_step">
						<a href="/html/logbook/intro.html">
							<span>PREV</span>
						</a>
					</li>
					<li class="step step1 active">
						<span class="progress"> </span>
						<div>Title</div>
					</li>
					<li class="step step2">
						<span class="progress"> </span>
						<div>Select Item</div>
					</li>
					<li class="step step3">
						<span class="progress"> </span>
						<div>Layout</div>
					</li>
					<li class="btn_next_step">
						<a href="javascript:void(0)">
							<span>NEXT</span>
						</a>
					</li>
				</ul>
			</div>
			<!-- //stepbar -->
			
			<div class="bar_setting"><script type="text/javascript" src="/js/gnb_logbook.js"></script></div>
			
			<!-- edit -->
			<section class="editArea">
				<div>
					<aside>
						<div class="wrap_profile change_user">
							<div class="inner_profile">
								<div class="centered ph_img">
									<!-- <img src="https://goo.gl/uZKVBR" alt="프로필 이미지" /> -->
								</div>
							</div>
						</div>
						
						<div class="sns_name name">계정을 선택해주세요.</div>
					</aside>
					
					<section class="set_book">
						
						<dl class="set_title">
							<dt>
								로그북의 제목을 입력해주세요.
								<small>
									미입력 시 'BOOK OF LIFE LOG' 로 자동 입력됩니다.<br>
									이모티콘(그림문자)을 넣을 경우 실제 책에는 표현되지 않을 수 있습니다.
								</small>
							</dt>
							<dd>
								<input type="text" id="tf_cover_title" name="tf_cover_title" value="" class="log_tit" placeholder="책의 제목으로 사용됩니다. (한글 최대 10자/영문 최대 20자 이내)" />
							</dd>
						</dl>

						<dl class="set_term">
							<dt>로그북을 제작할 기간을 지정해주세요.</dt>
							<dd>
								<input type="hidden" id="tf_frdate_max" name="tf_frdate_max" value="" />
								<input type="hidden" id="tf_todate_max" name="tf_todate_max" value="" />
								<input type="hidden" id="tf_frdate_r" name="tf_frdate_r" value="" />
								<input type="hidden" id="tf_todate_r" name="tf_todate_r" value="" />
								<input type="hidden" id="before_frdate" name="before_frdate" value="" />
								<input type="hidden" id="before_todate" name="before_todate" value="" />
								<input type="text" id="tf_frdate" name="tf_frdate" class="datepicker " value="" readonly>
								~
								<input type="text" id="tf_todate" name="tf_todate" class="datepicker " value="" readonly>
							</dd>
						</dl>
						
						<!-- <dl class="set_date">
							<dt>
								커버와 내지에 삽입되는 날짜 표시를 설정할 수 있습니다.
								<small>선택하신 기간과 책에 표시되는 날짜를 다르게 설정하고 싶은 경우 변경해주세요.</small>
							</dt>
							<dd>
								<div>
									<input id="term_sel" type="radio" name="set_term_cover" value="S" disabled="disabled" checked="checked" />
	  								<label for="term_sel"><span> </span>선택 기간 <i class="opt_term_show_S">(2015-01-01 - 2015-12-31)</i></label>
  									<small>· 위에 선택한 로그북 제작 기간과 동일한 날짜입니다.</small>
  								</div>
  								<div>
	  								<input id="term_real" type="radio" name="set_term_cover" value="R" disabled="disabled" />
	  								<label for="term_real"><span> </span>실제 기간 <i class="opt_term_show_R">(2015-01-05 - 2015-12-25)</i></label>
	  								<small>· 선택한 기간 중 (처음~마지막) 게시물이 작성된 날짜입니다.</small>
	  							</div>
							</dd>
						</dl>
						
						<div class="ex_date">
							<img src="/img/info/log_setting.jpg" alt="커버 내 날짜 표시 영역">
							<p>
								커버 내 날짜가 표시되는 부분입니다.<br>
								각 표지별 날짜 스타일(크기/위치)은 상이하며,<br>
								스타일 선택 화면에서 자세히 확인할 수 있습니다.
							</p>
						</div> -->
						
					</section>
					
				</div>
				
				
			</section>
			<!-- //edit -->
			
			
		</section>
		<!-- //page-->

		<script type="text/javascript">bNeedLogin = true; </script>
		<script src="./resources/js/makebook.js"></script>
		<script src="./resources/js/makebookSetting.js"></script>
		
	</body>
</html>

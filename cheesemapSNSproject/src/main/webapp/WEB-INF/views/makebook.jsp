<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>싸이Book</title>

<meta property="og:title" content="싸이월드속 감성을 한권의 책으로" />
<meta property="og:url" content="http://www.cyworld.com/42book/" />
<meta property="og:description" content="미니홈피, 싸이블로그에 있던 담아둔 소중한 기록을 싸이eBook(PDF)과 싸이Book(종이책)으로 만들어 평~생 보관하세요" />
<meta property="og:type" content="website" />
<meta property="og:image" content="http://c1img.cyworld.co.kr/img/42book/OG01_600x315_v3.png" />

<meta name="keywords" content="싸이월드,싸이Book,싸이eBook">
<meta name="description" content="미니홈피, 싸이블로그에 있던 담아둔 소중한 기록을 싸이eBook(PDF)과 싸이Book(종이책)으로 만들어 평~생 보관하세요">

<link rel="shortcut icon" type="image/x-icon" href="http://c1img.cyworld.co.kr/img/cymain/cyco/common/cy_favicon.png">

<meta http-equiv="X-UA-Compatible" content="IE=Edge,Chrome=1" />
<link type="text/css" rel="stylesheet" href="/css/42book/reset.css?ver=2016110403" />
<link type="text/css" rel="stylesheet" href="/css/42book/mybook.css?ver=2016110403" />
<!--[if lt IE 8]>
<script type="text/javascript">
//<![CDATA[
	var IE7_PNG_SUFFIX = ".png";
//]]>
</script>
<script type="text/javascript" src="http://ie7-js.googlecode.com/svn/version/2.1(beta4)/IE8.js"></script>
<![endif]-->
<script type="text/javascript" src="/js/42book/jquery-1.12.1.min.js"></script>
<script type="text/javascript" src="/js/42book/jquery-ui.min.js"></script>
<script type="text/javascript" src="/js/jquery.number.js"></script>
<script type="text/javascript" src="/js/42book/placeholders.min.js"></script>
<script type="text/javascript" src="/js/42book/common.ui.js?ver=2016110403"></script>



<script type="text/javascript" src="/42book/include/gourl.js?ver=2016110403"></script>
<script type="text/javascript">
//<![CDATA[

	var max_count = 1000;

	function fn_submit() {
		document.a.submit();
		var bType = $('#btype').val();
		
		if (click_cnt>0) {
			alert('잠시만 기다려 주세요~');
		} else {
			var t_msg = ''
			if (bType=='3') {
				t_msg = '선체험단용 싸이eBook 만들기를 통해서는 게시물 ' + max_count + '개 까지 선택해서 만드실 수 있어요.';
			} else if (bType=="2") {
				t_msg = '싸이Book 한권으로 제작할 수 있는 최대 게시물 수는 ' + max_count + '개 입니다.\n게시물 수를 조정해 주세요.';
			} else {
				t_msg = '싸이eBook은 게시물 ' + max_count + '개 까지 선택해서 만드실 수 있어요.';
			}
			var cnt_post = parseInt($('#cnt_post').html(),10);
			if ((cnt_post>0) && (cnt_post<=max_count)) {
				click_cnt = 1;
				document.a.submit();
			} else if (cnt_post>max_count) {
				alert(t_msg);
			} else {
				alert('게시물을 선택해 주세요.');
			}
		}
	}

	function fn_set_folder(folder_list,kk_sel,gbn) {
		if ($('#folder_cnt').val()>1) {
			$('#menuList0').removeClass("onU onF");
			$('.folderList>li>a').removeClass("onU onF");
			$('#menuList' + kk_sel).addClass("onF");
		}

		if (gbn=='folder_sel') {
			$('#search_gbn').val('folder');
		}

		if (gbn=='folder_all') {
			$('#search_gbn').val('all');
		}

		fn_sel_chk_reset('on')
		$('#cpage').val('1');
		$('#sel_folder_list').val(folder_list);
		$('#lastid').val('');
		$('#lastdate').val('');
		$('#photoList').html('');
		fn_load(gbn);
		fn_set_folderinfo(kk_sel);
	}

	function fn_load(gbn) {
		$("#photoMore").hide();
		fn_loading('630','300','Y');

		var param = 'rrr=A&sel_folder_list=' + $('#sel_folder_list').val() + '&sdate=' + $('#sdate').val() + '&edate=' + $('#edate').val() + '&lastid=' + $('#lastid').val() + '&lastdate=' + $('#lastdate').val() + '&post_key_all=' + $('#post_key_all').val() + '&authcode=' + $('#authcode').val() + '&cpage=' + $('#cpage').val();

		var results;
		var totcnt, totpage;
		var listcnt = 12;
		var listmod;
		var cpage = parseInt($('#cpage').val(),10);
		$.ajax({
			type: "POST"
			,url: "/42book/common/ajax_photo.asp"
			,data: param
			,success:function(result){
				if (result.substr(0,5)=='ERR@@') {
					alert('err_ajax1');
				} else {
					$('#cpage').val(cpage+1);
					$('#photoList').append(result.split('@∞½')[0]);
					$('#lastid').val(result.split('@∞½')[1]);
					$('#lastdate').val(result.split('@∞½')[2]);
					totcnt = parseInt(result.split('@∞½')[3],10);
					if (gbn=='load') {
						$('#cnt_post').html(totcnt)
						$('#totcnt').val(totcnt)
					}
					totpage = parseInt(totcnt / listcnt,10);
					listmod = totcnt % listcnt;
					if (listmod>0) {
						totpage = totpage + 1;
					}
					if (totpage==cpage || totcnt==0) {
						$("#photoMore").hide();
					} else {
						$("#photoMore").show();
					}
					fn_loading('0','0','N');
				}
			}
			,error:function(data){
				alert('죄송합니다. 데이타 오류가 발생하였습니다.\n폴더 선택부터 다시 해주세요.\n(photo_A)');
				document.p.action = '/42book/';
				document.p.submit();
			}
		});
	}

	function fn_post_view(str_key) {
		var url_post = 'http://cy.cyworld.com/home/26446509/post/' + str_key;
		window.open('about:blank').location.href = url_post;
	}

	function fn_chk(kk_sel, str_key, folder_id) {
		var cnt_post = parseInt($('#cnt_post').html(),10);

		
		var obj_cnt = $("input[name='fcount']");
		var obj_key = $("input[name='folder_key']");
		for (var i=0; i<obj_key.length; i++) {
			if (obj_key.eq(i).val()==folder_id) {
				//언첵
				if ($('#post_sel' + kk_sel).attr('class')=='photoItem photoSel') {
					$('#fcount_sel').html(parseInt($('#fcount_sel').html(),10)-1)
					obj_cnt.eq(i).val(parseInt(obj_cnt.eq(i).val(),10)-1);
				} else {
					$('#fcount_sel').html(parseInt($('#fcount_sel').html(),10)+1)
					obj_cnt.eq(i).val(parseInt(obj_cnt.eq(i).val(),10)+1);
				}
				if (parseInt(obj_cnt.eq(i).val(),10)==0) {
					fn_sel_chk_reset('off')
				} else {
					fn_sel_chk_reset('on')
				}

				fn_set_totalcnt();
				break;
			}
		}

		
		if ($('#post_sel' + kk_sel).attr('class')=='photoItem photoSel') {
			$('#post_key_all').val($('#post_key_all').val().replace(str_key+'@♂⅓',''));

		
		} else {
			$('#post_key_all').val($('#post_key_all').val() + str_key + '@♂⅓');
		}

		fn_set_totalcnt()
		$('#post_sel' + kk_sel).toggleClass('photoSel')
	}

	function fn_reply_chk(obj) {
		if (obj.value=='Y') {
	 		$('#reply_Y').addClass("on");
	 		$('#reply_N').removeClass("on");
		} else {
	 		$('#reply_N').addClass("on");
	 		$('#reply_Y').removeClass("on");
		}
	}

	$(document).ready(function() {
		click_cnt = 0;
		$("#photoMore").hide();
		fn_set_folder('@♂⅓264465090000004D000000010@♂⅓2644650900000032000000700',0,'load');
	});

	function fn_sel_all() {
		var obj_cnt = $("input[name='fcount_org']");
		var obj_key = $("input[name='folder_key']");
		var sel_folder_count = '';
		for (var i=0; i<obj_key.length; i++) {
			if (obj_key.eq(i).val()==$('#sel_folder_list').val()) {
				sel_folder_count = obj_cnt.eq(i).val();
				break;
			}
		}

		if (parseInt(sel_folder_count,10)==0) {
		} else {
			
			if ($('#btn_all_gbn').val()=='on') {
				$('#photoList>dl').removeClass('photoSel');
				fn_sel_chk_reset('off');
				fn_load_postlist('off');

			
			} else {
				fn_sel_chk_reset('on');
				$('#photoList>dl').addClass('photoSel');
				fn_load_postlist('on');
			}
		}
	}

	function fn_load_postlist(gbn) {
		var param = 'sel_folder_list=' + $('#sel_folder_list').val() + '&sdate=' + $('#sdate').val() + '&edate=' + $('#edate').val() + '&authcode=' + $('#authcode').val();

		var obj_cnt = $("input[name='fcount']");
		var obj_key = $("input[name='folder_key']");

		var results;
		$.ajax({
			type: "POST"
			,url: "/42book/common/ajax_folder_post.asp"
			,data: param
			,success:function(result){
				if (result.substr(0,5)=='ERR@@') {
					alert('err_ajax1');
				} else {
					var result_json = JSON.parse(result);
					var postid = '';
					$.each(result_json.postIdList, function(key, value) {
						postid = postid + value + '@♂⅓';
						$('#post_key_all').val($('#post_key_all').val().replace(value + '@♂⅓',''));
					});

					
					if (gbn=='on') {
						$('#post_key_all').val($('#post_key_all').val() + postid);
						if ($('#search_gbn').val()=='all') {
							$('#fcount_sel').html($('#post_key_all').val().split('@♂⅓').length-1);
							fn_set_folder_all();
						}
						for (var i=0; i<obj_key.length; i++) {
							if (obj_key.eq(i).val()==$('#sel_folder_list').val()) {
								obj_cnt.eq(i).val(postid.split('@♂⅓').length-1);
								$('#fcount_sel').html(postid.split('@♂⅓').length-1);
								break;
							}
						}

					
					} else {
						if ($('#search_gbn').val()=='all') {
							$('#fcount_sel').html(0);
							fn_set_folder_none();
						}

						for (var i=0; i<obj_key.length; i++) {
							if (obj_key.eq(i).val()==$('#sel_folder_list').val()) {
								obj_cnt.eq(i).val(0);
								$('#fcount_sel').html(0);
								break;
							}
						}
					}

					fn_set_totalcnt();
				}
			}
			,error:function(data){
				alert('죄송합니다. 데이타 오류가 발생하였습니다.\n폴더 선택부터 다시 해주세요.\n(photo_B)');
				document.p.action = '/42book/';
				document.p.submit();
			}
		});
	}

	function fn_sel_chk_reset(gbn) {
		$("#btn_all").attr("src","http://c1img.cyworld.co.kr/img/42book/check_" + gbn +".png");
		$('#btn_all_gbn').val(gbn);
	}

	function fn_set_totalcnt() {
		var tcnt = parseInt($('#post_key_all').val().split('@♂⅓').length-1,10);
		$('#cnt_post').html(tcnt);
		$('#totcnt').val(tcnt);
		$('#cnt_price').html($.number(fn_price_info(tcnt,'price')));
		$('#cnt_max').html(fn_price_info(tcnt,'max'));
	}

	function fn_price_info(postcnt, gbn) {
		var arr_price_info = [[100,1200],
						[500,2400],
						[1000,4200]];

		if (postcnt<=100) {
			if (gbn=='max') {
				return arr_price_info[0][0];
			} else {
				return arr_price_info[0][1];
			}
		} else if (postcnt<=500) {
			if (gbn=='max') {
				return arr_price_info[1][0];
			} else {
				return arr_price_info[1][1];
			}
		} else {
			if (gbn=='max') {
				return arr_price_info[2][0];
			} else {
				return arr_price_info[2][1];
			}
		}
	}

	function fn_set_folderinfo(kk) {
		var obj = $("input[name='fcount']");
		var obj_fname = $("input[name='folder_name']");
		var tcnt = 0;
		if (kk==0) {
			for (var i=0; i<obj.length; i++) {
				tcnt = tcnt + parseInt(obj.eq(i).val(),10);
			}
			$('#sel_foldername').html('전체');
		} else {
			tcnt = obj.eq(kk-1).val();
			$('#sel_foldername').html(obj_fname.eq(kk-1).val());
		}
		if (tcnt==0) {
			fn_sel_chk_reset('off');
		}
		$('#fcount_sel').html(tcnt);
	}

	function fn_set_folder_none() {
		var obj = $("input[name='fcount']");
		for (var i=0; i<obj.length; i++) {
			obj.eq(i).val(0);
		}
	}

	function fn_set_folder_all() {
		var obj = $("input[name='fcount']");
		var obj_org = $("input[name='fcount_org']");
		for (var i=0; i<obj.length; i++) {
			obj.eq(i).val(obj_org.eq(i).val());
		}
	}

//]]>
</script>
</head>
<body>
<div class="wrapper">


	    <div class="headerWrap">
    	<h1><a href="javascript:fn_go('home');"><img src="http://c1img.cyworld.co.kr/img/42book/header_logo_beta.png" alt="싸이Book" /></a></h1>
        
        <p class="util">
			
				<a href="http://cyxso.cyworld.com/logout.jsp?redirection=http://www.cyworld.com/42book/">로그아웃</a>
			
		</p>
        
        <ul id="mybookgnb">
        	<li ><a href="javascript:fn_go('intro');">서비스 소개</a></li>
        	<li class="on"><a href="javascript:fn_go('make');">싸이Book 제작하기</a></li>
        	<li  ><a href="javascript:fn_go('mybox');">내 보관함</a>
            	<ul class="subMenu01">
            		<li ><a href="#">주문/결제내역</a></li>
            		<li ><a href="#">보관함</a></li>
            		<li ><a href="#">쿠폰함</a></li>
            	</ul>
            </li>
        	<li ><a href="javascript:fn_go('faq');">FAQ</a>
            	<ul class="subMenu02">
            		<li ><a href="javascript:fn_go('faq');">자주하는 질문</a></li>
            		<li><a href="https://helpdesk.cyworld.com/qna.html" target="_blank">고객센터</a></li>
            	</ul>
            </li>
        </ul>
    </div>
    <!-- //headerWrap -->

	
    <div id="container" class="myBookEdit">

		        <ul class="stepInfo">
            <li >1. 상품 선택</li>
            <li >2. 폴더 선택</li>
            <li class="on">3. 게시물 선택</li>
            <li >4. 표지 편집</li>
            <li>5. 주문 및 결제</li>
        </ul>
		<!-- //stepInfo -->

	

        <div class="contents">
        
            <h2>3. 게시물 선택</h2>
            
            <form id="" name="a" action="make_cover.asp" method="post" onsubmit="return false;">

                <fieldset>

                    <legend>게시물 선택</legend>
                    <div class="total" style="width:370px;">
					
                    	<dl >
                            <dt class="skip">종류</dt>
                            <dd class="type"><img src="http://c1img.cyworld.co.kr/img/42book/total_tit_ebook.gif" alt="싸이eBook" /></dd>
                        </dl>
                        <dl>
                            <dt>게시물 수&nbsp;</dt>
							<dd><span id="cnt_post"></span>개 (예상금액 : <span class="numberic" style="color:#000;" id="cnt_price">2,400</span>원 / P<span style="color:#000;" id="cnt_max">500</span>)</dd>
                    	</dl>
                    </div>



                    <div class="step01">
                    
                        <dl class="folderPick">
                            <dt style="padding-bottom:0px;">1999.09.01 ~ 2017.04.13</dt>
                            <dd id="menuList">
                            	<p class="folderList"><a id="menuList0" class="onU" href="javascript:;" onclick="fn_set_folder('@♂⅓264465090000004D000000010@♂⅓2644650900000032000000700',0,'folder_all');">전체 <span>423</span></a></p>
                                <ul class="folderList">
	                                <li><a id="menuList1" class="onU" href="javascript:;"  onclick="fn_set_folder('264465090000004D000000010',1,'folder_sel');">일기 &nbsp;<span>280</span></a></li><input type="hidden" name="fcount" value="280"><input type="hidden" name="fcount_org" value="280"><input type="hidden" name="folder_key" value="264465090000004D000000010"><input type="hidden" name="folder_name" value="일기">
									
	                                <li><a id="menuList2" class="onU" href="javascript:;"  onclick="fn_set_folder('2644650900000032000000700',2,'folder_sel');">꼬물폰 &nbsp;<span>143</span></a></li><input type="hidden" name="fcount" value="143"><input type="hidden" name="fcount_org" value="143"><input type="hidden" name="folder_key" value="2644650900000032000000700"><input type="hidden" name="folder_name" value="꼬물폰">
									
                                </ul>
                            </dd>
                        </dl>
                        <!-- //folderPick -->
                        
                    </div>
                    <!-- //step01 -->
                    
                    <div class="step02">

						<div class="scrollArea bgColor">
							<div class="photoPick">
								<dl>
									<dt class="skip">선택한 날짜</dt>
									<dd style="padding-top:10px;"><img src="http://c1img.cyworld.co.kr/img/42book/check_on.png" id="btn_all" onclick="fn_sel_all();" style="cursor:pointer;width:20px;height:20px;"> <span id="sel_foldername" style="font-weight:bold;">전체</span> 폴더 <span style="color:#ff3a56;" id="fcount_sel">423</span>개 선택</dd>
								</dl>
								
								<div class="photoList" id="photoList"></div>
								<!-- //photoList -->

								<img src="http://c1img.cyworld.co.kr/img/42book/loading.gif" id="loading_data" style="z-index:100;display:none;">
								<div id="photo_noti" style="position:absolute;z-index:200;width:460px;height:210px;left:455px;top:220px;background-color:#ffffff;padding:20px;border:1px solid #000000;text-align:center;">
									<b>"게시물 선택시 꼭 확인해 주세요!"</b><br>&nbsp;<br>
									사진편집기를 이용하여 여러장의 사진을 이어붙여 올린 사진의 경우,<br>
									사진이 잘려 다음 단으로 이어져 표현됩니다.<br>&nbsp;<br>
									이 문제는 세로가 긴 이미지를 싸이eBook/싸이Book으로<br>
									제작하는 과정에서 생기는 부득이한 현상이오니<br>
									편집시 참고하셔서 게시물을 선택해 주세요.<br>&nbsp;<br>
									<p class="btnArea"><input type="button" class="btnRed" value="확인" onclick="$('#photo_noti').hide();" /></p>
								</div>
								<input type="hidden" name="btype" value="1" id="btype">
								<input type="hidden" name="cpage" id="cpage" value="0">
								<input type="hidden" name="sel_folder_list_all" id="sel_folder_list_all" value="@♂⅓264465090000004D000000010@♂⅓2644650900000032000000700">
								<input type="hidden" name="sel_folder_list" id="sel_folder_list" value="@♂⅓264465090000004D000000010@♂⅓2644650900000032000000700">
								<input type="hidden" name="sel_fname_list" id="sel_fname_list" value="@&#9792;&#8532;&#51068;&#44592;@&#13252;&#188;280@&#9792;&#8532;&#44844;&#47932;&#54256;@&#13252;&#188;143">
								<input type="hidden" name="sdate" id="sdate" value="19990901">
								<input type="hidden" name="edate" id="edate" value="20170413">
								<input type="hidden" name="totcnt" id="totcnt" value="423">
								<input type="hidden" name="lastid" id="lastid" value="">
								<input type="hidden" name="lastdate" id="lastdate" value="">
								<input type="hidden" name="authcode" id="authcode" value="4,1,0">
								<input type="hidden" name="folder_cnt" id="folder_cnt" value="2">

								<input type="hidden" name="post_key_all" id="post_key_all" value="4585744804800327155A9A01@♂⅓4587FE7084800327155A9A01@♂⅓458BC6A472000327155A9A01@♂⅓458D30C028800327155A9A01@♂⅓458FC88052400327155A9A01@♂⅓459664B0F8800327155A9A01@♂⅓4597779CEE000327155A9A01@♂⅓4598A1F80E000327155A9A01@♂⅓459A818095400327155A9A01@♂⅓459F982810C00327155A9A01@♂⅓45A42104E6800327155A9A01@♂⅓45A680FC68C00327155A9A01@♂⅓45A9DF408D000327155A9A01@♂⅓45AEB538B2C00327155A9A01@♂⅓45B103246E000327155A9A01@♂⅓45B2A1FC06C00327155A9A01@♂⅓45B4BBE05FC00327155A9A01@♂⅓45B63C0458000327155A9A01@♂⅓45B8C84855C00327155A9A01@♂⅓45BDEB5C4A800327155A9A01@♂⅓45C4DCDCA5800327155A9A01@♂⅓45D0D2BCAF000327155A9A01@♂⅓45D1FD908BC00327155A9A01@♂⅓45D71168B6C00327155A9A01@♂⅓45DD773833000327155A9A01@♂⅓45E0086858800327155A9A01@♂⅓45E05F2012400327155A9A01@♂⅓45E70FB4EF000327155A9A01@♂⅓45EC0DC06E000327155A9A01@♂⅓45EF9760B1400327155A9A01@♂⅓45F17EE09A800327155A9A01@♂⅓4605164477800327155A9A01@♂⅓4606BBE87DC00327155A9A01@♂⅓460BB9F4E6400327155A9A01@♂⅓460DCF28F6400327155A9A01@♂⅓4614F99C1D800327155A9A01@♂⅓4619922C73C00327155A9A01@♂⅓46209798E4400327155A9A01@♂⅓4624D9E860400327155A9A01@♂⅓463F261808800327155A9A01@♂⅓4643342460800327155A9A01@♂⅓46BC170486C00327155A9A01@♂⅓46BCAAAC97C00327155A9A01@♂⅓46C2B11886400327155A9A01@♂⅓46C2B550ACC00327155A9A01@♂⅓46C79CA027800327155A9A01@♂⅓46CA8C80CFC00327155A9A01@♂⅓46CC4D5484400327155A9A01@♂⅓46CF3D706A000327155A9A01@♂⅓46D3469016C00327155A9A01@♂⅓46D8046469C00327155A9A01@♂⅓46E04B60CD800327155A9A01@♂⅓46E2967C29000327155A9A01@♂⅓46E2A6E4F1400327155A9A01@♂⅓46ED1F7008000327155A9A01@♂⅓46FB7584E0800327155A9A01@♂⅓4701D01484000327155A9A01@♂⅓4702760458C00327155A9A01@♂⅓470F6CC4AC000327155A9A01@♂⅓47120DE439800327155A9A01@♂⅓4716249CD6400327155A9A01@♂⅓47164DA035400327155A9A01@♂⅓471E21C451400327155A9A01@♂⅓4724C57438400327155A9A01@♂⅓472895DC83000327155A9A01@♂⅓472D92F8DC400327155A9A01@♂⅓4736FAF044800327155A9A01@♂⅓473C48AC43C00327155A9A01@♂⅓473F116871400327155A9A01@♂⅓47412BC43B000327155A9A01@♂⅓4741C32CCEC00327155A9A01@♂⅓4745B73418800327155A9A01@♂⅓474704B85CC00327155A9A01@♂⅓485DF6903BC00327155A9A01@♂⅓486F384CCB400327155A9A01@♂⅓4875E73C7B400327155A9A01@♂⅓4877FBBCBC000327155A9A01@♂⅓4879EF30AB000327155A9A01@♂⅓4882B5E81BC00327155A9A01@♂⅓488ABA54D7400327155A9A01@♂⅓4892E47C4CC00327155A9A01@♂⅓489C1E0C6C400327155A9A01@♂⅓489C282017800327155A9A01@♂⅓48A2AFEC9AC00327155A9A01@♂⅓48ABF9E48F000327155A9A01@♂⅓48AE88F889000327155A9A01@♂⅓48B0052077800327155A9A01@♂⅓48B8C8CCBAC00327155A9A01@♂⅓48C1057863000327155A9A01@♂⅓48C211208F400327155A9A01@♂⅓48C79AA079400327155A9A01@♂⅓48D37EB0C4000327155A9A01@♂⅓48DDB99833C00327155A9A01@♂⅓48E5BE04DFC00327155A9A01@♂⅓48EDD9A495800327155A9A01@♂⅓48EF3BC87D000327155A9A01@♂⅓48F5D5DC71400327155A9A01@♂⅓490BC0CC1B800327155A9A01@♂⅓49117E1828400327155A9A01@♂⅓491AAFEC90C00327155A9A01@♂⅓491D56E877800327155A9A01@♂⅓492F96B464C00327155A9A01@♂⅓493228D4B1C00327155A9A01@♂⅓4937C15466400327155A9A01@♂⅓49431A68CFC00327155A9A01@♂⅓4946046CC7000327155A9A01@♂⅓494C9FE8A8C00327155A9A01@♂⅓4952F4D831800327155A9A01@♂⅓49574A241D000327155A9A01@♂⅓495C3804B8000327155A9A01@♂⅓495EEAF45D400327155A9A01@♂⅓49712C2893000327155A9A01@♂⅓497A899481400327155A9A01@♂⅓497E9DF4CCC00327155A9A01@♂⅓4983F24041000327155A9A01@♂⅓49952FC490800327155A9A01@♂⅓4997B44C1BC00327155A9A01@♂⅓499FB534AA800327155A9A01@♂⅓49A108D037800327155A9A01@♂⅓49A503E0A9C00327155A9A01@♂⅓49B4B67884400327155A9A01@♂⅓49C8447CBA800327155A9A01@♂⅓49D732705B400327155A9A01@♂⅓49E4617077400327155A9A01@♂⅓49EB055CF0800327155A9A01@♂⅓49F2A5F044000327155A9A01@♂⅓49FD2B9C26C00327155A9A01@♂⅓4A068A7030000327155A9A01@♂⅓4A0AA560C9C00327155A9A01@♂⅓4A14ACB887800327155A9A01@♂⅓4A1824C400800327155A9A01@♂⅓4A3476B00B800327155A9A01@♂⅓4A3C5FECBFC00327155A9A01@♂⅓4A3F9B8066000327155A9A01@♂⅓4A4191107D000327155A9A01@♂⅓4A45AAD45B800327155A9A01@♂⅓4A4DDC7CBE400327155A9A01@♂⅓4A57FF4060C00327155A9A01@♂⅓4A5981804D400327155A9A01@♂⅓4A5B120CC9800327155A9A01@♂⅓4A606388D0C00327155A9A01@♂⅓4A72D4C8CF800327155A9A01@♂⅓4A7EA870B4C00327155A9A01@♂⅓4A878F0827000327155A9A01@♂⅓4A8F9AF4F5000327155A9A01@♂⅓4A93C82CD1C00327155A9A01@♂⅓4ACDEBB009C00327155A9A01@♂⅓4ACF26B0EF400327155A9A01@♂⅓4AD1113C27C00327155A9A01@♂⅓4AD21FB41A000327155A9A01@♂⅓4ADEA3D8C1800327155A9A01@♂⅓4AE18878F5C00327155A9A01@♂⅓4AE2CABC6A800327155A9A01@♂⅓4AED91CC89000327155A9A01@♂⅓4AEE47ACD5400327155A9A01@♂⅓4AEECE70E5800327155A9A01@♂⅓4AF1855C6E000327155A9A01@♂⅓4AF43D743C400327155A9A01@♂⅓4AF8A3649E800327155A9A01@♂⅓4AFAB9C4D5800327155A9A01@♂⅓4AFED38856400327155A9A01@♂⅓4AFF358018000327155A9A01@♂⅓4B0135D869C00327155A9A01@♂⅓4B055E24F6800327155A9A01@♂⅓4B097A7CE5400327155A9A01@♂⅓4B0BF4B4B9800327155A9A01@♂⅓4B0E93F4D8000327155A9A01@♂⅓4B1068F026C00327155A9A01@♂⅓4B11F3DCDCC00327155A9A01@♂⅓4B13421439000327155A9A01@♂⅓4B168294B6800327155A9A01@♂⅓4B19161CAF400327155A9A01@♂⅓4B1D0970F4000327155A9A01@♂⅓4B1E68C481400327155A9A01@♂⅓4B239F1072400327155A9A01@♂⅓4B27A92049400327155A9A01@♂⅓4B2CD9903B000327155A9A01@♂⅓4B2F77E045C00327155A9A01@♂⅓4B3224B8C2400327155A9A01@♂⅓4B38B74CF1000327155A9A01@♂⅓4B3F5E44DB000327155A9A01@♂⅓4B41EEFC74C00327155A9A01@♂⅓4B4332A859400327155A9A01@♂⅓4B489B1C52800327155A9A01@♂⅓4B4C82F4E9000327155A9A01@♂⅓4B4F32241BC00327155A9A01@♂⅓4B51DFEC21800327155A9A01@♂⅓4B546BB8F6C00327155A9A01@♂⅓4B58E684A0000327155A9A01@♂⅓4B5B2138A4C00327155A9A01@♂⅓4B5C6EBC60800327155A9A01@♂⅓4B5F0C9407800327155A9A01@♂⅓4B605D9C3B400327155A9A01@♂⅓4B62F16020000327155A9A01@♂⅓4B66E298D0C00327155A9A01@♂⅓4B6ACAACDA400327155A9A01@♂⅓4B6C3798B9400327155A9A01@♂⅓4B703050F6000327155A9A01@♂⅓4B72CFCC1B000327155A9A01@♂⅓4B791D7871000327155A9A01@♂⅓4B7AC7907D800327155A9A01@♂⅓4B80455814C00327155A9A01@♂⅓4B86379CA1C00327155A9A01@♂⅓4B8A7C08C0000327155A9A01@♂⅓4B8E371CF6800327155A9A01@♂⅓4B925C5C5F000327155A9A01@♂⅓4B94965C7AC00327155A9A01@♂⅓4B9497C4D0400327155A9A01@♂⅓4B9508F8A9000327155A9A01@♂⅓4B9A55882B000327155A9A01@♂⅓4BA23D2049400327155A9A01@♂⅓4BA4DCD81B800327155A9A01@♂⅓4BADE65CCEC00327155A9A01@♂⅓4BC08C9462800327155A9A01@♂⅓4BE45160BF000327155A9A01@♂⅓4BEE98F0CC000327155A9A01@♂⅓4C092A0822C00327155A9A01@♂⅓4C1B929C7DC00327155A9A01@♂⅓4C1F9928A7400327155A9A01@♂⅓4C36E9C09B000327155A9A01@♂⅓4C5FA590F4400327155A9A01@♂⅓4C6537BCA8800327155A9A01@♂⅓4C74FF306EC00327155A9A01@♂⅓4C77D1C4F0800327155A9A01@♂⅓4C9741F8C2C00327155A9A01@♂⅓4C9825C810800327155A9A01@♂⅓4CA2E64821C00327155A9A01@♂⅓4CADE7F01D400327155A9A01@♂⅓4CB0C4987C800327155A9A01@♂⅓4CB86298A1C00327155A9A01@♂⅓4CCD5C5CE3C00327155A9A01@♂⅓4CCE4D885BC00327155A9A01@♂⅓4CDA21E41D400327155A9A01@♂⅓4CDD9018B9400327155A9A01@♂⅓4CDFCFB87C000327155A9A01@♂⅓4CE7FCB095800327155A9A01@♂⅓4CEB205C67800327155A9A01@♂⅓4CF30B7859800327155A9A01@♂⅓4CFC389C26000327155A9A01@♂⅓4D06B86C50C00327155A9A01@♂⅓4D13534CBA800327155A9A01@♂⅓4D231EBC44C00327155A9A01@♂⅓4D36D45C66C00327155A9A01@♂⅓4D37E8746CC00327155A9A01@♂⅓4D39289CC5000327155A9A01@♂⅓4D3FB46406000327155A9A01@♂⅓4D3FC580A8C00327155A9A01@♂⅓4D4797C482400327155A9A01@♂⅓4D4B4E640A000327155A9A01@♂⅓4D4EB59022000327155A9A01@♂⅓4D5D046071800327155A9A01@♂⅓4D60EB4816400327155A9A01@♂⅓4D6A71B893400327155A9A01@♂⅓4D7A13E893800327155A9A01@♂⅓4D89FC68ED800327155A9A01@♂⅓4D8B5D24C4800327155A9A01@♂⅓4D9074BC16800327155A9A01@♂⅓4D95B55838800327155A9A01@♂⅓4DB080CCE1000327155A9A01@♂⅓4DB7D4BCE3000327155A9A01@♂⅓4DD27C1882800327155A9A01@♂⅓4DF8A6F4C4000327155A9A01@♂⅓4E9307807B000327155A9A01@♂⅓4EA2DA70DC800327155A9A01@♂⅓4EA5847800400327155A9A01@♂⅓4EA7B4DC3C000327155A9A01@♂⅓4EB148E4C7800327155A9A01@♂⅓4EC261602F000327155A9A01@♂⅓4ED26588B0400327155A9A01@♂⅓4ED6000800000327155A9A01@♂⅓4EE131BCA3400327155A9A01@♂⅓4EE37A081C000327155A9A01@♂⅓4EE56638E6400327155A9A01@♂⅓4F1814FC88800327155A9A01@♂⅓4FD756DC80800327155A9A01@♂⅓50639BEC30800327155A9A01@♂⅓5064F258F6800327155A9A01@♂⅓5069939415400327155A9A01@♂⅓507218AC52000327155A9A01@♂⅓507605E870400327155A9A01@♂⅓4AED93E802800327155A6401@♂⅓4AED946044C00327155A6401@♂⅓4AED949C59800327155A6401@♂⅓4AED9D846B400327155A6401@♂⅓4AED9DC08D800327155A6401@♂⅓4AED9DFCAB000327155A6401@♂⅓4AED9EB011800327155A6401@♂⅓4AED9F284A800327155A6401@♂⅓4AED9F2863800327155A6401@♂⅓4AED9FDCBC000327155A6401@♂⅓4AEDA0CC42C00327155A6401@♂⅓4AEDA1085F000327155A6401@♂⅓4AEDA10875C00327155A6401@♂⅓4AF438C48F400327155A6401@♂⅓4AF43978B6400327155A6401@♂⅓4AF439B4C8C00327155A6401@♂⅓4B069A8C29C00327155A6401@♂⅓4B069AC83A400327155A6401@♂⅓4B069B4058400327155A6401@♂⅓4B0BDDF81D800327155A6401@♂⅓4B13AE5C44C00327155A6401@♂⅓4B13AE9852C00327155A6401@♂⅓4B13AE9862400327155A6401@♂⅓4B13AED46CC00327155A6401@♂⅓4B13AF107D400327155A6401@♂⅓4B13AF4C91C00327155A6401@♂⅓4B13AF88B3C00327155A6401@♂⅓4B1D0C7CF7000327155A6401@♂⅓4B1D0CF424800327155A6401@♂⅓4B1D0D303D800327155A6401@♂⅓4B27B55031800327155A6401@♂⅓4B27B55037800327155A6401@♂⅓4B27B58C3C800327155A6401@♂⅓4B27B5C843C00327155A6401@♂⅓4B3E238095000327155A6401@♂⅓4B3E238098C00327155A6401@♂⅓4B3E23BCAE800327155A6401@♂⅓4B3E23F8BE400327155A6401@♂⅓4B3E2470E3C00327155A6401@♂⅓4B3E2470EF000327155A6401@♂⅓4B3E24AC07800327155A6401@♂⅓4B3E24AC08000327155A6401@♂⅓4B3E252420000327155A6401@♂⅓4B64512C08400327155A6401@♂⅓4B701E0811C00327155A6401@♂⅓4B701EF874800327155A6401@♂⅓4B701F3482800327155A6401@♂⅓4B701F70AB000327155A6401@♂⅓4B70202403C00327155A6401@♂⅓4B70206022800327155A6401@♂⅓4B70206033C00327155A6401@♂⅓4B70209C44C00327155A6401@♂⅓4B70211475800327155A6401@♂⅓4B702150A4C00327155A6401@♂⅓4B7022F460000327155A6401@♂⅓4B70233086400327155A6401@♂⅓4B70236C9E800327155A6401@♂⅓4B8137B07C400327155A6401@♂⅓4B813828B6400327155A6401@♂⅓4B813864D5400327155A6401@♂⅓4B8138A008800327155A6401@♂⅓4B8138DC24800327155A6401@♂⅓4B93B9D057800327155A6401@♂⅓4B93BA4893800327155A6401@♂⅓4B93BA84AF400327155A6401@♂⅓4B93BC2886C00327155A6401@♂⅓4B93BC64A9400327155A6401@♂⅓4B93BC64B7C00327155A6401@♂⅓4B93BCA0CAC00327155A6401@♂⅓4B93BCA0E0C00327155A6401@♂⅓4B93BCDC0AC00327155A6401@♂⅓4B93BD9064000327155A6401@♂⅓4B93BDCC86C00327155A6401@♂⅓4B9A594845400327155A6401@♂⅓4B9FA524E8000327155A6401@♂⅓4B9FA59C0D400327155A6401@♂⅓4B9FA65036400327155A6401@♂⅓4BD2FCE46C800327155A6401@♂⅓4BD2FD207C400327155A6401@♂⅓4BD2FD2084C00327155A6401@♂⅓4BD2FE10EC000327155A6401@♂⅓4BD2FE4C00400327155A6401@♂⅓4BD2FE4C14C00327155A6401@♂⅓4BD2FEC448C00327155A6401@♂⅓4BD2FF005E400327155A6401@♂⅓4C028B80E5C00327155A6401@♂⅓4C028BF81FC00327155A6401@♂⅓4C028BF820000327155A6401@♂⅓4C028C7051000327155A6401@♂⅓4C028C7051400327155A6401@♂⅓4C028C7051800327155A6401@♂⅓4C1EED5CF0000327155A6401@♂⅓4C1EED9806400327155A6401@♂⅓4C1EEDD418C00327155A6401@♂⅓4C1EEDD424800327155A6401@♂⅓4C1EEE4C46C00327155A6401@♂⅓4C1EEE4C53C00327155A6401@♂⅓4C38957CA3800327155A6401@♂⅓4C3895B8BE800327155A6401@♂⅓4C42EE6437000327155A6401@♂⅓4C42EEA04D400327155A6401@♂⅓4C42EEDC59400327155A6401@♂⅓4C42EEDC69400327155A6401@♂⅓4C42EF187A400327155A6401@♂⅓4C42EF5493C00327155A6401@♂⅓4C42EF90B4400327155A6401@♂⅓4C7114C46A400327155A6401@♂⅓4C71150092800327155A6401@♂⅓4C711578D8400327155A6401@♂⅓4C7115B4F4000327155A6401@♂⅓4C71162C38400327155A6401@♂⅓4C7116686FC00327155A6401@♂⅓4C7116E0BB400327155A6401@♂⅓4C7117942CC00327155A6401@♂⅓4C71180C74800327155A6401@♂⅓4C711884B4800327155A6401@♂⅓4C7118C0DF800327155A6401@♂⅓4CAEB180CBC00327155A6401@♂⅓4CAEB1BCD1400327155A6401@♂⅓4CAEB1F8E2800327155A6401@♂⅓4CC3FEF0A6800327155A6401@♂⅓4CC3FF2CAEC00327155A6401@♂⅓4CC3FF2CB5C00327155A6401@♂⅓4CDA1FC890000327155A6401@♂⅓4CDA20049E800327155A6401@♂⅓4CDA2004A7400327155A6401@♂⅓4CDA207CC8C00327155A6401@♂⅓4CDA20B8D1C00327155A6401@♂⅓4CE012C0E9400327155A6401@♂⅓4CE012C0E9800327155A6401@♂⅓4CE012FC01800327155A6401@♂⅓4CE012FC01C00327155A6401@♂⅓4CE013B023800327155A6401@♂⅓4CE014283F000327155A6401@♂⅓4CFCDB804EC00327155A6401@♂⅓4CFCDC349F400327155A6401@♂⅓4CFCDC70B3800327155A6401@♂⅓4CFCDCACBFC00327155A6401@♂⅓4D29A37C50C00327155A6401@♂⅓4D29A37C5B400327155A6401@♂⅓4D29A3B869400327155A6401@♂⅓4D29A3F47CC00327155A6401@♂⅓4B0BDDBC10800327155A6401@♂⅓">
								<input type="hidden" name="search_gbn" id="search_gbn" value="all">
								<input type="hidden" name="btn_all_gbn" id="btn_all_gbn" value="on">



								<div style="height:70px;"><p class="btnMore" id="photoMore" onclick="fn_load('more');"><a href="javascript:;"><img src="http://c1img.cyworld.co.kr/img/42book/btn_more.png" alt="더보기" /></a></p></div>

							</div>
							<!-- //photoPick -->

                        </div>
                        <!-- //scrollArea -->

                        <dl class="option noBorder">
                        	<dt>
                            	댓글/재댓글 포함 여부를 선택하세요.
                                <span>댓글/재댓글을 포함해서 제작할 경우, 댓글은 <span class="fcPoint">최대 10개</span>까지만 표기 됩니다</span>
                            </dt>
                        	<dd>
                            	<ul>
                            		<li id="reply_Y" class="on"><span class="changeBg_radio"><input type="radio" checked="checked" name="replyYn" value="Y" onclick="fn_reply_chk(this);" id="" /></span><label for="">댓글 / 재댓글 포함</label></li>
                            		<li id="reply_N" ><span class="changeBg_radio"><input type="radio" name="replyYn" value="N" onclick="fn_reply_chk(this);" id="" /></span><label for="">댓글 / 재댓글 미포함</label></li>
                            	</ul>
                            </dd>
                        </dl>
                        <!-- //option -->

                        
                    </div>
                    <!-- //step02 -->
                    
                    <div class="btnArea">
                        <p class="prev"><button onclick="fn_go('prev');">이전단계</button></p>
                        <p class="next"><button onclick="fn_submit();">다음단계</button></p>
                    </div>
        
                </fieldset>
            </form>

            <form id="" name="p" method="post" onsubmit="return false;">
				<input type="hidden" name="btype" value="1" id="btype">
            </form>

		</div>
        <!-- //contents -->



    </div>
    <!-- //container -->

	
    <div class="footerWrap">
        <ul class="quickLink">
            <li><a href="http://www.cyworld.com/cymain/?f=auto_cymain" target="_blank"><img src="http://c1img.cyworld.co.kr/img/42book/footer_logo_cyworld.gif" alt="" /> 싸이월드</a></li>
            <li><a href="https://helpdesk.cyworld.com/" target="_blank">고객센터</a></li>
            <li>
			
				<a href="http://cyxso.cyworld.com/logout.jsp?redirection=http://www.cyworld.com/42book/">로그아웃</a>
			
			</li>
        </ul>
            
        <ul class="etc">
            <li><a href="/policy/legal/legal.aspx" target="_blank">서비스 이용약관</a></li>
            <li><a href="/policy/privacy/privacy.aspx" target="_blank">개인정보취급방침/청소년보호정책</a></li>
            <li><a href="http://cy.cyworld.com/home/ALG0674F/post/561453660581491AA85EA001" target="_blank">광고문의</a></li>
        </ul>
        
        <ul class="info">
            <li>(주)싸이월드</li>
            <li>대표이사 : 전제완</li>
            <li>사업자등록번호  105-87-96554</li>
            <li>통신판매업신고 : 2015-서울서초-0158호</li>
            <li><address>서울특별시 송파구 위례성대로 10, 7층(방이동, 에스타워)</address></li>
        </ul>
		
        <p><img src="http://c1img.cyworld.co.kr/img/42book/footer_copyright.gif" alt="Copyright © Cyworld Co.,Ltd. All Rights Reserved." /></p>        
    </div>
    <!-- //footerWrap -->



</div>
</body>
</html>
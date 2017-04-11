$(function() {
/*	var flag_my_menu = true;
	var flag_timeline = true;
	var flag_contact = true;*/

	/*
	var flag_my_menu=  $("#flag_my_menu").val();
	var flag_timeline = $("#flag_timeline").val();
	var flag_contact = $("#flag_contact").val();
	*/
	
	//내 코드엔 이게 필요해요.. by.태권
	var mem_id = document.getElementById('mem_id').value;
	
	$('#basket').click(function (e) {
        getMyBasket(mem_id);
    });

    $('#divView').mouseenter(function (e) {
        $('#divView').attr('data-on-flag', true);
        if ($('#divView').attr('data-drag') === 'true') {
            $('#divView').css('cursor', 'url(resources/cursor.cur), auto');
        } else {
            $('#divView').css('cursor', '');
        }
        console.log($('#divView').attr('data-on-flag'));
    });

    $('#divView').mouseleave(function (e) {
        $('#divView').attr('data-on-flag', false);
        $('#divView').css('cursor', '');
        console.log($('#divView').attr('data-on-flag'));
    });
	
	$('#menu-home').click(function() {
		if ($("#flag_my_menu").val() =='true') {
		} else {
			$("#flag_timeline").val('true');
			$('#pollSlider-button').animate({
				"margin-right" : '-=500'
			});
			$('.pollSlider').animate({
				"margin-right" : '-=500'
			});
			
			$('.searchClass').animate({					
				"margin-right" : '-=500'
			});
		}
		$("#flag_contact").val("true");
	});

	$('#menu-contact').click(function() {
		if ($("#flag_timeline").val() =='true') {
		} else {
			$("#flag_timeline").val("true");
			$('#pollSlider-button').animate({
				"margin-right" : '-=500'
			});
			$('.pollSlider').animate({
				"margin-right" : '-=500'
			});
			$('.searchClass').animate({					
				"margin-right" : '-=500'
			});
		};
		
		if ($("#flag_my_menu").val() =='true') {
		} else {
			$("#flag_my_menu").val("true");
			
			$('.menu-slider').animate({
				"margin-left" : '-=500'
			});
			$('.map-control').animate({
				"margin-left" : '-=300'
			});
			
			$('.searchClass').animate({					
				"margin-right" : '-=500'
			});
		};		
		$("#flag_contact").val("false");	
	});

	$('#menu-my-menu').click(function() {
		var mem_id = $("#mem_id").val();
		if ($("#flag_timeline").val() =='true') {
			if ($("#flag_my_menu").val() =='true') {
				$.ajax({
					type : "POST",
					url : "mymenu",
					data : {
						mem_id : mem_id
					},
					success : function(data) {
						var myMenu = document.getElementById("myMenu2");
						var follow = '';
						follow += "<p>follower : " + data.fol_follower + "</p>";
						follow += "<p>following : " + data.fol_following + "</p>";
						myMenu.innerHTML = follow;
					},
					error : function(e) {
						console.log(e);
					}
				});
				$("#flag_my_menu").val('false');
				$('.menu-slider').animate({
					"margin-left" : '+=500'
				});
				$('.map-control').animate({
					"margin-left" : '+=300'
				});
			} else {
				$("#flag_my_menu").val('true');
				$('.menu-slider').animate({
					"margin-left" : '-=500'
				});
				$('.map-control').animate({
					"margin-left" : '-=300'
				});
			}
		}
	});

	$('#pollSlider-button').click(function() {
		
		if ($("#flag_contact").val() =='true') {
			
			if ($("#flag_timeline").val() == 'true') {				
				$("#flag_timeline").val('false');				
			
				$('#pollSlider-button').animate({
					"margin-right" : '+=500'
				});
				$('.pollSlider').animate({
					"margin-right" : '+=500'
				});
				$('.searchClass').animate({	
					"margin-right" : '+=500'
				});
			} else {
				$("#flag_timeline").val('true');
				$('#pollSlider-button').animate({
					"margin-right" : '-=500'
				});
				$('.pollSlider').animate({
					"margin-right" : '-=500'
				});
				$('.searchClass').animate({					
					"margin-right" : '-=500'
				});
			}
		}
	});
	
});
$(function() {
	$('#menu-home').click(function() {
		sliderInit();
		$("#flag_contact").val("true");
	});

	$('#menu-contact').click(function() {
		sliderInit();
		$("#flag_contact").val("false");
	});

	$('#menu-my-menu').click(
		function() {
			var mem_id = $("#mem_id").val();
			if ($("#flag_contact").val() == 'true') {
				if ($("#flag_my_menu").val() == 'true') {
					$.ajax({
						type : "POST",
						url : "mymenu",
						data : {
							mem_id : mem_id
						},
						success : function(data) {
							var myMenu = document.getElementById("myMenu2");
							var follow = '';
							follow += "<p>follower : " + data.fol_follower + "</a></p>";
							follow += "<p>following : " + data.fol_following + "</a></p>";
							myMenu.innerHTML = follow;
						},
						error : function(e) {
							console.log(e);
						}
					});
					$('.menu-slider').animate({
						"margin-left" : '+=500'
					});
					$('.map-control').animate({
						"margin-left" : '+=250'
					});
					$("#flag_my_menu").val('false');
				} else {
					$('.menu-slider').animate({
						"margin-left" : '-=500'
					});
					$('.map-control').animate({
						"margin-left" : '-=250'
					});
					$("#flag_my_menu").val('true');
				}
			}
		});

	$('#pollSlider-button').click(function() {
		if ($("#flag_contact").val() == 'true') {
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

function sliderInit() {
	if ($("#flag_timeline").val() == 'true') {
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

	if ($("#flag_my_menu").val() == 'true') {
	} else {
		$("#flag_my_menu").val("true");
		$('.menu-slider').animate({
			"margin-left" : '-=500'
		});
		$('.map-control').animate({
			"margin-left" : '-=250'
		});
	};
};
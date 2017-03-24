$(function() {
	var flag_my_menu = true;
	var flag_timeline = true;
	var flag_contact = true;

	$('#menu-home').click(function() {
		flag_contact = true;
	});

	$('#menu-contact').click(function() {
		flag_contact = false;
	});

	$('#menu-my-menu').click(function() {
		if (flag_contact) {
			if (flag_my_menu) {
				flag_my_menu = false;
				$('.menu-slider').animate({
					"margin-left" : '+=500'
				});

			} else {
				flag_my_menu = true;
				$('.menu-slider').animate({
					"margin-left" : '-=500'
				});
			}
		}
	});

	$('#pollSlider-button').click(function() {
		if (flag_contact) {
			if (flag_timeline) {
				flag_timeline = false;
				$('#pollSlider-button').animate({
					"margin-right" : '+=500'
				});
				$('.pollSlider').animate({
					"margin-right" : '+=500'
				});
			} else {
				flag_timeline = true;
				$('#pollSlider-button').animate({
					"margin-right" : '-=500'
				});
				$('.pollSlider').animate({
					"margin-right" : '-=500'
				});
			}
		}
	});
});
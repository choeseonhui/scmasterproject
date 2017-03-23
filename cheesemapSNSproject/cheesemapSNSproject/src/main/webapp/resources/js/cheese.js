$(document).ready(function() {
	$('#pollSlider-button').click(function() {
		if ($(this).css("margin-right") == "500px") {
			$('#pollSlider-button').animate({
				"margin-right" : '-=500'
			});

			$('.pollSlider').animate({
				"margin-right" : '-=500'
			});

		} else {
			$('#pollSlider-button').animate({
				"margin-right" : '+=500'
			});
			$('.pollSlider').animate({
				"margin-right" : '+=500'
			});
		}
	});
	
});
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<script type="text/javascript" src="http://maps.googleapis.com/maps/api/js?sensor=true"></script>

<head>
<meta name="viewport" content="initial-scale=1.0">
<meta charset="utf-8">
<style>
html, body {
	height: 800px;
	margin: 0;
	padding: 0;
}

#map {
	height: 800px;
}
</style>
</head>
<body>
	<div id="map"></div>
	<script>
		var map;
		function initMap() {
			map = new google.maps.Map(document.getElementById('map'), {
				center : {
					lat : 36.5,
					lng : 128
				},
				zoom : 6
			});
		}
	</script>
	<script	src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDv9XZk_I25-M0V2IrvyqtJQTQ9k7UfoTA&callback=initMap" async defer></script>
</body>
</html>
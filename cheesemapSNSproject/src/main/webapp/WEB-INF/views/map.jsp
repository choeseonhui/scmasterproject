<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<script type="text/javascript" src="http://maps.googleapis.com/maps/api/js?sensor=true"></script>

<head>
<title>Simple Map</title>
<meta name="viewport" content="initial-scale=1.0">
<meta charset="utf-8">
<style>
html, body {
	height: 100%;
	margin: 0;
	padding: 0;
}

#map {
	height: 100%;
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
					lat : -34.397,
					lng : 150.644
				},
				zoom : 8
			});
		}
	</script>
	<script	src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDv9XZk_I25-M0V2IrvyqtJQTQ9k7UfoTA&callback=initMap" async defer></script>
</body>
</html>
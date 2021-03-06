var markers = [];
var map;
var markerClusterer = null;
var service;
var geocoder;
var infowindow;
var directionsService;
var directionsDisplay;

function initMap() {

	$('#pac-input').css('visibility','hidden');
	
    // 지도 생성 및 기타 등에 필요한 값 선언
    var myLatlng = new google.maps.LatLng(37.51081519807654, 127.06040382385254);
    var myOptions = {
        zoom: 15,
        center: myLatlng
    };
    map= new google.maps.Map(document.getElementById("map"), myOptions);
    var input = document.getElementById('pac-input');
    var searchBox = new google.maps.places.SearchBox(input);

    // 처음 접속시 발생한 이벤트 인식 (최초 딱 한 번만 실행됨)
    google.maps.event.addListenerOnce(map, 'idle', function () {
    	refresh(map);
    });
    	
    // 맵을 클릭하면 마커 생성
    map.addListener('click', function (event) {
        if ($('#write-button').attr('data-flag') == 'true') {
            addMarker(event.latLng, 'self', map);
        }
    });
    
    map.addListener('dragend', function (){
    	refresh(map);
    });
    
    map.addListener('zoom_changed', function() {
		refresh(map);
	});

    $("#searchWord").click(function(){
        directionsDisplay.setMap(null);
    });

    // 글쓰기 버튼(연필) 클릭했을 때 주소,장소 검색창 토글
    $('#write-button').on('click', function () {
        if ($('#write-button').attr('data-flag') == 'false') {
            $('#write-button').attr('data-flag', 'true');
            markers.forEach(function (marker) {
                marker.setMap(null);
            });
            markers = [];
            clusterRefresh();
            map.controls[google.maps.ControlPosition.TOP_CENTER].push(input);
        } else {
            $('#write-button').attr('data-flag', 'false');
            map.controls[google.maps.ControlPosition.TOP_CENTER].pop(input);
            $('.write-slider').animate({
				"margin-left" : '-=600'
			});
            markers.forEach(function (marker) {
                marker.setMap(null);
            });
            markers = [];
        }
        refresh(map);
    });

    // 보고있는 지도의 범위(?)가 변경되었을 경우 검색창 객체에 변경된 값 세팅
    map.addListener('bounds_changed', function () {
        searchBox.setBounds(map.getBounds());
    });

    // 장소객체의 값이 변경되었을 경우
    searchBox.addListener('places_changed', function () {
        var places = searchBox.getPlaces();

        if (places.length == 0) {
            return;
        }

        // 이전에 존재하던 마커 전부 삭제
        markers.forEach(function (marker) {
            marker.setMap(null);
        });
        markers = [];

        var bounds = new google.maps.LatLngBounds();

        // 각 검색된 장소에 대한 마커 생성
        places.forEach(function (place) {
            addMarker(place.geometry.location, place.name, map);

            if (place.geometry.viewport) {
                // 잘은 모르겠으나 축적 바꿔주는 부분인듯...
                bounds.union(place.geometry.viewport);
            } else {
                bounds.extend(place.geometry.location);
            }
        });

        map.fitBounds(bounds);
    });
    
    // 지도 스타일
    var styleControl = document.getElementById('style-selector-control');
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(styleControl);

    var styleSelector = document.getElementById('style-selector');
    map.setOptions({styles: styles[styleSelector.value]});

    styleSelector.addEventListener('change', function () {
        map.setOptions({styles: styles[styleSelector.value]});
    });
}

//게시물 마커 방방이 해제하긔!
function goAwayBangbang(){
	$.each(markers, function(index, item){
		item.setAnimation(null);
	});
}

//게시물 마커 방방이
function bangbang(datano){
	var selected_lat = '';
	var selected_lng = '';
	$.ajax({
		type : "post",
		url : "boardRead",
		data : {
			boa_id : datano
		},
		success : function(board){
			selected_lat = board.boa_latitude;
			selected_lng = board.boa_longitude;
			$.each(markers, function(index, item){
				if (item.position.lat() == selected_lat && item.position.lng() == selected_lng) {
					item.setAnimation(google.maps.Animation.BOUNCE);
				} else {
					item.setAnimation(null);
				}
			});
		},
		error: function(e){
			console.log(e);
		}
	});
}


//마이맵 데이터 받아오기
function dataToMapjs(data) {
    directionsService = new google.maps.DirectionsService;
    directionsDisplay = new google.maps.DirectionsRenderer;
    directionsDisplay.setMap(map);
    calculateAndDisplayRoute(directionsService, directionsDisplay, data);
}

//길찾긔
function calculateAndDisplayRoute(directionsService, directionsDisplay, myMapList){

    var waypts = [];
    var origin = null;
    var destination = null;

    $.each(myMapList, function (index, item) {
       var LatLng = new google.maps.LatLng(item.boa_latitude, item.boa_longitude);
        if (item.mtb_route == 1) {
            origin = LatLng;
        } else if (item.mtb_route == myMapList.length) {
            destination = LatLng;
        } else {
            waypts.push({
                location: LatLng,
                stopover: true
            });
        }
    });

    directionsService.route({
        origin: origin,
        destination: destination,
        waypoints: waypts,
        optimizeWaypoints: true,
        travelMode: 'DRIVING',
    }, function (response, status) {
        if (status === 'OK') {
            directionsDisplay.setDirections(response);
        } else {
            window.alert('Directions request failed due to ' + status);
        }
    })
}

// 게시글 정보 불러오기
function refresh(map){
	// sliderInit();
	if($("#searchWord").attr("timeLineFlag")=='false'&&$('#write-button').attr('data-flag')=='false'){
	markers.forEach(function (marker) {
		marker.setMap(null);
	});
	markers = [];
	// 현재의 범위를 가져옴
	var latNE = map.getBounds().getNorthEast().lat();
	var lngNE = map.getBounds().getNorthEast().lng();
	var latSW = map.getBounds().getSouthWest().lat();
	var lngSW = map.getBounds().getSouthWest().lng();
	boardList();
	defaultList(latNE, lngNE, latSW, lngSW);
	}
}

// 나와 내가 팔로잉 하고 있는 사람들의 게시물 정보를 가져와 마커 생성
function defaultList(latNE, lngNE, latSW, lngSW) {
	$.ajax({
		type: "post",
		url: "defaultList",
		data: {
			latNE: latNE,
			lngNE: lngNE,
			latSW: latSW,
			lngSW: lngSW
		},
		success: function (mylist) {
			$.each(mylist, function (index, item) {
				/*var boa_id = item.boa_id;*/
				var latlng = new google.maps.LatLng(item.boa_latitude, item.boa_longitude);
				addMarker(latlng, 'self', map);
				clusterRefresh();
			});
		},
		error: function (e) {
			console.log(e);
		}
	});
}

//클러스터 기능 붙여주기
function clusterRefresh(){
	if (markerClusterer!=null) {
		markerClusterer.clearMarkers();
	}
	markerClusterer = new MarkerClusterer(map, markers, {
		imagePath: './resources/img/m'
	});
}

//타임라인의 정보 마커찍어주기
function setBoardMarker(boardMarker){
// 이전에 존재하던 마커 전부 삭제
    markers.forEach(function (marker) {
        marker.setMap(null);
    });
    markers = [];
    
    var latlngbounds = new google.maps.LatLngBounds();
	
    $.each(boardMarker, function(index, item) {
		var boa_id = item.boa_id;
		var latlng = new google.maps.LatLng(item.boa_latitude, item.boa_longitude);
		latlngbounds.extend(latlng);
		addMarker(latlng, 'self', map);
		clusterRefresh();
	});
    if(boardMarker.length==1){
    	zoomChangeBoundsListener = 
    		google.maps.event.addListenerOnce(map, 'bounds_changed', function(event) {
    			  if (this.getZoom() > 15) {
    			    this.setZoom(15);
    			  }
    		});
    }
    map.fitBounds(latlngbounds);
}

// 마커 생성
function addMarker(latlng, title, map) {
    var hide_flag = 0;
    var original_latlng = latlng;
    var called = 0;
    service = new google.maps.places.PlacesService(map);
    geocoder = new google.maps.Geocoder;
    infowindow = new google.maps.InfoWindow();
    var marker = new google.maps.Marker({
        position: latlng,
        map: map,
        title: title,
        icon: './resources/img/placeholder.png'
    });

    // 마우스 오른쪽 클릭하면 마커가 삭제됨
    marker.addListener('rightclick', function () {
        marker.setMap(null);
        markers.pop(marker);
    });
    
    marker.addListener('click', function (event) {
        var latitude = event.latLng.lat();
        var longitude = event.latLng.lng();
        var latlng2 = {lat: latitude, lng: longitude};

        readAddress(latlng, title);
        infowindow.open(map, marker);

        if ($("#called").val() == 'true' && $('#write-button').attr('data-flag') === 'true') {
            $.ajax({
                url: 'boardWrite',
                type: 'GET',
                data: latlng2,
                success: function (data) {


             	   $('#write-slider').attr("class","animated slideInRight");
               	  $('#write-slider').attr("style","display:block !important;");       	
              	
                  $('#write-slider').html(data);
                  $("#hide_flag").val('false');
                  $("#called").val('false'); 
                }
            });
        }

        /*if ($("#hide_flag").val()== 'false' && $("#called").val() == 'false') {
            console.log('글읽기 사라져라');
            $('#write-slider').attr("class","animated fadeOutRight");       	 
        	 if( $("#called").val() == 'false'){
            $("#hide_flag").val('true');
            $("#called").val('true'); 
       	 };
        }*/

    });
    markers.push(marker);
}

//마커 주소 불러오기
function readAddress(latlng, title){
geocoder.geocode({'location': latlng}, function (results, status) {
    if (status === google.maps.GeocoderStatus.OK) {
        $('#placeID').val(results[1].place_id);
        service.getDetails({
            placeId: results[1].place_id
        }, function (place, status) {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                if (title === 'self') {
                    infowindow.setContent(place.formatted_address);
                    title = place.formatted_address;
                } else if(title === 'mymap'){
                	selectedAddress.push(place.formatted_address);
                }
            } else {
                console.log('장소이름가져오기실패');
            }
        })
    }
});
}

// 지도 스타일 관련
var styles = {
    default: null,
    silver: [
        {
            elementType: 'geometry',
            stylers: [{color: '#f5f5f5'}]
        },
        {
            elementType: 'labels.icon',
            stylers: [{visibility: 'off'}]
        },
        {
            elementType: 'labels.text.fill',
            stylers: [{color: '#616161'}]
        },
        {
            elementType: 'labels.text.stroke',
            stylers: [{color: '#f5f5f5'}]
        },
        {
            featureType: 'administrative.land_parcel',
            elementType: 'labels.text.fill',
            stylers: [{color: '#bdbdbd'}]
        },
        {
            featureType: 'poi',
            elementType: 'geometry',
            stylers: [{color: '#eeeeee'}]
        },
        {
            featureType: 'poi',
            elementType: 'labels.text.fill',
            stylers: [{color: '#757575'}]
        },
        {
            featureType: 'poi.park',
            elementType: 'geometry',
            stylers: [{color: '#e5e5e5'}]
        },
        {
            featureType: 'poi.park',
            elementType: 'labels.text.fill',
            stylers: [{color: '#9e9e9e'}]
        },
        {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [{color: '#ffffff'}]
        },
        {
            featureType: 'road.arterial',
            elementType: 'labels.text.fill',
            stylers: [{color: '#757575'}]
        },
        {
            featureType: 'road.highway',
            elementType: 'geometry',
            stylers: [{color: '#dadada'}]
        },
        {
            featureType: 'road.highway',
            elementType: 'labels.text.fill',
            stylers: [{color: '#616161'}]
        },
        {
            featureType: 'road.local',
            elementType: 'labels.text.fill',
            stylers: [{color: '#9e9e9e'}]
        },
        {
            featureType: 'transit.line',
            elementType: 'geometry',
            stylers: [{color: '#e5e5e5'}]
        },
        {
            featureType: 'transit.station',
            elementType: 'geometry',
            stylers: [{color: '#eeeeee'}]
        },
        {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [{color: '#c9c9c9'}]
        },
        {
            featureType: 'water',
            elementType: 'labels.text.fill',
            stylers: [{color: '#9e9e9e'}]
        }
    ],

    night: [
        {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
        {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
        {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
        {
            featureType: 'administrative.locality',
            elementType: 'labels.text.fill',
            stylers: [{color: '#d59563'}]
        },
        {
            featureType: 'poi',
            elementType: 'labels.text.fill',
            stylers: [{color: '#d59563'}]
        },
        {
            featureType: 'poi.park',
            elementType: 'geometry',
            stylers: [{color: '#263c3f'}]
        },
        {
            featureType: 'poi.park',
            elementType: 'labels.text.fill',
            stylers: [{color: '#6b9a76'}]
        },
        {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [{color: '#38414e'}]
        },
        {
            featureType: 'road',
            elementType: 'geometry.stroke',
            stylers: [{color: '#212a37'}]
        },
        {
            featureType: 'road',
            elementType: 'labels.text.fill',
            stylers: [{color: '#9ca5b3'}]
        },
        {
            featureType: 'road.highway',
            elementType: 'geometry',
            stylers: [{color: '#746855'}]
        },
        {
            featureType: 'road.highway',
            elementType: 'geometry.stroke',
            stylers: [{color: '#1f2835'}]
        },
        {
            featureType: 'road.highway',
            elementType: 'labels.text.fill',
            stylers: [{color: '#f3d19c'}]
        },
        {
            featureType: 'transit',
            elementType: 'geometry',
            stylers: [{color: '#2f3948'}]
        },
        {
            featureType: 'transit.station',
            elementType: 'labels.text.fill',
            stylers: [{color: '#d59563'}]
        },
        {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [{color: '#17263c'}]
        },
        {
            featureType: 'water',
            elementType: 'labels.text.fill',
            stylers: [{color: '#515c6d'}]
        },
        {
            featureType: 'water',
            elementType: 'labels.text.stroke',
            stylers: [{color: '#17263c'}]
        }
    ],

    retro: [
        {elementType: 'geometry', stylers: [{color: '#ebe3cd'}]},
        {elementType: 'labels.text.fill', stylers: [{color: '#523735'}]},
        {elementType: 'labels.text.stroke', stylers: [{color: '#f5f1e6'}]},
        {
            featureType: 'administrative',
            elementType: 'geometry.stroke',
            stylers: [{color: '#c9b2a6'}]
        },
        {
            featureType: 'administrative.land_parcel',
            elementType: 'geometry.stroke',
            stylers: [{color: '#dcd2be'}]
        },
        {
            featureType: 'administrative.land_parcel',
            elementType: 'labels.text.fill',
            stylers: [{color: '#ae9e90'}]
        },
        {
            featureType: 'landscape.natural',
            elementType: 'geometry',
            stylers: [{color: '#dfd2ae'}]
        },
        {
            featureType: 'poi',
            elementType: 'geometry',
            stylers: [{color: '#dfd2ae'}]
        },
        {
            featureType: 'poi',
            elementType: 'labels.text.fill',
            stylers: [{color: '#93817c'}]
        },
        {
            featureType: 'poi.park',
            elementType: 'geometry.fill',
            stylers: [{color: '#a5b076'}]
        },
        {
            featureType: 'poi.park',
            elementType: 'labels.text.fill',
            stylers: [{color: '#447530'}]
        },
        {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [{color: '#f5f1e6'}]
        },
        {
            featureType: 'road.arterial',
            elementType: 'geometry',
            stylers: [{color: '#fdfcf8'}]
        },
        {
            featureType: 'road.highway',
            elementType: 'geometry',
            stylers: [{color: '#f8c967'}]
        },
        {
            featureType: 'road.highway',
            elementType: 'geometry.stroke',
            stylers: [{color: '#e9bc62'}]
        },
        {
            featureType: 'road.highway.controlled_access',
            elementType: 'geometry',
            stylers: [{color: '#e98d58'}]
        },
        {
            featureType: 'road.highway.controlled_access',
            elementType: 'geometry.stroke',
            stylers: [{color: '#db8555'}]
        },
        {
            featureType: 'road.local',
            elementType: 'labels.text.fill',
            stylers: [{color: '#806b63'}]
        },
        {
            featureType: 'transit.line',
            elementType: 'geometry',
            stylers: [{color: '#dfd2ae'}]
        },
        {
            featureType: 'transit.line',
            elementType: 'labels.text.fill',
            stylers: [{color: '#8f7d77'}]
        },
        {
            featureType: 'transit.line',
            elementType: 'labels.text.stroke',
            stylers: [{color: '#ebe3cd'}]
        },
        {
            featureType: 'transit.station',
            elementType: 'geometry',
            stylers: [{color: '#dfd2ae'}]
        },
        {
            featureType: 'water',
            elementType: 'geometry.fill',
            stylers: [{color: '#b9d3c2'}]
        },
        {
            featureType: 'water',
            elementType: 'labels.text.fill',
            stylers: [{color: '#92998d'}]
        }
    ],

    hiding: [
        {
            featureType: 'poi.business',
            stylers: [{visibility: 'off'}]
        },
        {
            featureType: 'transit',
            elementType: 'labels.icon',
            stylers: [{visibility: 'off'}]
        }
    ]
}

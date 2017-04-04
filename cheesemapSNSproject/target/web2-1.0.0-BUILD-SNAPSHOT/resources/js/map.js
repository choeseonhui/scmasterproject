var markers = [];

function initMap() {

    //지도 생성 및 기타 등에 필요한 값 선언
    var geocoder = new google.maps.Geocoder;
    var infowindow = new google.maps.InfoWindow();
    var myLatlng = new google.maps.LatLng(37.51081519807654, 127.06040382385254);
    var myOptions = {
        zoom: 15,
        center: myLatlng
    };
    var map = new google.maps.Map(document.getElementById("map"), myOptions);
    var input = document.getElementById('pac-input');
    var searchBox = new google.maps.places.SearchBox(input);

    //맵을 클릭하면 마커 생성
    map.addListener('click', function (event) {
        if ($('#write-button').attr('data-flag') == 'true') {
            addMarker(event.latLng, '직접 생성한 마커', map);
        }
    });

    //글쓰기 버튼(연필) 클릭했을 때 주소,장소 검색창 토글
    $('#write-button').on('click', function () {
        if ($('#write-button').attr('data-flag') == 'false') {
            $('#write-button').attr('data-flag', 'true');
            map.controls[google.maps.ControlPosition.TOP_CENTER].push(input);
        } else {
            $('#write-button').attr('data-flag', 'false');
            map.controls[google.maps.ControlPosition.TOP_CENTER].pop(input);
            $('.write-slider').css('margin-right', '-600px');
            markers.forEach(function (marker) {
                marker.setMap(null);
            });
            markers = [];
        }
    });

    //보고있는 지도의 범위(?)가 변경되었을 경우 검색창 객체에 변경된 값 세팅
    map.addListener('bounds_changed', function () {
        searchBox.setBounds(map.getBounds());
    });

    //장소객체의 값이 변경되었을 경우
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

        //각 장소(place객체)에 대해 아이콘, 이름, 위치정보 받아옴
        var bounds = new google.maps.LatLngBounds();

        // 각 장소에 대한 마커 생성
        places.forEach(function (place) {
            var hide_flag = 0;
            var called = 0;
            var marker_searched = new google.maps.Marker({
                map: map,
                title: place.name,
                position: place.geometry.location,
                animation: google.maps.Animation.DROP
            });

            marker_searched.setPlace({
                placeId: place.place_id,
                location: place.geometry.location
            });

            // 마커를 오른쪽 클릭 했을 때 삭제
            marker_searched.addListener('rightclick', function (event) {
                marker_searched.setMap(null);
                markers.pop(marker_searched);
            });

            //마커를 클릭했을 때 글쓰기 창을 불러옴(이미 불러져 있다면 없앰)
            marker_searched.addListener('click', function (event) {
                var latitude = event.latLng.lat();
                var longitude = event.latLng.lng();
                var latlng = {lat: latitude, lng: longitude};

                if (marker_searched.getAnimation() !== null) {
                    marker_searched.setAnimation(null);
                } else {
                    marker_searched.setAnimation(google.maps.Animation.BOUNCE);
                }

                if (called === 0) {
                    $.ajax({
                        url: 'boardWrite',
                        type: 'GET',
                        data: latlng,
                        success: function (data) {
                            $('.write-slider').animate({
                                "margin-right": '+=600'
                            });
                            $('.write-slider').html(data);
                            hide_flag = 1;
                            called = 1;
                        }
                    });
                }

                if (hide_flag === 1 && called === 1) {
                    console.log('검색한 거 글쓰기 사라져라');
                    $('.write-slider').css('margin-right', '-600px');
                    hide_flag = 0;
                    called = 0;
                }

                // 장소명을 가져오는 부분 (가져와서 infowindow객체를 이용해서 마커위에 띄워준다)
                geocoder.geocode({'location': latlng}, function (results, status) {
                    console.log(results);
                    if (status === google.maps.GeocoderStatus.OK) {
                        if (results[1]) {
                            $('#placeID').val(results[0].place_id);
                        } else {
                            window.alert('No results found');
                        }
                    } else {
                        window.alert('Geocoder failed due to: ' + status);
                    }
                });
                infowindow.setContent(place.name);
                infowindow.open(map, marker_searched);
            });
            //생성된 마커를 markers 배열에 저장
            markers.push(marker_searched);

            if (place.geometry.viewport) {
                // 잘은 모르겠으나 축적 바꿔주는 부분인듯...
                bounds.union(place.geometry.viewport);
            } else {
                bounds.extend(place.geometry.location);
            }
        });
        map.fitBounds(bounds);
    });

    var styleControl = document.getElementById('style-selector-control');
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(styleControl);

    var styleSelector = document.getElementById('style-selector');
    map.setOptions({styles: styles[styleSelector.value]});

    styleSelector.addEventListener('change', function () {
        map.setOptions({styles: styles[styleSelector.value]});
    });
}

// 사용자가 직접 지도에서 위치를 지정했을 때 마커 생성
// 대부분 위에 검색 후 마커 생성과정과 비슷하다
function addMarker(latlng, title, map) {
    var hide_flag = 0;
    var called = 0;
    var service = new google.maps.places.PlacesService(map);
    var geocoder = new google.maps.Geocoder;
    var infowindow = new google.maps.InfoWindow();
    var marker = new google.maps.Marker({
        position: latlng,
        map: map,
        title: title,
        animation: google.maps.Animation.DROP,
        draggable: true
    });

    marker.addListener('rightclick', function (event) {
        marker.setMap(null);
        markers.pop(marker);
    });

    marker.addListener('click', function (event) {
        var latitude = event.latLng.lat();
        var longitude = event.latLng.lng();
        var latlng2 = {lat: latitude, lng: longitude};

        if (marker.getAnimation() !== null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }

        if (called === 0) {
            $.ajax({
                url: 'boardWrite',
                type: 'GET',
                data: latlng2,
                success: function (data) {
                    $('.write-slider').animate({
                        "margin-right": '+=600'
                    });
                    $('.write-slider').html(data);
                    hide_flag = 1;
                    called = 1;
                }
            });
        }

        if (hide_flag === 1 && called === 1) {
            console.log('글읽기 사라져라');
            $('.write-slider').css('margin-right', '-600px');
            hide_flag = 0;
            called = 0;
        }

        geocoder.geocode({'location': latlng}, function (results, status) {
            console.log(results);
            if (status === google.maps.GeocoderStatus.OK) {
                $('#placeID').val(results[1].place_id);
                service.getDetails({
                    placeId: results[1].place_id
                }, function (place, status) {
                    console.log(status);
                    if (status === google.maps.places.PlacesServiceStatus.OK) {
                        infowindow.setContent(place.formatted_address);
                    } else {
                        console.log('장소이름가져오기실패');
                    }
                })

            } else {
                window.alert('Geocoder failed due to: ' + status);
            }
        });
        infowindow.open(map, marker);
    });

    markers.push(marker);
}

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

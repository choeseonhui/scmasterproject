var selectedAddress=[];
var modalBasket;

$(document).ready(function() {
	// Get the modal
	modalBasket = document.getElementById('myModalBasket');

	// Get the <span> element that closes the modal
	var spanMap = document.getElementsByClassName("close")[2];
	//When the user clicks on <span> (x), close the modal
	spanMap.onclick = function() {
		modalBasket.style.display = "none";
	}
	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
		if (event.target == modalBasket) {
			modalBasket.style.display = "none";
		}
	}
	// When the user clicks the button, open the modal

	$("#makeMyMapBtn").click(function(event) {
		event.preventDefault();
		$('#myBasket_div').css('display','none');
		$("#makeMyMapBtn").attr("style", "display: none");
		modalBasket.style.display = "block";
		selectedAddress=[];
		$.ajaxSettings.traditional = true;
		$.ajax({
			type : "post",
			url : "setMarkerList",
			data : {
				selectedMarker : selectedMarker
			},
			success : function(board) {
				if(board != null) {
					var routeList = '';
					routeList += '<div id="select-route" class="row" style=" text-align: center; background-color: white; border-radius: 30px; opacity: 0.8; border: 1.5px dashed rgb(120, 94, 77);">';
					var latlngForAddress;
					
					$.each(board, function(index, item) {
					latlngForAddress=new google.maps.LatLng(item.boa_latitude, item.boa_longitude);
					readAddress(latlngForAddress, "mymap");
					});
					
					setTimeout(function(){
					$.each(board, function(index, item) {
							routeList += '<div class="col-sm-4 portfolio-item" style=" transform: scale(0.8);">';
							routeList += '<a href="#" class="portfolio-link" data-toggle="modal">';
							routeList += "<div class='j-caption caption' img_no='"+item.boa_id+"'>";
							routeList += '<div class="caption-content">';
							routeList += '<i class="fa fa-check fa-3x"></i>';
							routeList += '</div>';
							routeList += '</div>';
							routeList += "<img src='"+ item.boa_photo_savefile +"' class='alright j-img-responsive img-responsive'>";
							routeList += "<span>"+selectedAddress[index]+"</span>";
							routeList += '</a>'
							routeList += '</div>';
					});
				
					routeList += '</div>';
					$("#setRoute").html(routeList);
					}, 500);
					selectedMarker=[];
				}
				
				setTimeout(function(){
					$(".j-caption").on("click", function() {
						var selectedOne = $(this).attr("img_no");
						$(this).css('opacity', '0');
						$(this).toggleClass("selected");
						toAdd(selectedOne);
					});
					
					function toAdd(selectedOne) {
						if(selectedMarker.indexOf(selectedOne) < 0) {
							selectedMarker.push(selectedOne);
							$(".selected").css('opacity', '0.5');
						} else {
							selectedMarker.splice(selectedMarker.indexOf(selectedOne), 1);
						}
					}
				}, 1500);

				$('#hashtagMap').hashtags();
			    $('.jqueryHashtags').css('text-align', 'left');
			    $('#hashtagMap').css('height', '25px');
			}
		});
	});
	
});

function mymapCheck(){
	if(selectedMarker.length <= 0){
		alert("please select the place");
		return false;
	}
	var hashtagMap = document.getElementById("hashtagMap").value;
	if (hashtagMap.length <= 0) {
		alert("please write a tag");
		return false;
	}
	
	var contentMap = document.getElementById("contentMap").value;
	if (contentMap.length <= 0) {
		alert("please write a memo");
		return false;
	}
	return true;
}

$("#makeMyMap").click(function(){
	var hashtagMap = document.getElementById("hashtagMap").value;
	var contentMap = document.getElementById("contentMap").value;
	$.ajax({
		type : "post",
		url : "makeMyMap",
		contentType : "application/json; charset=utf-8",
		data : JSON.stringify({
			selectedMarker : selectedMarker,
			hashtagMap : hashtagMap,
			map_content : contentMap
		}),
		success : function(data){
			if(data>0){
				modalBasket.style.display = "none";
				selectedMarker=[];
				$('#myBasket-content-div').html("지금 아무것도 없어요!");
			}
		},
		error : function(e){
			console.log(e);
		}
	});
});

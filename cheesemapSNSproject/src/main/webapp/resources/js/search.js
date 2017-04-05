$(function(){

/*	var flag_my_menu=  $("#flag_my_menu").val();
	var flag_timeline = $("#flag_timeline").val();
	var flag_contact = $("#flag_contact").val();*/
	

	
	 $('#search').keydown(function(e) {
		    if(e.keyCode === 13) {
		    	$('#searchButton').click();
	    	 	    	 
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
	    			}
	    		};
	    				
	    
	    }
	 });
	
	 $('#searchButton').on('click',function(){
		
		$("#tagList").html('');
		$("#userList").html('');
		$("#mymapList").html('');
		$("#comp-first").attr("class","active");
		$("#comp-second").attr("class","none");
		$("#comp-third").attr("class","none");
		
		var searchWord  = $('#search').val();
		
		$.ajax({
			type : "GET",			//type of request Method
			url : "search",      //value pf requestMethod
			data :{
				word : searchWord
			},
			 dataType : 'json',
			 	success : function(object){				
				/*var object= JSON.stringify(data); */
				

					var taglist = {};
					var userlist = {};
					var mymaplist = {};
			 		
				for(key in object) {
					console.log(key);
				if(key == "tagList"){
					taglist = object[key];
				}
				if(key =="memberList"){					
					userlist = object[key];
				}
				if(key =="mymapList"){
					mymaplist= object[key];
				}
				
				}
				console.log(taglist);
				console.log(userlist);
				console.log(mymaplist);
		
				
				var taghtml ='';
				
				if(taglist !=null){
				 $.each(taglist, function(index, value ) {
					 taghtml += "<br><a><h2>#"+value.tag_name+"</h2></a><br>";					
					 $("#tagList").show();
					 $("#tagList").html(taghtml);
			                 
	                });	
				};
				
				
				var userhtml ='';	
				
			
				 $.each(userlist, function(index, value ) {
					 userhtml += "<br><a><h1>"+value.mem_id+"</h1></a><br>";
					 userhtml += value.mem_nickname+"<br><hr>";
					$("#userList").hide();
					$("#userList").html(userhtml);
				 });
				
				 
				 var mymaphtml = '';
				 
				 $.each(mymaplist, function(index, value) {				
					 mymaphtml += "<br><a><h1>"+value.tag_name+"</h1></a><br>";
					 console.log(value.tag_name);
					 $("#mymapList").hide();
					 $("#mymapList").html(mymaphtml);
			                 
	                });
				 
				
				
			},
			error : function(e){
				//ajax 통신 실패시	
				console.log("통신신팰ㄹㄹㄹ");
				console.log(e);
			}
			
		});
		
		
		
	});
	
		
$("#usercomp").on('click', function() {
		$("#tagList").hide();
		$("#mymapList").hide();
		$("#userList").show();
		
		$("#comp-first").attr("class","none");
		$("#comp-second").attr("class","active");
		$("#comp-third").attr("class","none");

	});

	$("#mymapcomp").on('click', function() {
		$("#userList").hide();
		$("#tagList").hide();		
		$("#mymapList").show();
		
		$("#comp-first").attr("class","none");
		$("#comp-second").attr("class","none");
		$("#comp-third").attr("class","active");

	});
	
	$("#tagcomp").on('click', function() {
		$("#userList").hide();		
		$("#mymapList").hide();
		$("#tagList").show();
		
		$("#comp-first").attr("class","active");
		$("#comp-second").attr("class","none");
		$("#comp-third").attr("class","none");
		

	});	

});



$(function(){
	
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
		 
		 
		 var divhtml = "";
	    	
	    	divhtml +="<ul class='nav nav-tabs'>";
	    	divhtml +="<li role='presentation' class='active' id='comp-first'><a id='tagcomp'>#tag</a></li>";
	    	divhtml +="<li role='presentation' id='comp-second' class='none' ><a id='usercomp'>User </a></li>";
	    	divhtml +="<li role='presentation' id='comp-third' class='none' ><a id='mymapcomp'>My Map</a></li>";
	    	divhtml +="</ul><br><div id='userList'></div><div id='tagList'></div><div id='mymapList'></div>";
	    	
	    	$(".pollSlider").html(divhtml);
	    	
		 
		 
		 
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
				
					 taghtml += '<br><a id="fir-tag-search'+index+'" class="'+value.boa_id+'">'+value.tag_name+'</a><br>';
					   
					 
					 $(document).on("click","#fir-tag-search"+index+"",function(){
						var searchTag = $("#fir-tag-search"+index+"").text();	

						$.ajax({
							
							type:"GET",
							url : "seachResult",
							data: {
							tagName : searchTag								
							},
							success: function(data){
								boardList();
							},
							error : function(e){
								console.log(e);
							}
							
						});
								
						
						
						
						
					 });
					 
	                });					 
				 
				};
				
				
				 $("#tagList").show();
				 $("#tagList").html(taghtml);
				 
				 
				 
				var userhtml ='';	
				
			
				 $.each(userlist, function(index, value ) {
					 userhtml += '<br><h1><a id="sec-user-search'+index+'">'+value.mem_id+'<br></a><hr>';			
					 
					$(document).on("click","#sec-user-search"+index+"",function(){
							var searchUser = $("#sec-user-search"+index+"").text();						
						$("#resultUserlist").val(searchUser);	
						
	                         $.ajax({
							
							type:"GET",
							url : "seachResult",
							data: {
							userId : searchUser								
							},
							success: function(data){
								boardList();
							},
							error : function(e){
								console.log(e);
							}
							
						});
						
						
						
						
							
					 });
				 });
				 
				 $("#userList").hide();
					$("#userList").html(userhtml);
				 
				 var mymaphtml = '';
				 
				 $.each(mymaplist, function(index, value) {				
					 mymaphtml += '<br><a id="thir-mymap-search'+index+'">'+value.tag_name+'</a><br>';
					 
	                });
				 
				 $("#mymapList").hide();
				 $("#mymapList").html(mymaphtml);
				
				 
				 
				 $.each(mymaplist, function(index, value) {		
					 
					 $(document).on("click","#thir-mymap-search"+index+"",function(){
							var searchMymap = $("#thir-mymap-search"+index+"").text();
							 $.ajax({
									
									type:"GET",
									url : "seachResult",
									data: {
									mymapTag : searchMymap								
									},
									success: function(data){
										boardList();
									},
									error : function(e){
										console.log(e);
									}
									
								});
							
						 });
					 
	                });
				
			},
			error : function(e){
				//ajax 통신 실패시	
				console.log("통신신팰ㄹㄹㄹ");
				console.log(e);
			}
			
		});
		
		
		
	});
	 
	 
	
		
	 
		
	 $(document).on("click","#usercomp", function() {
		$("#tagList").hide();
		$("#mymapList").hide();
		$("#userList").show();
		
		$("#comp-first").attr("class","none");
		$("#comp-second").attr("class","active");
		$("#comp-third").attr("class","none");

	});

 $(document).on("click","#mymapcomp", function() {
		$("#userList").hide();
		$("#tagList").hide();		
		$("#mymapList").show();
		
		$("#comp-first").attr("class","none");
		$("#comp-second").attr("class","none");
		$("#comp-third").attr("class","active");

	});
	
	 $(document).on("click","#tagcomp", function() {
		$("#userList").hide();		
		$("#mymapList").hide();
		$("#tagList").show();
		
		$("#comp-first").attr("class","active");
		$("#comp-second").attr("class","none");
		$("#comp-third").attr("class","none");

	});	

});


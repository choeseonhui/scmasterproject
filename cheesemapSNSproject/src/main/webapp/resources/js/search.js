$(function() {
	var searchText = $('#tags').val();
	 $('#tags').keyup(function(){
	       
	       var searchText = $('#tags').val();
	       
	      if(searchText != ""){ 
	         
	       $.ajax({
	          type: 'GET',       
	            url: "autocomplete",
	            data: {
	                input: searchText
	            },
	            success: function (data) {
	               var html = "";
	               html +="<div style='display:block;width :180px;'>";
	                    
	               $.each(data,function(index,object){ 
	                  
	               $(".dropdownpopup").attr("style","display:flex;flex-direction:row;flex-shrink:0;");
	               html +="<a class='onetag' datano='"+object+"' style=' text-decoration:none; padding:8px 14px;align-content : center;border-bottom: 1px solid #dbdbdb;height:50px;display:flex;flex-direction:row;flex-shrink:0;box-sizing : border-box;color:black;align-items :center;text-align: center;'>";
	               html+="<span style='text-align: center; font-size: 33px; color: gray; padding-left: 10px; '>#</span>";
	               html +=""+object+"</a>";                  
	               html +="</div>";
	               
	               });
	               
	               html +="</ul>";
	               
	               $(".dropdownMenu").css("display","block");        
	            
	               $(".dropdownMenu").html(html);
	        
	               
	               
	               $(".onetag:hover").css("background-color","#FF0000");


	               $(document).on("mouseenter", ".onetag", function(e) {
	                  $(this).addClass("hover");
	                  });
	               
	               $(document).on("mouseleave", ".onetag", function(e) {
	                  $(this).removeClass("hover");
	               });
	               
	               
	            $(".onetag").on("click",function(){
	               var onetagname = $(this).attr("datano");
	               startup(onetagname);
	               openSilder();
	               $(".dropdownMenu").css("display","none");
	               
	               
	               console.log(onetagname);
	               $('#tags').val("");
	                  
	               });
	               
	            }
	       });
	        };
	    });
	   
	
	    $('#tags').keydown(function(e) {
	          if(e.keyCode === 13) {
	             var searchWord  = $('#tags').val();
	             startup(searchWord);
	             openSilder();
	             $(".dropdownMenu").css("display","none");
	             $('#tags').val("");
	             
	       
	       }
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




function openSilder(){
	
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
                $("#searchWord").animate({					
					"margin-right" : '+=500'
				});
             }
          };
    
};


function startup(searchWord){
    var divhtml = "";
    
       
       divhtml +="<div id='fixed-menu-bar'><ul class='nav nav-tabs'>";
       divhtml +="<li role='presentation' class='active' id='comp-first'><a id='tagcomp'>#tag</a></li>";
       divhtml +="<li role='presentation' id='comp-second' class='none' ><a id='usercomp'>User </a></li>";
       divhtml +="<li role='presentation' id='comp-third' class='none' ><a id='mymapcomp'>My Map</a></li>";
       divhtml +="</ul></div><br><br><br><div id='userList'></div><div id='tagList'></div><div id='mymapList'></div>";
       
       $(".pollSlider").html(divhtml);
       
    
    
    
   $("#tagList").html('');
   $("#userList").html('');
   $("#mymapList").html('');
   
   $("#comp-first").attr("class","active");
   $("#comp-second").attr("class","none");
   $("#comp-third").attr("class","none");
	
	

      $.ajax({
         type : "GET",         //type of request Method
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
            
            var taghtml ='';
            
            if(taglist.length != 0 ){
         
                $.each(taglist, function() {
                   $.map($(this), function(val,index){
                      console.log(val.TAG_NAME);
                      
               
                   taghtml += '<br><h2><a id="fir-tag-search'+index+'" class="'+val.TAG_NAME+'"> # '+val.TAG_NAME+'</a><h2><br>';
                   taghtml += '<h5>'+val.COUNT+'개의 게시글이 존재합니다.</h5><hr>';         
                
                $(document).on("click","#fir-tag-search"+index+"",function(){               
                  var searchTag = $("#fir-tag-search"+index+"").attr("class");
               console.log(searchTag);

                  $.ajax({                     
                     type:"GET",
                     url : "seachResult",
                     data: {
                     tagName : searchTag                        
                     },
                     success: function(data){
                        boardList();
                        $("#searchWord").html("X "+searchTag);
						$("#searchWord").attr("timeLineFlag", true);
						$("#tags").attr("style", "display : none");
                     },
                     error : function(e){
                        console.log(e);
                     }
                     
                  });
                        
                });
                
                   });   
                });
             
            }else{
               
               console.log("ssss");
                taghtml += '<h5>해당 검색 태그가 존재 하지 않습니다.</h5>';
               
            };
            
            
             $("#tagList").show();
             $("#tagList").html(taghtml);
             
             
             
            var userhtml ='';   
            
         if(userlist.length != 0 ){
             $.each(userlist, function(index, value ) {
               userhtml += '<br><h1><a id="sec-user-search'+index+'" class="'+value.mem_id+'">'+value.mem_id+'<br></a></h1><h5>유저 닉네임 : '+value.mem_nickname+'</h5><hr>';                
               $(document).on("click","#sec-user-search"+index+"",function(){
                  var searchUser = $("#sec-user-search"+index+"").attr("class");               
                  $("#resultUserlist").val(searchUser);   
                  
                            $.ajax({
                     
                     type:"GET",
                     url : "seachResult",
                     data: {
                     userId : searchUser                        
                     },
                     success: function(data){
                        boardList();
                        $("#searchWord").html("X "+searchUser);
						$("#searchWord").attr("timeLineFlag", true);
						$("#tags").attr("style", "display : none");
                        
                     },
                     error : function(e){
                        console.log(e);
                     }
                     
                  });
                  
                });
             });
         } else{
            userhtml += '<h5>해당 하는 유저가  존재 하지 않습니다.</h5>';
               
            };
             $("#userList").hide();
            $("#userList").html(userhtml);
             
            
            
            
            
             var mymaphtml = '';
            
             if(mymaplist.length != 0){
             $.each(mymaplist, function(index, val) { 
            	 $.map($(this), function(){ 
            		 mymaphtml += '<br><h2><a id="thir-mymap-search'+index+'" class="'+val.TAG_NAME+'"> # '+val.TAG_NAME+'</a><h2><br>';
            		 mymaphtml += '<h5>'+val.COUNT+'개의 게시글이 존재합니다.</h5><hr>';
            	
                $(document).on("click","#thir-mymap-search"+index+"",function(){
                      var  searchMymap= $("#thir-mymap-search"+index+"").attr("class");
                      console.log(searchMymap);
                         $.ajax({                              
                              type:"GET",
                              url : "seachResult",
                              data: {
                              mymapTag : searchMymap                        
                              },
                              success: function(data){
                            	  mapList();
	                        	  $("#searchWord").html("X "+searchMymap);
	                        	  $("#searchWord").attr("timeLineFlag", true);
	                        	  $("#tags").attr("style", "display : none");
                              },
                              error : function(e){
                                 console.log(e);
                              }
                              
                           });
                        
                      });
                   
            	 });
                
                   });
             }else{
                
                mymaphtml+= '<h5> 해당 하는 태그가 존재하지 않습니다.</h5>';
             }
             $("#mymapList").hide();
             $("#mymapList").html(mymaphtml);
            
             
             
            
            
         },
         error : function(e){
            //ajax 통신 실패시   
            console.log("전체적인 그냥 실패");
            console.log(e);
         }
         
      });
      
   
}
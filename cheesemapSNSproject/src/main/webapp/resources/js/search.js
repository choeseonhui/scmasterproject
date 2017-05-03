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
	 $("#tagList").css("height","");
	 $("#userList").css("height","");
	 $("#mymapList").css("height","");
	 
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
            var tagindex=[];
            if(taglist.length != 0 ){
         
                $.each(taglist, function(index, val) {
                   $.map($(this), function(){
                      console.log(val.TAG_NAME);
                      
                   taghtml += '<br><h2><a id="fir-tag-search'+index+'" class="'+val.TAG_NAME+'" style="color: #4e9cab"> # '+val.TAG_NAME+'</a></h2><br>';
                   taghtml += '<h5> 게시물 '+val.COUNT+'개</h5><hr>';         
                   tagindex.push(index);
                   
                   
                   });   
                });
             
            }else{
               
               console.log("ssss");
                taghtml += '<h2><br></h2><h5 style="height: 100px;">해당 검색 태그가 존재 하지 않습니다.</h5>';
               
               
            };
            
            
             $("#tagList").show();
             $("#tagList").html(taghtml);
             
             if(taglist.length != 0 ){
                 $.each(taglist, function(index, val) {
                     $("#fir-tag-search"+index).on("click", function(){               
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
                               $("#searchWord").html("&nbsp&nbsp&nbsp&nbsp&nbsp # &nbsp&nbsp "+searchTag+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp");
                               $("#searchWord").css("background-color","white");
        						$("#searchWord").attr("timeLineFlag", true);
        						$("#tags").attr("style", "display : none");
                            },
                            error : function(e){
                               console.log(e);
                            }
                            
                         });
                               
                       });
                 });
                 tagindex=[];
             }
             
            var userhtml ='';   
            
         if(userlist.length != 0 ){
        	 $.each(userlist, function(index, value ) {
        		 userhtml += '<div id="user" class="user"><div id="innerUser" style="padding: 30px;"><table class="j-table"><tr><td rowspan="2">';               
                 userhtml += '<img id="sec-user-search'+index+'" user_id = "'+value.mem_id +'" class="w3-circle user_id" src="download?mem_id='+value.mem_id+'" width="90" height="90"></img>';
                 userhtml += '<td style=" width: 200px; border-bottom: 1px solid gray;">'+value.mem_id+'</td></tr>';
                 userhtml += '<tr><td>'+value.mem_nickname+'</td></tr></table></div></div>';
                 $(document).on("click","#sec-user-search"+index+"",function(){
                    var searchUser = $("#sec-user-search"+index+"").attr("user_id");
                    console.log(searchUser);
                    $("#resultUserlist").val(searchUser);   
                  
                            $.ajax({
                     
                     type:"GET",
                     url : "seachResult",
                     data: {
                     userId : searchUser                        
                     },
                     success: function(data){
                        boardList();
                        $("#searchWord").html("&nbsp&nbsp"+searchUser+"&nbsp&nbsp");
                        $("#searchWord").css("background-color","white");
						$("#searchWord").attr("timeLineFlag", true);
						$("#tags").attr("style", "display : none");
						 $(".dropdownMenu").css("display","none");
                        
                     },
                     error : function(e){
                        console.log(e);
                     }
                     
                  });
                  
                });
             });
         } else{
            userhtml += '<h2><br></h2><h5 style="height: 100px;">해당 하는 유저가  존재 하지 않습니다.</h5>';
        
               
            };
             $("#userList").hide();
            $("#userList").html(userhtml);
             
            
            
            
            
             var mymaphtml = '';
             var mymapindex=[];
             if(mymaplist.length != 0){
             $.each(mymaplist, function(index, val) { 
            	 $.map($(this), function(){ 
            		 mymaphtml += '<br><h2><a id="thir-mymap-search'+index+'" class="'+val.TAG_NAME+'"> # '+val.TAG_NAME+'</a><h2><br>';
            		 mymaphtml += '<h5>'+val.COUNT+'개의 게시글이 존재합니다.</h5><hr>';
            		 mymapindex.push(index);
            	 });
                
                   });
             }else{
                
                mymaphtml+= '<h2><br></h2><h5 style="height: 100px;"> 해당 하는 태그가 존재하지 않습니다.</h5>';
                
                
               
             }
             $("#mymapList").hide();
             $("#mymapList").html(mymaphtml);
            
             if(mymaplist.length != 0){
                 $.each(mymaplist, function(index, val) {
                     $("#thir-mymap-search"+index).on("click", function(){
                         var  searchMymap= $("#thir-mymap-search"+index+"").attr("class");
                            $.ajax({                              
                                 type:"GET",
                                 url : "seachResult",
                                 data: {
                                 mymapTag : searchMymap                        
                                 },
                                 success: function(data){
                               	  mapList();
   		                            $("#searchWord").html("&nbsp&nbsp&nbsp&nbsp&nbsp # &nbsp&nbsp "+searchMymap+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp");
   		                            $("#searchWord").css("background-color","white");
   		          					$("#searchWord").attr("timeLineFlag", true);
   		          					$("#tags").attr("style", "display : none");
                                 },
                                 error : function(e){
                                    console.log(e);
                                 }
                                 
                              });
                           
                         });
                 });
                 mymapindex=[];
             }
             
            
            
         },
         error : function(e){
            //ajax 통신 실패시   
            console.log("전체적인 그냥 실패");
            console.log(e);
         }
         
      });
      
   
}
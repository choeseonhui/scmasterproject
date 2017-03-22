$(document).ready(function()
		{
		  $('#pollSlider-button').click(function() {
		    if($(this).css("margin-right") == "500px")
		    {     
		    
		    	$('#map').animate({"margin-right": '-=500'});
		    	$('#map').animate({"margin-left": '+=500'}); 
		    	
		    	  $('#pollSlider-button').animate({"margin-right": '-=500'});
		          
		        $('.pollSlider').animate({"margin-right": '-=500'});
		        
		      
		      
		      
		       
		    } else{
		    	
		    	$('#map').animate({"margin-right": '+=500'});
		    	$('#map').animate({"margin-left": '-=500'});
		         
		         
		         $('#pollSlider-button').animate({"margin-right": '+=500'}); 
		         $('.pollSlider').animate({"margin-right": '+=500'});
		      
		        
		        
		    }

		  });
		 });  
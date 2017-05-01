$(document).ready(function(){
	
		
	$("#pin1").css("top",100);
	$("#pin1").css("left",-200);
	
	$("#pin2").css("top",150);
	$("#pin2").css("left",900);
	
	$("#pin3").css("top",220);
	$("#pin3").css("left",600);
	
	$("#pin4").css("top",30);
	$("#pin4").css("left",200);
	
	$("#pin5").css("top",2);
	$("#pin5").css("left",1100);
	
	$("#pin6").css("top",90);
	$("#pin6").css("left",1200);
	
	
	
		$(".mainText").addClass('animated bounceInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
			$("#pin1").css("display","inline");
			$("#pin1").css("-webkit-filter","blur(2px)");
			$("#pin1").css("height","150px");
			$("#pin1").addClass('animated fadeInUp');
			

			$("#pin2").css("display","inline");
			$("#pin2").css("-webkit-filter","blur(2px)");
			$("#pin2").css("height","200px");
			$("#pin2").addClass('animated fadeInUp');
			
			
			
			$("#pin3").css("display","inline");			
			$("#pin3").css("-webkit-filter","blur(2px)");
			$("#pin3").css("height","100px");
			$("#pin3").addClass('animated fadeInUp');
			
			
			$("#pin4").css("display","inline");
			$("#pin4").css("-webkit-filter","blur(1.5px)");
			$("#pin4").css("height","450px");
			$("#pin4").addClass('animated fadeInUp');
			
			$("#pin5").css("display","inline");
			$("#pin5").css("-webkit-filter","blur(2px)");			
			$("#pin5").css("height","90px");
			$("#pin5").addClass('animated fadeInUp');
			
			
			$("#pin6").css("display","inline");
			$("#pin6").css("-webkit-filter","blur(2px)");			
			$("#pin6").css("height","340px");
			$("#pin6").addClass('animated fadeInUp');
			
			
		});
				
		
})

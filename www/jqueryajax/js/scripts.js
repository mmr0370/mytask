/* 代码整理：懒人之家 lanrenzhijia.com */
$(function() {
	$(".next").click(function(){ /*  When next is clicked  */
		$("#slide1").animate({"left": "-715px"}, 500); /*  Slide away the first slide  */
		$("#slide2").animate({"left": "0"}, 500, function(){ /*  And slide in the new once, once that if finished run this function  */
		
		$.ajax({ 
			type: 'post', 
			dataType: 'json', 
			url: 'grab.php', 
			data: 'username=' + $('#username').val() + '&email=' + $('#email').val(), 
			success: function(e){ /*  On success  */
				if(e.error == 1){ // if there as an error
					$('.error').css({"display": "none"});// remove all error messages as we want to display messages for this current go
					
					if(e.username == 1){
						$('.errorU').css({"display": "block"});
					}
					
					if(e.email == 1){
						$('.errorE').css({"display": "block"});
					}
					if(e.private == 1){
						$('.errorP').css({"display": "block"});
					}
					
					/*  
					
						We now slide back in the first slide with the error "p" elements
						Now visible.
					
					*/
					 
					$("#slide2").animate({"left": "710px"}, 500);
					$("#slide1").animate({"left": "0px"}, 500);
				}else{ 
					/*  
						
						There was no error so we remove slide 2
						and bring in the thanks!
						
					
					*/
	 				$("#slide2").animate({"left": "-710px"}, 500);
					$("#slide3").animate({"left": "0px"}, 500);
				}
			}
		});
		
		
		});
	});	
	
});

/* 代码整理：懒人之家 lanrenzhijia.com */

		var z = Math.floor((Math.random()*100)+1);

$(document).ready(function(){
	
		/*var z;
		$('button').click(function(){
			z = (Math.floor((Math.random()*100)+1));
			$('div').text(z);
		});*/
		//prompt(z).value;
		$('div').text(z);
	
		/*----------------------------------------------*/	
		
		/*	LEARN
			
			passing users number from text box into variable 
			for use by jQ/js
			
			var ui = $('#textbox');
		*/
		
		var ui = $('#textbox');
		
		$('.txtbutton').click(function(){
			var x = ui.val();
			//confirm(x);
		});
		
		/*----------------------------------------------*/
		
		$('div').text(z);
		
		/*----------------------------------------------*/
	
		/*	LEARN
			
			generating a random number 1 thru 100
			(note .floor)
			
			var z = confirm(Math.floor((Math.random()*100)+1));
		
	
			$('button').click(function(){
				var z = confirm(Math.floor((Math.random()*100)+1));
			});
		
		*/
		/*----------------------------------------------*/
		

		
});
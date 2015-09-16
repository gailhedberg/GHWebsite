	// 
	// photoSlider.js 
	//
	// this is the javascript file for the Family Photos page on:
	//		www.gailhedberg.prosperitacademy.com
	//
	//	written by gail hedberg Ma, USA
	//
	//	modification history: 5/21/2015 - started development
	//  
	//
	
	$(document).ready(function() {
		alert("got here - 0");
		// create some variables to hold the image and title
		var nextSlide = $("#slides img:first-child"); 	// get the div element, then it's first img child
		var nextCaption;
		var nextSlideSource;
		
		// start slide show - change images on 3 second count
		//   
		var timer = setInterval(
			function () { // the setInterval first parameter is a function() 
				$("#caption").fadeOut(1010);	// select the caption and fade out
				$("#slide").fadeOut(1010, 		// select the slide and fade out AND use a callback function
					function () {				// the fadeOut callback -> setup the new img and caption & fadeIn
						if (nextSlide.next().length == 0) {		// the there are no more imgs - reset to 1st img
								nextSlide = $("#slides img:first-child");
						}
						else {
							nextSlide = nextSlide.next();
						}
						nextSlideSource = nextSlide.attr("src");
						nextCaption = nextSlide.attr("alt");
						$("#slide").attr("src", nextSlideSource).fadeIn(1000);
						$("#caption").text(nextCaption).fadeIn(1000);
					} 							// end of fadeOut callback 
				); 								// end of fadeOut for the slide 
			},									// end of first parameter function for setInterval		
		3000); 			// the setInterval second parameter is a timer - every 3 seconds
	});
	
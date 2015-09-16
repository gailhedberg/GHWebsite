	// 
	// familyPhotos.js 
	//
	// this is the javascript file for the Family Photos page on:
	//		www.gailhedberg.prosperitacademy.com
	//
	//	written by gail hedberg Ma, USA
	//
	//	modification history: 5/21/2015 - started development
	//		5/22/15 - debugged on local pc, moved to wp server for testing
	//  
	//
	
	jQuery(document).ready(function() {
		//alert("got here - 0");
		// create an array of the images
		var image, imageCache = [];
		
		// for each img in the html, create an Image() and set it's src and title
		jQuery("#slides img").each(function() {
			image = new Image();
			image.src = jQuery(this).attr("src");
			image.title = jQuery(this).attr("alt");
			imageCache.push(image);
		});
		
		
		// start slide show
		var imageCounter = 0;
		var nextImage;
		
		var timer = setInterval(	// setInterval(f1(f1-1()), timer)
			function () { // the setInterval first parameter function() 
				jQuery("#caption").fadeOut(1010);	// select the caption and fade out
				jQuery("#slide").fadeOut(1010, 		// select the slide and fade out 
					// fadeout callback
					function () {
						imageCounter = (imageCounter + 1) % imageCache.length;
						nextImage = imageCache[imageCounter];
						jQuery("#slide").attr("src", nextImage.src).fadeIn(1000);
						jQuery("#caption").text(nextImage.title).fadeIn(1000);
					}	// end of fadeOut callback 
				);	// end of fadeOut method
			}, 	//	end of setinterval function
		3000); 	// the setInterval timer 
	}); //end of ready ()
	
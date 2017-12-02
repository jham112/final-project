$(document).ready(function() {

  var viewerWidth = $( '#viewer' ).width();
  if (viewerWidth < 800) {
  	$( '#viewer' ).height( viewerWidth * 0.75 );
  }

  $( window ).resize(function() {
  	var viewerWidth = $( '#viewer' ).width();
  	if (viewerWidth < 800) {
  		$( '#viewer' ).height( viewerWidth * 0.75 );
  	}
  });


    $('img').click(function(){
    	var theWidth = this.naturalWidth;
    	var theHeight = this.naturalHeight;
    	// get a random new smaller width from the user
    	// just to demonstrate how this works
    	var newWidth = 700;
    	// calc the change from original width to new width
    	var thePercent = newWidth / theWidth;
    	// apply same to height
    	var newHeight = theHeight * thePercent;
    	// jQuery resizes the image based on the desired new width
    	$(this).css( { "width": newWidth, "height": newHeight } );
    });

  });

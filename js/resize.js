$(document).ready(function() {

  var viewerWidth = $( '.vieweR' ).width();
  if (viewerWidth < 750) {
  	$( '.viewer' ).height( viewerWidth * 0.75 );
  }

  $( window ).resize(function() {
  	var viewerWidth = $( '.vieweR' ).width();
  	if (viewerWidth < 750) {
  		$( '.vieweR' ).height( viewerWidth * 0.75 );
  	}
  });


    $('img').load(function(){
    	var theWidth = this.naturalWidth;
    	var theHeight = this.naturalHeight;

    	var newWidth = 700;

    	var thePercent = newWidth / theWidth;

    	var newHeight = theHeight * thePercent;

    	$(this).css( { "width": newWidth, "height": newHeight } );
    });

  });

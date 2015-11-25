causeRepaintsOn = $("h1, h2, h3, p");
$(document).ready(function(){
	$('header .background img').css("width",window.innerWidth);
	var height = $('header .background img').height();
	$('header').css("height",height);

});



$(window).resize(function() {
  causeRepaintsOn.css("z-index", 1);
  $('header .background img').css("width",window.innerWidth);
  var height = $('header .background img').height();
	$('header').css("height",height);
});


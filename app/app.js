causeRepaintsOn = $();
$(document).ready(function(){
	$('header .background img').css("width",window.innerWidth);
	var height = $('header .background img').height();
	
	$('header').css("height",height);

	var img_height = $('.clearfix div img').height();
	$('.clearfix div').css({
		
		height: img_height
	})
});



$(window).resize(function() {
  	causeRepaintsOn.css("z-index", 1);

  	$('header .background img').css("width",window.innerWidth);
  	var height = $('header .background img').height();
	$('header').css("height",height);
	$('.clearfix div img').css('width',window.innerWidth*0.5);
	var img_height = $('.clearfix div img').height();
	$('.clearfix div').css({
		"width": "50%",
		"height": img_height
	})

});

$('.dropdown .btn').on('click',function(){
	var height = $('header .background img').height();
	$('.dropdown ul').css('height',height);
})
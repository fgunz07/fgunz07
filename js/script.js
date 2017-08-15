$(document).ready(function(){
	$('.menu-button').click(function(){
		$('.menu-button').toggleClass('active');
		$('.menu-icon').toggleClass('active');
		$('#navbar-wapper').toggleClass('active');
	});
});

$(window).on('scroll', function(){
		var show = $(this),
		button = $('.button'),
		height = show.height(),
		top = show.scrollTop();
		if(top > 320){
			$('.button').addClass('on');
		}else{
			$('.button').removeClass('on');
		}
	});

$('.button').click(function(){
	$('html body').animate({scrollTop: 0}, 1000);
});
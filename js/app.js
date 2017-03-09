$(document).foundation()

let height = $(window).height();

$('body').css('height', height);

// Fixed Nav
$(document).ready(function ($) {
	$(window).scroll(function(){
		var scrollTop = height-50;
		if($(window).scrollTop() >= scrollTop){
			$('nav').css({
				position : 'fixed',
				top : '0',
				bottom: 'initial'
			});
		}
		if($(window).scrollTop() < scrollTop){
			$('nav').removeAttr('style');	
		}
	})
  
  // Active Nav Link
  $('nav ul li a').click(function(){
         $('nav ul li a').removeClass('active');
         $(this).addClass('active');
    });
})


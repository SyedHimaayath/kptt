// window.onload = function(){

// }

$(window).on('scroll',function(){

	var wScroll = $(this).scrollTop()
	var c1 = document.querySelector('.c01')
	c1.style.top=wScroll*0.1+'px';
	var c2 = document.querySelector('.c02')
	c2.style.top=wScroll*0.15+'px';
	var i1 = document.querySelector('.i1')
	i1.style.top=wScroll*0.1+'px';
	
});
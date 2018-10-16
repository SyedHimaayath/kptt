// window.onload = function(){
	
	
// }


// $(function(){
//     $('.min-head').data('size','big');
// });

// $(window).scroll(function(){
//     if($(document).scrollTop() > 0)
//     {
//         if($('.min-head').data('size') == 'big')
//         {
//             $('.min-head').data('size','small');
//             $('.min-head').stop().animate({
//                 height:'40px'
//             },600);
//         }
//     }
//     else
//     {
//         if($('.min-head').data('size') == 'small')
//         {
//             $('.min-head').data('size','big');
//             $('.min-head').stop().animate({
//                 height:'100px'
//             },600);
//         }  
//     }
// });

// $("#jumbo").addClass("load");​

$(document).on("scroll", function(){

	// var wScroll = $(this).scrollTop()
	// var c1 = document.querySelector('.c01')
	// c1.style.top=wScroll*0.1+'px';
	// var c2 = document.querySelector('.c02')
	// c2.style.top=wScroll*0.15+'px';

	if($(document).scrollTop() > 70){
	  $(".logo_img").addClass("shrink");
	  $(".navbar-nav").addClass("desc")
	  $(".myheader").addClass("rem")
	}
	else
	{
		$(".logo_img").removeClass("shrink");
		$(".navbar-nav").removeClass("desc")
		$(".myheader").removeClass("rem")
	}
});

// $(window).on('scroll',function(){

// 	var wScroll = $(this).scrollTop()
// 	var c1 = document.querySelector('.c01')
// 	c1.style.top=wScroll*0.1+'px';
// 	var c2 = document.querySelector('.c02')
// 	c2.style.top=wScroll*0.15+'px';
	
// });

$('.closeBt').on('click',function(){
	$('.collapse').removeClass('in')
});

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
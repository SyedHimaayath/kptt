// window.onload = function(){
	
	
// }

$(window).on('scroll',function(){

	var wScroll = $(this).scrollTop()
	var c1 = document.querySelector('.c01')
	c1.style.top=wScroll*0.1+'px';
	var c2 = document.querySelector('.c02')
	c2.style.top=wScroll*0.15+'px';
	
});

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
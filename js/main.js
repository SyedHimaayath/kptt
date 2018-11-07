
$(document).on("scroll", function(){

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
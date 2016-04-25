
$(document).ready(function() {
	
$( function() {
    $( '#gallery' ).jGallery();
} );
	
$(".categories li").click(function() {
	$(".categories li").removeClass("active");
	$(this).addClass("active");
});

var top_show = 150;
var delay = 1000;
$(document).ready(function() {
$(window).scroll(function () {
  if ($(this).scrollTop() > top_show) $('#top').fadeIn();
  else $('#top').fadeOut();
});
$('#top').click(function () {
  $('body, html').animate({
	scrollTop: 0
}, delay);
});
});	


function heightDetect() {
	$(".main_head, .about_container, .footer_container").css("height", $(window).height());
	};
	heightDetect();
	$(window).resize(function() {
	heightDetect();
	});
});


$('a[href*="#"]:not([href="#"])').click(function() {
if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
  var target = $(this.hash);
  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
  if (target.length) {
	$('html, body').animate({
	  scrollTop: target.offset().top
	}, 1000);
	return false;
  }
}

	
});
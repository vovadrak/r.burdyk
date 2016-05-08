
$(document).ready(function() {
	
	$(function(){
    $('#portfolio_grid').mixItUp();
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

// Onclick img

function handler(e) {
e.preventDefault();
largeimage.setAttribute("src", this.getAttribute("href"));
largeimage.setAttribute("alt", this.querySelector("img").getAttribute("alt"));
largeimage.animate([
  { opacity: '0'},
  { opacity: '1'}
], {
  duration: 500
});
}

var jgallery = document.getElementById("javascript-gallery"),
largeimagecontainer = document.getElementById("fullimagecontainer"),
links = jgallery.getElementsByTagName('a'),
largeimage = document.createElement("img");

largeimage.setAttribute("id", "fullimage");
largeimagecontainer.appendChild(largeimage);

for (var i=0; i<links.length; i++) {
links[i].onclick = handler;
}

links[0].focus();
links[0].click();
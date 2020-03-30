var viewportHeight = $(window).height(); // == 100vh
var reqheight = viewportHeight * 10/100.0; // ==10vh
//console.log(reqheight);

$(document).ready(function () {

	$(window).scroll(function () {
		if ($(this).scrollTop() > reqheight) {
			//change yes to no
			$('h1').html('Stay HOME - Stay SAFE');
		} else {
			//set h1 text to yes
			$('h1').html('Coronavirus Info - India 🇮🇳');
		}
	});
});
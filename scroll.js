var viewportHeight = $(window).height(); // == 100vh
var reqheight = viewportHeight * 45/100.0; // ==46vh
//console.log(reqheight);

$(document).ready(function () {

	$(window).scroll(function () {
		if ($(this).scrollTop() > reqheight) {
			//change yes to no
			$('h1').html('Articles');
		} else {
			//set h1 text to yes
			$('h1').html('Top News');
		}
	});
});

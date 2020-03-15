// auto darkmode on time

var myDate = new Date();
var time = myDate.getHours();
console.log(time);

if (time >= 18 || time <= 4) {

	//dark mode - (time >= 18 || time <= 4)

	document.body.style.backgroundColor = "#1D1D1D";

	document.getElementById("date").style.color = "#F2F2F2";

	var h1 = document.getElementsByTagName("h1");
	for (var i = 0; i < h1.length; i++) {
		h1[i].style.color = "#fff";
	}
	var h2 = document.getElementsByTagName("h2");
	for (var i = 0; i < h2.length; i++) {
		h2[i].style.color = "#fff";
	}
	var h4 = document.getElementsByTagName("h4");
	for (var i = 0; i < h4.length; i++) {
		h4[i].style.color = "#fff";
	}
	var h5 = document.getElementsByTagName("h5");
	for (var i = 0; i < h5.length; i++) {
		h5[i].style.color = "#fff";
	}
	var h6 = document.getElementsByTagName("h6");
	for (var i = 0; i < h6.length; i++) {
		h6[i].style.color = "#B5B5B5";
	}

	var aimg = document.getElementsByClassName("aimg");
	for (var i = 0; i < aimg.length; i++) {
		aimg[i].style["boxShadow"] = "0 0.5vh 2vh 0 #88888833";
	}

	var lw = document.getElementsByClassName("loader-wrapper");
	for (var i = 0; i < lw.length; i++) {
		lw[i].style.backgroundColor = "#2C2C2C";
	}

	document.getElementById("top").style.backgroundColor = "#1D1D1D";

	var druhin = document.getElementsByClassName("druhin");
	for (var i = 0; i < druhin.length; i++) {
		druhin[i].style.color = "#f2f2f2";
	}



} else {

	//light mode

	document.body.style.backgroundColor = "#fff";

	document.getElementById("date").style.color = "#5D5D5D";

	var h1 = document.getElementsByTagName("h1");
	for (var i = 0; i < h1.length; i++) {
		h1[i].style.color = "#000";
	}
	var h2 = document.getElementsByTagName("h2");
	for (var i = 0; i < h2.length; i++) {
		h2[i].style.color = "#000";
	}
	var h4 = document.getElementsByTagName("h4");
	for (var i = 0; i < h4.length; i++) {
		h4[i].style.color = "#000";
	}
	var h5 = document.getElementsByTagName("h5");
	for (var i = 0; i < h5.length; i++) {
		h5[i].style.color = "#000";
	}
	var h6 = document.getElementsByTagName("h6");
	for (var i = 0; i < h6.length; i++) {
		h6[i].style.color = "#b7b7b7";
	}

	var aimg = document.getElementsByClassName("aimg");
	for (var i = 0; i < aimg.length; i++) {
		aimg[i].style["boxShadow"] = "0 0.5vh 2vh 0 #00000033";
	}

	var lw = document.getElementsByClassName("loader-wrapper");
	for (var i = 0; i < lw.length; i++) {
		lw[i].style.backgroundColor = "#F3F3F3";
	}

	document.getElementById("top").style.backgroundColor = "#fff";

	var druhin = document.getElementsByClassName("druhin");
	for (var i = 0; i < druhin.length; i++) {
		druhin[i].style.color = "#131313";
	}
}
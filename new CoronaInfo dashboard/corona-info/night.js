// root color scheme


///*	background colors*/

//	--bg-light: #FCF4EF;
//	--bg-dark: #121212;


//
//	/*  logo colors*/

//	--red: #de5c5c;
//	--transparent: #de5c5c00;


///*	news colors*/
//	--red1: #f6b5b5;
//	--red2: #de5c5c;


//
//	/*	card colors*/

//	--card-light: #fff;
//	--card-dark: #232222;


//
//	/*	state card colors*/

//	--state-card-light: #edeeef;
//	--state-card-dark: #111111;


//
//	/*	state card heading colors*/

//	--state-card-head-light: #dcdcdc;
//	--state-card-headfont-light: #7C848B;

//	--state-card-head-dark: #232222;
//	--state-card-headfont-dark: #D1D1D1;


//
//	/*	state card data colors*/

//	--state-card-data-light: #ffffff;
//	--state-card-datafont-light: #7c848b;
//
//	--state-card-data-dark: #373636;
//	--state-card-datafont-dark: #D1D1D1;







//console.log(document.getElementsByClassName("state-name-1").length);
//0 means true
//1 means false

//console.log(localStorage);

//checking if dark mode was already selected or not

if (localStorage.getItem('Dark') == 0) {
	localStorage.setItem('Dark', 0);

	//changing the root values to dark

	document.documentElement.style.setProperty('--bg-light', '#121212');
	document.documentElement.style.setProperty('--card-light', '#232222');
	document.documentElement.style.setProperty('--state-card-light', '#111111');
	document.documentElement.style.setProperty('--state-card-head-light', '#232222');
	document.documentElement.style.setProperty('--state-card-headfont-light', '#D1D1D1');
	document.documentElement.style.setProperty('--state-card-data-light', '#373636');
	document.documentElement.style.setProperty('--state-card-datafont-light', '#D1D1D1');
	document.documentElement.style.setProperty('--red2', '#f6b5b5');
	document.documentElement.style.setProperty('--red1', '#de5c5c');





	//	document.getElementById("nighty").src = "assets/night-dark.svg";
	//	document.getElementById("notification").src = "assets/notification-dark.svg";
}

if (localStorage.getItem('Dark') == 1) {
	localStorage.setItem('Dark', 1);

	//changing the root values to light


	document.documentElement.style.setProperty('--bg-light', '#FCF4EF');
	document.documentElement.style.setProperty('--card-light', '#fff');
	document.documentElement.style.setProperty('--state-card-light', '#edeeef');
	document.documentElement.style.setProperty('--state-card-head-light', '#dcdcdc');
	document.documentElement.style.setProperty('--state-card-headfont-light', '#7C848B');
	document.documentElement.style.setProperty('--state-card-data-light', '#ffffff');
	document.documentElement.style.setProperty('--state-card-datafont-light', '#7c848b');

	document.documentElement.style.setProperty('--red1', '#f6b5b5');
	document.documentElement.style.setProperty('--red2', '#de5c5c');



	//	document.getElementById("nighty").src = "assets/night-light.svg";
	//	document.getElementById("notification").src = "assets/notification-light.svg";
}




function myFunction() {


	if (localStorage.getItem('Dark') == 0) {

		localStorage.setItem('Dark', 1);

		//changing the root values to light


		document.documentElement.style.setProperty('--bg-light', '#FCF4EF');
		document.documentElement.style.setProperty('--card-light', '#fff');
		document.documentElement.style.setProperty('--state-card-light', '#edeeef');
		document.documentElement.style.setProperty('--state-card-head-light', '#dcdcdc');
		document.documentElement.style.setProperty('--state-card-headfont-light', '#7C848B');
		document.documentElement.style.setProperty('--state-card-data-light', '#ffffff');
		document.documentElement.style.setProperty('--state-card-datafont-light', '#7c848b');



		//		document.getElementById("nighty").src = "assets/night-light.svg";
		//		document.getElementById("notification").src = "assets/notification-light.svg";

	} else {

		localStorage.setItem('Dark', 0);

		//changing the root values to dark

		document.documentElement.style.setProperty('--bg-light', '#121212');
		document.documentElement.style.setProperty('--card-light', '#232222');
		document.documentElement.style.setProperty('--state-card-light', '#111111');
		document.documentElement.style.setProperty('--state-card-head-light', '#232222');
		document.documentElement.style.setProperty('--state-card-headfont-light', '#D1D1D1');
		document.documentElement.style.setProperty('--state-card-data-light', '#373636');
		document.documentElement.style.setProperty('--state-card-datafont-light', '#D1D1D1');



		//		document.getElementById("nighty").src = "assets/night-dark.svg";
		//		document.getElementById("notification").src = "assets/notification-dark.svg";
	}

	console.log(localStorage);

}

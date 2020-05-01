//console.log(document.getElementsByClassName("state-name-1").length);
//0 means true
//1 means false

//console.log(localStorage);

//checking if dark mode was already selected or not

if (localStorage.getItem('Dark') == 0) {
	localStorage.setItem('Dark', 1);
	myFunction();
}

if (localStorage.getItem('Dark') == 1) {
	localStorage.setItem('Dark', 0);
	myFunction();
}




function myFunction() {


	if (localStorage.getItem('Dark') == 0) {

		localStorage.setItem('Dark', 1);

		document.body.style.backgroundColor = "var(--bg-light)";

		document.getElementById("top").style.backgroundColor = "var(--bg-light)";
		document.getElementById("card").style.backgroundColor = "var(--card-light)";

		document.getElementById("state-card").style.backgroundColor = "var(--state-card-light)";
		
		
		
		
		document.getElementById("s0-name").style.color = "var(--state-card-headfont-light)";
		document.getElementById("s1-name").style.color = "var(--state-card-headfont-light)";
		document.getElementById("s2-name").style.color = "var(--state-card-headfont-light)";
		document.getElementById("s3-name").style.color = "var(--state-card-headfont-light)";
		document.getElementById("s4-name").style.color = "var(--state-card-headfont-light)";
		document.getElementById("s5-name").style.color = "var(--state-card-headfont-light)";
		document.getElementById("s6-name").style.color = "var(--state-card-headfont-light)";
		document.getElementById("s7-name").style.color = "var(--state-card-headfont-light)";
		document.getElementById("s8-name").style.color = "var(--state-card-headfont-light)";
		document.getElementById("s9-name").style.color = "var(--state-card-headfont-light)";
		document.getElementById("s10-name").style.color = "var(--state-card-headfont-light)";
		document.getElementById("s11-name").style.color = "var(--state-card-headfont-light)";
		document.getElementById("s12-name").style.color = "var(--state-card-headfont-light)";
		document.getElementById("s13-name").style.color = "var(--state-card-headfont-light)";
		document.getElementById("s14-name").style.color = "var(--state-card-headfont-light)";
		document.getElementById("s15-name").style.color = "var(--state-card-headfont-light)";
		document.getElementById("s16-name").style.color = "var(--state-card-headfont-light)";
		document.getElementById("s17-name").style.color = "var(--state-card-headfont-light)";
		document.getElementById("s18-name").style.color = "var(--state-card-headfont-light)";
		document.getElementById("s19-name").style.color = "var(--state-card-headfont-light)";
		document.getElementById("s20-name").style.color = "var(--state-card-headfont-light)";
		document.getElementById("s21-name").style.color = "var(--state-card-headfont-light)";
		document.getElementById("s22-name").style.color = "var(--state-card-headfont-light)";
		document.getElementById("s23-name").style.color = "var(--state-card-headfont-light)";
		document.getElementById("s24-name").style.color = "var(--state-card-headfont-light)";
		document.getElementById("s25-name").style.color = "var(--state-card-headfont-light)";
		document.getElementById("s26-name").style.color = "var(--state-card-headfont-light)";
		document.getElementById("s27-name").style.color = "var(--state-card-headfont-light)";
		document.getElementById("s28-name").style.color = "var(--state-card-headfont-light)";
		document.getElementById("s29-name").style.color = "var(--state-card-headfont-light)";
		document.getElementById("s30-name").style.color = "var(--state-card-headfont-light)";
		document.getElementById("s31-name").style.color = "var(--state-card-headfont-light)";
		document.getElementById("s32-name").style.color = "var(--state-card-headfont-light)";
		document.getElementById("s33-name").style.color = "var(--state-card-headfont-light)";
		document.getElementById("s34-name").style.color = "var(--state-card-headfont-light)";
		document.getElementById("s35-name").style.color = "var(--state-card-headfont-light)";
		document.getElementById("s36-name").style.color = "var(--state-card-headfont-light)";
		
		
		
		
		
		document.getElementById("s0-name").style.color = "var(--state-card-headfont-light)";
		document.getElementById("s1-name").style.color = "var(--state-card-headfont-light)";
		document.getElementById("s2-name").style.color = "var(--state-card-headfont-light)";
		document.getElementById("s3-name").style.color = "var(--state-card-headfont-light)";
		document.getElementById("s4-name").style.color = "var(--state-card-headfont-light)";
		document.getElementById("s5-name").style.color = "var(--state-card-headfont-light)";
		document.getElementById("s6-name").style.color = "var(--state-card-headfont-light)";
		document.getElementById("s7-name").style.color = "var(--state-card-headfont-light)";
		document.getElementById("s8-name").style.color = "var(--state-card-headfont-light)";
		document.getElementById("s9-name").style.color = "var(--state-card-headfont-light)";
		document.getElementById("s10-name").style.color = "var(--state-card-headfont-light)";
		document.getElementById("s11-name").style.color = "var(--state-card-headfont-light)";
		document.getElementById("s12-name").style.color = "var(--state-card-headfont-light)";
		document.getElementById("s13-name").style.color = "var(--state-card-headfont-light)";
		document.getElementById("s14-name").style.color = "var(--state-card-headfont-light)";
		document.getElementById("s15-name").style.color = "var(--state-card-headfont-light)";
		document.getElementById("s16-name").style.color = "var(--state-card-headfont-light)";
		document.getElementById("s17-name").style.color = "var(--state-card-headfont-light)";
		document.getElementById("s18-name").style.color = "var(--state-card-headfont-light)";
		document.getElementById("s19-name").style.color = "var(--state-card-headfont-light)";
		document.getElementById("s20-name").style.color = "var(--state-card-headfont-light)";
		document.getElementById("s21-name").style.color = "var(--state-card-headfont-light)";
		document.getElementById("s22-name").style.color = "var(--state-card-headfont-light)";
		document.getElementById("s23-name").style.color = "var(--state-card-headfont-light)";
		document.getElementById("s24-name").style.color = "var(--state-card-headfont-light)";
		document.getElementById("s25-name").style.color = "var(--state-card-headfont-light)";
		document.getElementById("s26-name").style.color = "var(--state-card-headfont-light)";
		document.getElementById("s27-name").style.color = "var(--state-card-headfont-light)";
		document.getElementById("s28-name").style.color = "var(--state-card-headfont-light)";
		document.getElementById("s29-name").style.color = "var(--state-card-headfont-light)";
		document.getElementById("s30-name").style.color = "var(--state-card-headfont-light)";
		document.getElementById("s31-name").style.color = "var(--state-card-headfont-light)";
		document.getElementById("s32-name").style.color = "var(--state-card-headfont-light)";
		document.getElementById("s33-name").style.color = "var(--state-card-headfont-light)";
		document.getElementById("s34-name").style.color = "var(--state-card-headfont-light)";
		document.getElementById("s35-name").style.color = "var(--state-card-headfont-light)";
		document.getElementById("s36-name").style.color = "var(--state-card-headfont-light)";
		
		
		
		
		
		


		document.getElementById("night").src = "assets/night-light.svg";
		document.getElementById("notification").src = "assets/notification-light.svg";
		
	} 
	
	/*******************************/
	
	else {

		localStorage.setItem('Dark', 0);

		document.body.style.backgroundColor = "var(--bg-dark)";

		document.getElementById("top").style.backgroundColor = "var(--bg-dark)";
		document.getElementById("card").style.backgroundColor = "var(--card-dark)";


		document.getElementById("state-card").style.backgroundColor = "var(--state-card-dark)";
		
		
		
		
		document.getElementById("s0-name").style.color = "var(--state-card-headfont-dark)";
		document.getElementById("s1-name").style.color = "var(--state-card-headfont-dark)";
		document.getElementById("s2-name").style.color = "var(--state-card-headfont-dark)";
		document.getElementById("s3-name").style.color = "var(--state-card-headfont-dark)";
		document.getElementById("s4-name").style.color = "var(--state-card-headfont-dark)";
		document.getElementById("s5-name").style.color = "var(--state-card-headfont-dark)";
		document.getElementById("s6-name").style.color = "var(--state-card-headfont-dark)";
		document.getElementById("s7-name").style.color = "var(--state-card-headfont-dark)";
		document.getElementById("s8-name").style.color = "var(--state-card-headfont-dark)";
		document.getElementById("s9-name").style.color = "var(--state-card-headfont-dark)";
		document.getElementById("s10-name").style.color = "var(--state-card-headfont-dark)";
		document.getElementById("s11-name").style.color = "var(--state-card-headfont-dark)";
		document.getElementById("s12-name").style.color = "var(--state-card-headfont-dark)";
		document.getElementById("s13-name").style.color = "var(--state-card-headfont-dark)";
		document.getElementById("s14-name").style.color = "var(--state-card-headfont-dark)";
		document.getElementById("s15-name").style.color = "var(--state-card-headfont-dark)";
		document.getElementById("s16-name").style.color = "var(--state-card-headfont-dark)";
		document.getElementById("s17-name").style.color = "var(--state-card-headfont-dark)";
		document.getElementById("s18-name").style.color = "var(--state-card-headfont-dark)";
		document.getElementById("s19-name").style.color = "var(--state-card-headfont-dark)";
		document.getElementById("s20-name").style.color = "var(--state-card-headfont-dark)";
		document.getElementById("s21-name").style.color = "var(--state-card-headfont-dark)";
		document.getElementById("s22-name").style.color = "var(--state-card-headfont-dark)";
		document.getElementById("s23-name").style.color = "var(--state-card-headfont-dark)";
		document.getElementById("s24-name").style.color = "var(--state-card-headfont-dark)";
		document.getElementById("s25-name").style.color = "var(--state-card-headfont-dark)";
		document.getElementById("s26-name").style.color = "var(--state-card-headfont-dark)";
		document.getElementById("s27-name").style.color = "var(--state-card-headfont-dark)";
		document.getElementById("s28-name").style.color = "var(--state-card-headfont-dark)";
		document.getElementById("s29-name").style.color = "var(--state-card-headfont-dark)";
		document.getElementById("s30-name").style.color = "var(--state-card-headfont-dark)";
		document.getElementById("s31-name").style.color = "var(--state-card-headfont-dark)";
		document.getElementById("s32-name").style.color = "var(--state-card-headfont-dark)";
		document.getElementById("s33-name").style.color = "var(--state-card-headfont-dark)";
		document.getElementById("s34-name").style.color = "var(--state-card-headfont-dark)";
		document.getElementById("s35-name").style.color = "var(--state-card-headfont-dark)";
		document.getElementById("s36-name").style.color = "var(--state-card-headfont-dark)";
		
		
		
		
		



		document.getElementById("night").src = "assets/night-dark.svg";
		document.getElementById("notification").src = "assets/notification-dark.svg";
	}

	console.log(localStorage);

}
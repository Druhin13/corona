// 0 means true
// 1 means false
localStorage.setItem('deaths', 0);

var audio = new Audio('CoffinRemixOP.mp3');
audio.volume = 0.5;




function deathsort() {

	if (localStorage.getItem('deaths') == 0) {

		localStorage.setItem('deaths', 1);

		//		document.getElementById("death-sort").style.marginTop = "2vh";

		document.getElementById("s0-deaths").innerHTML = "U DEAD *";

		audio.play();

		if (audio.ended) {
			document.getElementById("s0-deaths").innerHTML = "DEATHS";
			localStorage.setItem('deaths', 0);
		}


		//		let s = [];
		//		let m = [];
		//
		//		//storing the values according to cases
		//
		//		m[1] = document.getElementById("s1-deaths").innerHTML;
		//
		//		s[1] = parseInt(document.getElementById("s1-deaths").innerHTML);
		//		s[2] = parseInt(document.getElementById("s2-deaths").innerHTML);
		//		s[3] = parseInt(document.getElementById("s3-deaths").innerHTML);
		//		s[4] = parseInt(document.getElementById("s4-deaths").innerHTML);
		//		s[5] = parseInt(document.getElementById("s5-deaths").innerHTML);
		//		s[6] = parseInt(document.getElementById("s6-deaths").innerHTML);
		//		s[7] = parseInt(document.getElementById("s7-deaths").innerHTML);
		//		s[8] = parseInt(document.getElementById("s8-deaths").innerHTML);
		//		s[9] = parseInt(document.getElementById("s9-deaths").innerHTML);
		//		s[10] = parseInt(document.getElementById("s10-deaths").innerHTML);
		//		s[11] = parseInt(document.getElementById("s11-deaths").innerHTML);
		//		s[12] = parseInt(document.getElementById("s12-deaths").innerHTML);
		//		s[13] = parseInt(document.getElementById("s13-deaths").innerHTML);
		//		s[14] = parseInt(document.getElementById("s14-deaths").innerHTML);
		//		s[15] = parseInt(document.getElementById("s15-deaths").innerHTML);
		//		s[16] = parseInt(document.getElementById("s16-deaths").innerHTML);
		//		s[17] = parseInt(document.getElementById("s17-deaths").innerHTML);
		//		s[18] = parseInt(document.getElementById("s18-deaths").innerHTML);
		//		s[19] = parseInt(document.getElementById("s19-deaths").innerHTML);
		//		s[20] = parseInt(document.getElementById("s20-deaths").innerHTML);
		//		s[21] = parseInt(document.getElementById("s21-deaths").innerHTML);
		//		s[22] = parseInt(document.getElementById("s22-deaths").innerHTML);
		//		s[23] = parseInt(document.getElementById("s23-deaths").innerHTML);
		//		s[24] = parseInt(document.getElementById("s24-deaths").innerHTML);
		//		s[25] = parseInt(document.getElementById("s25-deaths").innerHTML);
		//		s[26] = parseInt(document.getElementById("s26-deaths").innerHTML);
		//		s[27] = parseInt(document.getElementById("s27-deaths").innerHTML);
		//		s[28] = parseInt(document.getElementById("s28-deaths").innerHTML);
		//		s[29] = parseInt(document.getElementById("s29-deaths").innerHTML);
		//		s[30] = parseInt(document.getElementById("s30-deaths").innerHTML);
		//		s[31] = parseInt(document.getElementById("s31-deaths").innerHTML);
		//		s[32] = parseInt(document.getElementById("s32-deaths").innerHTML);
		//		s[33] = parseInt(document.getElementById("s33-deaths").innerHTML);
		//		s[34] = parseInt(document.getElementById("s34-deaths").innerHTML);
		//		s[35] = parseInt(document.getElementById("s35-deaths").innerHTML);
		//		s[36] = parseInt(document.getElementById("s36-deaths").innerHTML);
		//		s[37] = parseInt(document.getElementById("s37-deaths").innerHTML);

		//		for (i = 1; i <= 37; i++) {
		//			console.log(s[i]);
		//			
		//			
		//		}
		//
		//		s.sort(function (a, b) {
		//			return b - a;
		//		});
		//
		//
		//		for (i = 0; i <= 37; i++) {
		//			console.log(s[i]);
		//
		//
		//		}




	} else {

		localStorage.setItem('deaths', 0);

		//		document.getElementById("death-sort").style.marginTop = "0vh";

		document.getElementById("s0-deaths").innerHTML = "DEATHS";

		audio.pause();
		audio.currentTime = 0;



	}
}

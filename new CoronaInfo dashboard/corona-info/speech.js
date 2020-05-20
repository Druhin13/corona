//	responsiveVoice.enableWindowClickHook();
//	responsiveVoice.clickEvent();


if (responsiveVoice.voiceSupport()) {
	responsiveVoice.speak("Welcome");
}




function speech() {

	responsiveVoice.setDefaultVoice("UK English Male");

	if (responsiveVoice.isPlaying()) {
		//  console.log("I hope you are listening");

		responsiveVoice.cancel();

	} else {


		//		responsiveVoice.enableEstimationTimeout = false;

		if (responsiveVoice.voiceSupport()) {


			//			responsiveVoice.speak(document.getElementById("india-today").textContent, "UK English Male", {pitch: 0.9});

			responsiveVoice.speak("Today at - " + document.getElementById("news1-t").textContent);
			responsiveVoice.speak(document.getElementById("news1-c").textContent);



			//			document.getElementById("speak").style.animation = "bounce-in";


		} else {
			document.getElementById("donate").style.opacity = 0;
		}

	}



}
//if (localStorage.getItem('news') == "") {
//	
//}
//else{
//	
//}

// 0 means true
// 1 means false
localStorage.setItem('notify', 0);


function notify() {

	if (localStorage.getItem('notify') == 0) {

		//changing the notification icon
		document.getElementById("notification").src = "assets/notification-off.svg";

		//saving it in the local storage
		localStorage.setItem('notify', 1);

		//bringing the card down by 10vh
		document.getElementById("card").style.marginTop = "20vh";
		document.getElementById("card").style.transition = "all 0.25s ease";
	} else {

		//changing the notification icon
		document.getElementById("notification").src = "assets/notification-light.svg";

		//saving it in the local storage
		localStorage.setItem('notify', 0);

		//bringing the card down by 10vh
		document.getElementById("card").style.marginTop = "9vh";
		document.getElementById("card").style.transition = "all 0.25s ease";


	}
}
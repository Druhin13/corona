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
		document.getElementById("card").style.marginTop = "25.5vh";
		document.getElementById("card").style.transition = "all 0.5s ease";
	} else {

		//changing the notification icon
		document.getElementById("notification").src = "assets/notification-light.svg";

		//saving it in the local storage
		localStorage.setItem('notify', 0);

		//bringing the card down by 10vh
		document.getElementById("card").style.marginTop = "9vh";
		document.getElementById("card").style.transition = "all 0.5s ease";
	}
}

// getting the latest 2 news

var api_url5 = 'https://api.covid19india.org/updatelog/log.json';

async function getData5() {
	var response5 = await fetch(api_url5);
	var data5 = await response5.json();


	//	console.log(data5);
	//	console.log(data5.length);
	//	console.log(data5[data5.length-1]);
	//	console.log(data5[data5.length-1].update);
	console.log(data5[data5.length - 1].timestamp);
	
	console.log(Date.now());

	function Unix_timestamp(t) {
		var dt = new Date(t * 1000);
		var hr = dt.getHours();
		var m = "0" + dt.getMinutes();
		var s = "0" + dt.getSeconds();
		return hr + ':' + m.substr(-2) + ':' + s.substr(-2);
	}

	console.log(Unix_timestamp(data5[data5.length - 1].timestamp));
	
	var time = Unix_timestamp(data5[data5.length - 1].timestamp);
	
	
	document.getElementById("news1-t").innerHTML = time;


	document.getElementById("news1-c").innerHTML = (data5[data5.length - 1].update).toUpperCase();


}

getData5();

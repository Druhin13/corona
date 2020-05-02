var api_url6 = 'https://api.covid19india.org/data.json';

async function getData6() {
	var response6 = await fetch(api_url6);
	var data = await response6.json();

	//	console.log(data.statewise);
	//	console.log(data.statewise.length - 1);

	for (i = 0; i <= data.statewise.length - 1; i++) {
		//		console.log(data.statewise[i]);
		if (data.statewise[i].statecode == "WB") {
			var state_c = data.statewise[i].deltaconfirmed;
			if (state_c == 0) {
				state_c = "NO";
			}
			var state_d = data.statewise[i].deltadeaths;
		}
	}





	document.getElementById("state-today").innerHTML = "TODAY - " + state_c + " CASES & " + state_d + " DEATHS";




}

getData6();

var interval2 = setInterval(function () {
	getData3();
}, 60000);

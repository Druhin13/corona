var api_url6 = 'https://api.covid19india.org/data.json';
var api_url7 = 'https://api.covid19india.org/states_daily.json';

async function getData6() {
	var response6 = await fetch(api_url6);
	var data = await response6.json();
	
	var response7 = await fetch(api_url7);
	var data2 = await response7.json();
	
	var last = (data2.states_daily.length)-1;
	console.log(data2.states_daily[last-2].wb);
	console.log(data2.states_daily[last].wb);

	//	console.log(data.statewise);
	//	console.log(data.statewise.length - 1);

	for (i = 0; i <= data.statewise.length - 1; i++) {
		//		console.log(data.statewise[i]);
		if (data.statewise[i].statecode == "WB") {
			
			var day = "TODAY - ";
			
			var state_c = data.statewise[i].deltaconfirmed;
			
			if (state_c == 0) {
				state_c = "NO";
			}
			if (state_d == 0) {
				state_d = "NO";
			}
			
			
			
			if(state_c == 0 && state_d == 0)
				{
					var day = data2.states_daily[last];
					console.log(day);
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

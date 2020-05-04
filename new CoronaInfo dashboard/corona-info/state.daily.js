var api_url6 = 'https://api.covid19india.org/data.json';
var api_url7 = 'https://api.covid19india.org/states_daily.json';

//calculating date

var today = new Date();
var month = new Array();
month[0] = "JAN";
month[1] = "FEB";
month[2] = "MAR";
month[3] = "APR";
month[4] = "MAY";
month[5] = "JUN";
month[6] = "JUL";
month[7] = "AUG";
month[8] = "SEP";
month[9] = "OCT";
month[10] = "NOV";
month[11] = "DEC";
var n = month[today.getMonth()];


var yesterday = today.getDate() - 1 + " " + n + " - ";

console.log(yesterday);

async function getData6() {
	var response6 = await fetch(api_url6);
	var data = await response6.json();

	var response7 = await fetch(api_url7);
	var data2 = await response7.json();

	var last = (data2.states_daily.length) - 1;
	console.log(data2.states_daily[last - 2].wb);
	console.log(data2.states_daily[last].wb);

	//	console.log(data.statewise);
	//	console.log(data.statewise.length - 1);

	var statecode = "WB";
	var statecode_l = statecode.toLowerCase();

	var day = "TODAY - ";

	for (i = 0; i <= data.statewise.length - 1; i++) {
		//		console.log(data.statewise[i]);
		if (data.statewise[i].statecode == statecode) {


			var state_c = data.statewise[i].deltaconfirmed;
			var state_d = data.statewise[i].deltadeaths;

			if (state_c == 0) {
				state_c = "NO";
			}

			if (state_d == 0) {
				state_d = "NO";
			}


			if (state_c == "NO" && state_d == "NO") {
				var day = data2.states_daily[last - 2];
				state_c = data2.states_daily[last - 2].wb;
				state_d = data2.states_daily[last].wb;
				day = yesterday;

				//console.log(day);
			}


		}
	}




	document.getElementById("state-today").innerHTML = day + state_c + " CASES & " + state_d + " DEATHS";




}

getData6();

var interval2 = setInterval(function () {
	getData6();
}, 60000);

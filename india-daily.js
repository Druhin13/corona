var api_url4 = 'https://api.covid19india.org/data.json';

async function getData4() {
	var response4 = await fetch(api_url4);
	var data = await response4.json();


	//	console.log(data.statewise);
	//	console.log(data.statewise.length - 1);


	var state_c = data.statewise[0].deltaconfirmed;
	var state_d = data.statewise[0].deltadeaths;

	if (state_c == 0) {
		state_c = "NO";
	}
	if (state_d == 0) {
		state_d = "NO";
	}

//	console.log(data.cases_time_series[data.cases_time_series.length-1].dailyconfirmed);
//	console.log(data.cases_time_series[data.cases_time_series.length-1].dailydeceased);
	
//	console.log(data.cases_time_series[data.cases_time_series.length-1].date);

	var day = "TODAY - ";

	if (state_c == 0 && state_d == 0) {
		
		day = (data.cases_time_series[data.cases_time_series.length-1].date);
//		console.log(day);
		
		state_c = (data.cases_time_series[data.cases_time_series.length-1].dailyconfirmed);
		state_d = (data.cases_time_series[data.cases_time_series.length-1].dailydeceased);
		
	}





	document.getElementById("india-today").innerHTML = day + state_c + " CASES & " + state_d + " DEATHS";




}

getData4();

var interval2 = setInterval(function () {
	getData4();
}, 60000);

const api_url = 'https://api.covid19india.org/data.json';

async function getData() {
	const response = await fetch(api_url);
	const data = await response.json();

	document.getElementById("total").innerHTML = (data.statewise[0].confirmed);
	//  console.log(data.statewise[0].confirmed);
	document.getElementById("recovered").innerHTML = (data.statewise[0].recovered);
	//	console.log(data.statewise[0].recovered);
	document.getElementById("death").innerHTML = (data.statewise[0].deaths);
	//	console.log(data.statewise[0].deaths);
	//	console.log(data.statewise);
}

getData();

var interval = setInterval(function () {
	getData();
}, 60000);



/***********************************/


const loc_url = 'http://ip-api.com/json'; //location
const state_url = 'https://api.covid19india.org/data.json'; //statewise data

async function getData2() {
	const response2 = await fetch(loc_url); //fetching location
	const data2 = await response2.json();

	const response3 = await fetch(state_url); //fetching statewise data
	const data3 = await response3.json();

	var country = data2.country; //country name
	var state = data2.regionName; //state name

	document.getElementById("state_name").innerHTML = state; //showing the state name


	for (i = 1; i <= 37; i++) { //going through all the data
		if (data3.statewise[i].state == state) { //searching for the state name in the database

			document.getElementById("state_total").innerHTML = data3.statewise[i].confirmed; //total cases
			document.getElementById("state_recovered").innerHTML = data3.statewise[i].recovered; //recovered
			document.getElementById("state_death").innerHTML = data3.statewise[i].deaths; //deaths
		}
	}
}

getData2();

var interval = setInterval(function () {
	getData2();
}, 120000);
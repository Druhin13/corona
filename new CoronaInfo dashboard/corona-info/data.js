


const api_url = 'https://api.covid19india.org/data.json';
const news_url = 'https://api.covid19india.org/updatelog/log.json';

async function getData() {
	const response = await fetch(api_url);
	const response50 = await fetch(news_url); //this is for the live news/updates

	const data = await response.json();
	const data50 = await response50.json();


	document.getElementById("india-total").innerHTML = (data.statewise[0].confirmed);
	//  console.log(data.statewise[0].confirmed);
	document.getElementById("india-recovered").innerHTML = (data.statewise[0].recovered);
	//	console.log(data.statewise[0].recovered);
	document.getElementById("india-deaths").innerHTML = (data.statewise[0].deaths);
	//	console.log(data.statewise[0].deaths);
	//	console.log(data.statewise);
	console.log(data);


}

getData();

var interval = setInterval(function () {
	getData();
}, 60000);



/***********************************/


const loc_url = 'https://ipapi.co/json'; //location
const state_url = 'https://api.covid19india.org/data.json'; //statewise data

async function getData2() {
	const response2 = await fetch(loc_url); //fetching location
	const data2 = await response2.json();

	const response3 = await fetch(state_url); //fetching statewise data
	const data3 = await response3.json();

	var country = data2.country_name; //country name
	var state = data2.region; //state name

	if (state == "National Capital Territory of Delhi") {
		state = "Delhi";
	}

//	document.getElementById("state_name").innerHTML = "Total in " + state; //showing the state name


	for (i = 1; i <= 37; i++) { //going through all the data
		if (data3.statewise[i].state == "West Bengal") { //searching for the state name in the database

			document.getElementById("state-total").innerHTML = data3.statewise[i].confirmed; //total cases
			document.getElementById("state-recovered").innerHTML = data3.statewise[i].recovered; //recovered
			document.getElementById("state-deaths").innerHTML = data3.statewise[i].deaths; //deaths

			console.log(data3);


			/******************************************/




		}
	}





}

getData2();

var interval = setInterval(function () {
	getData2();
}, 300000);

var interval = setInterval(function () {
	getData3();
}, 300000);
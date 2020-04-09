let myChart = document.getElementById('myChart').getContext('2d');

//Global options
Chart.defaults.global.defaultFontFamily = 'Nunito';
Chart.defaults.global.defaultFontSize = 25;
Chart.defaults.global.defaultFontColor = '#000';

let massPopChart = new Chart(myChart, {
	type: 'bar',
	data: {
		
		//add a space
		
		labels: ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','' ],
		datasets: [{
			label: 'Daily Cases',
			
			//add daily case
			
			data: [
				1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,1,22,2,1,3,5,9,15,7,12,9,16,5,15,19,25,27,60,76,69,94,74,86,73,153,141,115,190,306,424,486,560,579,605,489,573,565,809
			],
			backgroundColor: '#F5AEA8'
		}]
	},
	options: {
		title:{
			display:true,
			text:'Daily Cases in India',
			fontSize:40
		},
		legend:{
			display:false
		},
		layout:{
			padding:{
				left:25,
				right:25,
			}
		}
	}
});



//*********************************************************//



let myChart2 = document.getElementById('myChart2').getContext('2d');

//Global options
Chart.defaults.global.defaultFontFamily = 'Nunito';
Chart.defaults.global.defaultFontSize = 25;
Chart.defaults.global.defaultFontColor = '#000';

let massPopChart2 = new Chart(myChart2, {
	type: 'bar',
	data: {
		
		//add a space
		
		labels: ['0-10','11-20','21-30','31-40','41-50','51-60','61-70','71-80','81-90','91-100'],
		datasets: [{
			label: 'Total Cases',
			
			//add daily case
			
			data: [
				28,76,223,252,177,164,114,30,6,2
			],
			backgroundColor: '#ACD1F2'
		}]
	},
	options: {
		title:{
			display:true,
			text:'Patient Age in India',
			fontSize:40
		},
		legend:{
			display:false
		},
		layout:{
			padding:{
				left:25,
				right:25,
			}
		}
	}
});




/******************************************/



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

	document.getElementById("state_name").innerHTML = "Total in "+state; //showing the state name


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


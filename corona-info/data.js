//let myChart = document.getElementById('myChart').getContext('2d');
//
////Global options
//Chart.defaults.global.defaultFontFamily = 'Nunito';
//Chart.defaults.global.defaultFontSize = 25;
//Chart.defaults.global.defaultFontColor = '#000';
//
//let massPopChart = new Chart(myChart, {
//	type: 'bar',
//	data: {
//		
//		//add a space
//		
//		labels: ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','' ],
//		datasets: [{
//			label: 'Daily Cases',
//			
//			//add daily case
//			
//			data: [
//				1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,1,22,2,1,3,5,9,15,7,12,9,16,5,15,19,25,27,60,76,69,94,74,86,73,153,141,115,190,306,424,486,560,579,605,489,573,565,809
//			],
//			backgroundColor: '#CECECE'
//		}]
//	},
//	options: {
//		title:{
//			display:true,
//			text:'Daily Cases in India',
//			fontSize:40
//		},
//		legend:{
//			display:false
//		},
//		layout:{
//			padding:{
//				left:25,
//				right:25,
//			}
//		}
//	}
//});

//
//
//
//let myChart = document.getElementById('myChart').getContext('2d');
//
////Global options
//Chart.defaults.global.defaultFontFamily = 'Nunito';
//Chart.defaults.global.defaultFontSize = 25;
//Chart.defaults.global.defaultFontColor = '#000';
//
//let massPopChart = new Chart(myChart, {
//	type: 'line',
//	data: {
//
//		//add a space
//
//		labels: ['4 Apr', '5 Apr', '6 Apr', '7 Apr', '8 Apr', '9 Apr', '10 Apr'],
//		datasets: [{
//			label: 'Confirmed Case',
//
//			//add daily case
//
//			data: [
//				579, 605, 489, 573, 565, 809, 869
//			],
//			backgroundColor: '#ACD1F2'
//		}]
//	},
//	options: {
//		title: {
//			display: true,
//			text: 'Daily Cases in India (Week)',
//			fontSize: 40
//		},
//		legend: {
//			display: true
//		},
//		layout: {
//			padding: {
//				left: 25,
//				right: 25,
//			}
//		}
//	}
//});






//*********************************************************//


//let myChart3 = document.getElementById('myChart3').getContext('2d');
//
////Global options
//Chart.defaults.global.defaultFontFamily = 'Nunito';
//Chart.defaults.global.defaultFontSize = 25;
//Chart.defaults.global.defaultFontColor = '#000';
//
//let massPopChart3 = new Chart(myChart3, {
//	type: 'bar',
//	data: {
//		
//		//add a space
//		
//		labels: ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','' ],
//		datasets: [{
//			label: 'Daily Cases',
//			
//			//add daily case
//			
//			data: [
//				0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,3,2,1,1,5,3,5,3,16,6,7,16,14,13,22,16,26,20,46
//			],
//			backgroundColor: '#F5AEA8'
//		}]
//	},
//	options: {
//		title:{
//			display:true,
//			text:'Daily Cases in India',
//			fontSize:40
//		},
//		legend:{
//			display:false
//		},
//		layout:{
//			padding:{
//				left:25,
//				right:25,
//			}
//		}
//	}
//});





let myChart3 = document.getElementById('myChart3').getContext('2d');

//Global options
//Chart.defaults.global.defaultFontFamily = 'Nunito';
//Chart.defaults.global.defaultFontSize = 25;
//Chart.defaults.global.defaultFontColor = '#000';
//
//let massPopChart3 = new Chart(myChart3, {
//	type: 'line',
//	data: {
//
//		//add a space
//
//		labels: ['4 Apr', '5 Apr', '6 Apr', '7 Apr', '8 Apr', '9 Apr', '10 Apr'],
//		datasets: [{
//			label: 'Death',
//
//			//add daily case
//
//			data: [
//				13, 22, 16, 26, 20, 46, 22
//			],
//			backgroundColor: '#F5AEA8'
//		}]
//	},
//	options: {
//		title: {
//			display: true,
//			text: 'Daily Deaths in India (Week)',
//			fontSize: 40
//		},
//		legend: {
//			display: true
//		},
//		layout: {
//			padding: {
//				left: 25,
//				right: 25,
//			}
//		}
//	}
//});




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

		labels: ['0-10', '11-20', '21-30', '31-40', '41-50', '51-60', '61-70', '71-80', '81-90', '91-100'],
		datasets: [{
			label: 'Total Cases',

			//add daily case

			data: [
				98, 228, 514, 537, 383, 306, 204, 61, 10, 3
			],
			backgroundColor: '#FED5A9'
		}]
	},
	options: {
		title: {
			display: true,
			text: 'Patient Age in India',
			fontSize: 40
		},
		legend: {
			display: true
		},
		layout: {
			padding: {
				left: 25,
				right: 25,
			}
		}
	}
});







/********************************************/



const api_url = 'https://api.covid19india.org/data.json';
const news_url = 'https://api.covid19india.org/updatelog/log.json';

async function getData() {
	const response = await fetch(api_url);
	const response50 = await fetch(news_url); //this is for the live news/updates

	const data = await response.json();
	const data50 = await response50.json();


	document.getElementById("total").innerHTML = (data.statewise[0].confirmed);
	//  console.log(data.statewise[0].confirmed);
	document.getElementById("recovered").innerHTML = (data.statewise[0].recovered);
	//	console.log(data.statewise[0].recovered);
	document.getElementById("death").innerHTML = (data.statewise[0].deaths);
	//	console.log(data.statewise[0].deaths);
	//	console.log(data.statewise);
	console.log(data);


	/******************************************/



	var dc_chart = data.cases_time_series.length - 1;
	console.log(data.cases_time_series[dc_chart].dailyconfirmed); //last data


	let myChart = document.getElementById('myChart').getContext('2d');

	//Global options
	Chart.defaults.global.defaultFontFamily = 'Nunito';
	Chart.defaults.global.defaultFontSize = 25;
	Chart.defaults.global.defaultFontColor = '#000';

	let massPopChart = new Chart(myChart, {
		type: 'bar',
		data: {

			//add a space

			labels: [data.cases_time_series[dc_chart - 9].date, data.cases_time_series[dc_chart - 8].date, data.cases_time_series[dc_chart - 7].date, data.cases_time_series[dc_chart - 6].date, data.cases_time_series[dc_chart - 5].date, data.cases_time_series[dc_chart - 4].date, data.cases_time_series[dc_chart - 3].date, data.cases_time_series[dc_chart - 2].date, data.cases_time_series[dc_chart - 1].date, data.cases_time_series[dc_chart].date],
			datasets: [{
				label: 'Confirmed Case',

				//add daily case

				data: [
				data.cases_time_series[dc_chart - 9].dailyconfirmed, data.cases_time_series[dc_chart - 8].dailyconfirmed, data.cases_time_series[dc_chart - 7].dailyconfirmed, data.cases_time_series[dc_chart - 6].dailyconfirmed, data.cases_time_series[dc_chart - 5].dailyconfirmed, data.cases_time_series[dc_chart - 4].dailyconfirmed, data.cases_time_series[dc_chart - 3].dailyconfirmed, data.cases_time_series[dc_chart - 2].dailyconfirmed, data.cases_time_series[dc_chart - 1].dailyconfirmed, data.cases_time_series[dc_chart].dailyconfirmed
			],
				backgroundColor: '#ACD1F2'
		}]
		},
		options: {
			title: {
				display: true,
				text: 'Cases in India (Last 10 days)',
				fontSize: 40
			},
			legend: {
				display: true
			},
			layout: {
				padding: {
					left: 25,
					right: 25,
				}
			}
		}
	});





	/******************************************/






	let myChart3 = document.getElementById('myChart3').getContext('2d');

	//Global options
	Chart.defaults.global.defaultFontFamily = 'Nunito';
	Chart.defaults.global.defaultFontSize = 25;
	Chart.defaults.global.defaultFontColor = '#000';

	let massPopChart3 = new Chart(myChart3, {
		type: 'bar',
		data: {

			//add a space

			labels: [data.cases_time_series[dc_chart - 9].date, data.cases_time_series[dc_chart - 8].date, data.cases_time_series[dc_chart - 7].date, data.cases_time_series[dc_chart - 6].date, data.cases_time_series[dc_chart - 5].date, data.cases_time_series[dc_chart - 4].date, data.cases_time_series[dc_chart - 3].date, data.cases_time_series[dc_chart - 2].date, data.cases_time_series[dc_chart - 1].date, data.cases_time_series[dc_chart].date],
			datasets: [{
				label: 'Death',

				//add daily case

				data: [
				data.cases_time_series[dc_chart - 9].dailydeceased, data.cases_time_series[dc_chart - 8].dailydeceased, data.cases_time_series[dc_chart - 7].dailydeceased, data.cases_time_series[dc_chart - 6].dailydeceased, data.cases_time_series[dc_chart - 5].dailydeceased, data.cases_time_series[dc_chart - 4].dailydeceased, data.cases_time_series[dc_chart - 3].dailydeceased, data.cases_time_series[dc_chart - 2].dailydeceased, data.cases_time_series[dc_chart - 1].dailydeceased, data.cases_time_series[dc_chart].dailydeceased
			],
				backgroundColor: '#F5AEA8'
		}]
		},
		options: {
			title: {
				display: true,
				text: 'Death in India (Last 10 days)',
				fontSize: 40
			},
			legend: {
				display: true
			},
			layout: {
				padding: {
					left: 25,
					right: 25,
				}
			}
		}
	});








	/******************************************/






	let myChart6 = document.getElementById('myChart6').getContext('2d');

	//Global options
	Chart.defaults.global.defaultFontFamily = 'Nunito';
	Chart.defaults.global.defaultFontSize = 25;
	Chart.defaults.global.defaultFontColor = '#000';

	let massPopChart6 = new Chart(myChart6, {
		type: 'bar',
		data: {

			//add a space

			labels: [data.cases_time_series[dc_chart - 9].date, data.cases_time_series[dc_chart - 8].date, data.cases_time_series[dc_chart - 7].date, data.cases_time_series[dc_chart - 6].date, data.cases_time_series[dc_chart - 5].date, data.cases_time_series[dc_chart - 4].date, data.cases_time_series[dc_chart - 3].date, data.cases_time_series[dc_chart - 2].date, data.cases_time_series[dc_chart - 1].date, data.cases_time_series[dc_chart].date],
			datasets: [{
				label: 'Recovered',

				//add daily case

				data: [
				data.cases_time_series[dc_chart - 9].dailyrecovered, data.cases_time_series[dc_chart - 8].dailyrecovered, data.cases_time_series[dc_chart - 7].dailyrecovered, data.cases_time_series[dc_chart - 6].dailyrecovered, data.cases_time_series[dc_chart - 5].dailyrecovered, data.cases_time_series[dc_chart - 4].dailyrecovered, data.cases_time_series[dc_chart - 3].dailyrecovered, data.cases_time_series[dc_chart - 2].dailyrecovered, data.cases_time_series[dc_chart - 1].dailyrecovered, data.cases_time_series[dc_chart].dailyrecovered
			],
				backgroundColor: '#a8dab5'
		}]
		},
		options: {
			title: {
				display: true,
				text: 'Recovery in India (Last 10 days)',
				fontSize: 40
			},
			legend: {
				display: true
			},
			layout: {
				padding: {
					left: 25,
					right: 25,
				}
			}
		}
	});






	/******************************************/


	let myChart4 = document.getElementById('myChart4').getContext('2d');

	//Global options
	Chart.defaults.global.defaultFontFamily = 'Nunito';
	Chart.defaults.global.defaultFontSize = 25;
	Chart.defaults.global.defaultFontColor = '#000';

	let massPopChart4 = new Chart(myChart4, {
		type: 'pie',
		data: {

			//add a space

			labels: ['Total Cases', 'Recovered', 'Death'],
			datasets: [{
				//			label: 'Total Cases',

				//add daily case

				data: [
				data.statewise[0].confirmed, data.statewise[0].recovered, data.statewise[0].deaths
			],
				backgroundColor: ['#cecece', '#A8DAB5', '#F5AEA8']
		}]
		},
		options: {
			title: {
				display: true,
				text: 'Current Status of India',
				fontSize: 40
			},
			legend: {
				display: true
			},
			layout: {
				padding: {
					left: 25,
					right: 25,
				}
			}
		}
	});





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

	document.getElementById("state_name").innerHTML = "Total in " + state; //showing the state name


	for (i = 1; i <= 37; i++) { //going through all the data
		if (data3.statewise[i].state == state) { //searching for the state name in the database

			document.getElementById("state_total").innerHTML = data3.statewise[i].confirmed; //total cases
			document.getElementById("state_recovered").innerHTML = data3.statewise[i].recovered; //recovered
			document.getElementById("state_death").innerHTML = data3.statewise[i].deaths; //deaths

			console.log(data3);


			/******************************************/


			let myChart5 = document.getElementById('myChart5').getContext('2d');

			//Global options
			Chart.defaults.global.defaultFontFamily = 'Nunito';
			Chart.defaults.global.defaultFontSize = 25;
			Chart.defaults.global.defaultFontColor = '#000';

			let massPopChart5 = new Chart(myChart5, {
				type: 'pie',
				data: {

					//add a space

					labels: ['Total Cases', 'Recovered', 'Deaths'],
					datasets: [{
						//			label: 'Total Cases',

						//add daily case

						data: [
				data3.statewise[i].confirmed, data3.statewise[i].recovered, data3.statewise[i].deaths,
			],
						backgroundColor: ['#cecece', '#A8DAB5', '#F5AEA8']
		}]
				},
				options: {
					title: {
						display: true,
						text: 'Current Status of ' + state,
						fontSize: 40
					},
					legend: {
						display: true
					},
					layout: {
						padding: {
							left: 25,
							right: 25,
						}
					}
				}
			});


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
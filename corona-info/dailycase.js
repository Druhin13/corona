const api_url2 = 'https://api.covid19india.org/data.json';

async function getData3() {
	const response = await fetch(api_url2);
	const data = await response.json();





	//date calculation

	var myDate = new Date();
	var day = myDate.getDay();
	var month = myDate.getMonth();
	var date = myDate.getDate();
	if (date == 1) {
		date = "01";
	} else if (date == 2) {
		date = "02";
	} else if (date == 3) {
		date = "03";
	} else if (date == 4) {
		date = "04";
	} else if (date == 5) {
		date = "05";
	} else if (date == 6) {
		date = "06";
	} else if (date == 7) {
		date = "07";
	} else if (date == 8) {
		date = "08";
	} else if (date == 9) {
		date = "09";
	}


	var days = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
	var months = ["January ", "February ", "March ", "April ", "May ", "June ", "July ", "August ", "September ", "October ", "November ", "December "];

	var a = date + " " + months[month]; //storing today's date
	console.log(a);









	//checking if the last data is of 'todays' or not

	var l = (data.cases_time_series.length - 1);
	var last_date = data.cases_time_series[l].date;
	console.log(l);
	console.log(data.cases_time_series[l]);
	console.log(last_date);

	if (a == last_date) {
		console.log("It's Perfect");

		//now we will show the daily data, straight from the database

		document.getElementById("d_total").innerHTML = data.cases_time_series[l].dailyconfirmed;
		document.getElementById("d_recovered").innerHTML = data.cases_time_series[l].dailyrecovered;
		document.getElementById("d_deaths").innerHTML = data.cases_time_series[l].dailydeceased;


		//if the json is ready, comment out the code below
		//comment out the top code, and put the live value, in the down code




		/**************************************************/

		document.getElementById("d_total").innerHTML = 191 + 1;
		document.getElementById("d_recovered").innerHTML = 10;
		document.getElementById("d_deaths").innerHTML = 3 + 1;

		/**************************************************/





	} else {
		console.log("We need to do more calculations");

		//now we will show the daily data, straight from the database


		//so we need to calculate  (current data - last data) 


		//here are the calculations

		//		console.log(data.statewise[0].confirmed);
		//		console.log(data.cases_time_series[l].totalconfirmed);
		//
		//		console.log(data.statewise[0].recovered);
		//		console.log(data.cases_time_series[l].totalrecovered);
		//
		//		console.log(data.statewise[0].deaths);
		//		console.log(data.cases_time_series[l].totaldeceased);


		var daily_total = (data.statewise[0].confirmed) - (data.cases_time_series[l].totalconfirmed);

		var daily_recovered = (data.statewise[0].recovered) - (data.cases_time_series[l].totalrecovered);

		var daily_deaths = (data.statewise[0].deaths) - (data.cases_time_series[l].totaldeceased);


		//error handling - if data comes in negative (can happen if some old data is updated, and some are not)

		if (daily_total < 0) {
			daily_total = 0;
		}
		if (daily_recovered < 0) {
			daily_recovered = 0;
		}
		if (daily_deaths < 0) {
			daily_deaths = 0;
		}
		if (daily_total == NaN) {
			daily_total = 0;
		}
		if (daily_recovered == NaN) {
			daily_recovered = 0;
		}
		if (daily_deaths == NaN) {
			daily_deaths = 0;
		}



		document.getElementById("d_total").innerHTML = daily_total;

		document.getElementById("d_recovered").innerHTML = daily_recovered;

		document.getElementById("d_deaths").innerHTML = daily_deaths;


	}


}

getData3();

var interval2 = setInterval(function () {
	getData3();
}, 60000);
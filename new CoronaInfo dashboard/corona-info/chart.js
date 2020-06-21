//
//
//	data calculation :-
//	
//		we get data for 7 days
//
//		we check which day's data is highest
//
//		and set it to max
//
//		max = highest data + 100 
//
//
//	now for chart :-
//	
//		data / max * 100
//
//		getting the % value
//
//		and setting it to the height of the chart
//	
//	

var api_url8 = 'https://api.covid19india.org/data.json';

async function getData8() {
	var response = await fetch(api_url8);
	var data = await response.json();

	var l = data.cases_time_series.length - 1;


	// calculate the highest data from 7 days

	max_case = data.cases_time_series[l].dailyconfirmed;

	for (i = 0; i <= 6; i++) {
		if (parseInt(data.cases_time_series[l - i].dailyconfirmed) > parseInt(data.cases_time_series[l].dailyconfirmed)) {
			max_case = data.cases_time_series[l - i].dailyconfirmed;
		}
	}

	max_case = parseInt(max_case) + 0;

	//	console.log(max_case);

	//16.5vh is max value

	var tc0 = (Math.floor((data.cases_time_series[l].dailyconfirmed / max_case) * 100)) / 100.0 * 16.5;
	var tc0m = 16.5 - tc0; //calculating the top margin value

	var tc1 = (Math.floor((data.cases_time_series[l - 1].dailyconfirmed / max_case) * 100)) / 100.0 * 16.5;
	var tc1m = 16.5 - tc1;

	var tc2 = (Math.floor((data.cases_time_series[l - 2].dailyconfirmed / max_case) * 100)) / 100.0 * 16.5;
	var tc2m = 16.5 - tc2;

	var tc3 = (Math.floor((data.cases_time_series[l - 3].dailyconfirmed / max_case) * 100)) / 100.0 * 16.5;
	var tc3m = 16.5 - tc3;

	var tc4 = (Math.floor((data.cases_time_series[l - 4].dailyconfirmed / max_case) * 100)) / 100.0 * 16.5;
	var tc4m = 16.5 - tc4;

	var tc5 = (Math.floor((data.cases_time_series[l - 5].dailyconfirmed / max_case) * 100)) / 100.0 * 16.5;
	var tc5m = 16.5 - tc5;

	var tc6 = (Math.floor((data.cases_time_series[l - 6].dailyconfirmed / max_case) * 100)) / 100.0 * 16.5;
	var tc6m = 16.5 - tc6;


	//
	//	console.log(tc0);
	//	console.log(tc1);
	//	console.log(tc2);
	//	console.log(tc3);
	//	console.log(tc4);
	//	console.log(tc5);
	//	console.log(tc6);


	//now changing the values in the chart

	document.getElementById("total-d0").style.height = tc0 + "vh";
	document.getElementById("total-d0").style.marginTop = tc0m + "vh";

	document.getElementById("total-d1").style.height = tc1 + "vh";
	document.getElementById("total-d1").style.marginTop = tc1m + "vh";

	document.getElementById("total-d2").style.height = tc2 + "vh";
	document.getElementById("total-d2").style.marginTop = tc2m + "vh";

	document.getElementById("total-d3").style.height = tc3 + "vh";
	document.getElementById("total-d3").style.marginTop = tc3m + "vh";

	document.getElementById("total-d4").style.height = tc4 + "vh";
	document.getElementById("total-d4").style.marginTop = tc4m + "vh";

	document.getElementById("total-d5").style.height = tc5 + "vh";
	document.getElementById("total-d5").style.marginTop = tc5m + "vh";

	document.getElementById("total-d6").style.height = tc6 + "vh";
	document.getElementById("total-d6").style.marginTop = tc6m + "vh";





	/****************************************************************************/



	// calculate the highest data from 7 days

	max_deaths = data.cases_time_series[l].dailydeceased;

	for (j = 0; j <= 6; j++) {
		if (parseInt(data.cases_time_series[l - j].dailydeceased) > parseInt(data.cases_time_series[l].dailydeceased)) {
			max_deaths = data.cases_time_series[l - j].dailydeceased;
		}
	}

	max_deaths = parseInt(max_deaths) + 1670;

	//	console.log(max_deaths);

	//16.5vh is max value

	var td0 = (Math.floor((data.cases_time_series[l].dailydeceased / max_deaths) * 100)) / 100.0 * 16.5;
	var td0m = 16.5 - td0; //calculating the top margin value

	var td1 = (Math.floor((data.cases_time_series[l - 1].dailydeceased / max_deaths) * 100)) / 100.0 * 16.5;
	var td1m = 16.5 - td1;

	var td2 = (Math.floor((data.cases_time_series[l - 2].dailydeceased / max_deaths) * 100)) / 100.0 * 16.5;
	var td2m = 16.5 - td2;

	var td3 = (Math.floor((data.cases_time_series[l - 3].dailydeceased / max_deaths) * 100)) / 100.0 * 16.5;
	var td3m = 16.5 - td3;

	var td4 = (Math.floor((data.cases_time_series[l - 4].dailydeceased / max_deaths) * 100)) / 100.0 * 16.5;
	var td4m = 16.5 - td4;

	var td5 = (Math.floor((data.cases_time_series[l - 5].dailydeceased / max_deaths) * 100)) / 100.0 * 16.5;
	var td5m = 16.5 - td5;

	var td6 = (Math.floor((data.cases_time_series[l - 6].dailydeceased / max_deaths) * 100)) / 100.0 * 16.5;
	var td6m = 16.5 - td6;


	//
	//	console.log(td0);
	//	console.log(td1);
	//	console.log(td2);
	//	console.log(td3);
	//	console.log(td4);
	//	console.log(td5);
	//	console.log(td6);


	//now changing the values in the chart

	document.getElementById("death-d0").style.height = td0 + "vh";
	document.getElementById("death-d0").style.marginTop = td0m + "vh";

	document.getElementById("death-d1").style.height = td1 + "vh";
	document.getElementById("death-d1").style.marginTop = td1m + "vh";

	document.getElementById("death-d2").style.height = td2 + "vh";
	document.getElementById("death-d2").style.marginTop = td2m + "vh";

	document.getElementById("death-d3").style.height = td3 + "vh";
	document.getElementById("death-d3").style.marginTop = td3m + "vh";

	document.getElementById("death-d4").style.height = td4 + "vh";
	document.getElementById("death-d4").style.marginTop = td4m + "vh";

	document.getElementById("death-d5").style.height = td5 + "vh";
	document.getElementById("death-d5").style.marginTop = td5m + "vh";

	document.getElementById("death-d6").style.height = td6 + "vh";
	document.getElementById("death-d6").style.marginTop = td6m + "vh";




	/*******************************************************************************/


	//	console.log(data.cases_time_series[l].date.length);

	var day0 = data.cases_time_series[l].date;
	var day1 = data.cases_time_series[l - 1].date;
	var day2 = data.cases_time_series[l - 2].date;
	var day3 = data.cases_time_series[l - 3].date;
	var day4 = data.cases_time_series[l - 4].date;
	var day5 = data.cases_time_series[l - 5].date;
	var day6 = data.cases_time_series[l - 6].date;



	//	console.log(day0);
	//	console.log(day1);
	//	console.log(day2);
	//	console.log(day3);
	//	console.log(day4);
	//	console.log(day5);
	//	console.log(day6);




	var total0 = data.cases_time_series[l].dailyconfirmed;
	var total1 = data.cases_time_series[l - 1].dailyconfirmed;
	var total2 = data.cases_time_series[l - 2].dailyconfirmed;
	var total3 = data.cases_time_series[l - 3].dailyconfirmed;
	var total4 = data.cases_time_series[l - 4].dailyconfirmed;
	var total5 = data.cases_time_series[l - 5].dailyconfirmed;
	var total6 = data.cases_time_series[l - 6].dailyconfirmed;




	var death0 = data.cases_time_series[l].dailydeceased;
	var death1 = data.cases_time_series[l - 1].dailydeceased;
	var death2 = data.cases_time_series[l - 2].dailydeceased;
	var death3 = data.cases_time_series[l - 3].dailydeceased;
	var death4 = data.cases_time_series[l - 4].dailydeceased;
	var death5 = data.cases_time_series[l - 5].dailydeceased;
	var death6 = data.cases_time_series[l - 6].dailydeceased;




	//	if (data.cases_time_series[l].date.charAt(0) == 0); {
	//		day0 = data.cases_time_series[l].date.slice(1);
	//	}
	//
	//	if (data.cases_time_series[l - 1].date.charAt(0) == 0); {
	//		day1 = data.cases_time_series[l - 1].date.slice(1);
	//	}
	//
	//	if (data.cases_time_series[l - 2].date.charAt(0) == 0); {
	//		day2 = data.cases_time_series[l - 2].date.slice(1);
	//	}
	//
	//	if (data.cases_time_series[l - 3].date.charAt(0) == 0); {
	//		day3 = data.cases_time_series[l - 3].date.slice(1);
	//	}
	//
	//	if (data.cases_time_series[l - 4].date.charAt(0) === '0'); {
	//		day4 = data.cases_time_series[l - 4].date.slice(1);
	//	}
	//
	//	if (data.cases_time_series[l - 5].date.charAt(0) === '0'); {
	//		day5 = data.cases_time_series[l - 5].date.slice(1);
	//	}
	//
	//	if (data.cases_time_series[l - 6].date.charAt(0) === '0'); {
	//		day6 = data.cases_time_series[l - 6].date.slice(1);
	//	}

	//
	//
	//
	//
	//
	//	console.log(day0);
	//	console.log(day1);
	//	console.log(day2);
	//	console.log(day3);
	//	console.log(day4);
	//	console.log(day5);
	//	console.log(day6);




	document.getElementById("max_d0").innerHTML = day0.split(" ", 1);
	document.getElementById("max_d1").innerHTML = day1.split(" ", 1);
	document.getElementById("max_d2").innerHTML = day2.split(" ", 1);
	document.getElementById("max_d3").innerHTML = day3.split(" ", 1);
	document.getElementById("max_d4").innerHTML = day4.split(" ", 1);
	document.getElementById("max_d5").innerHTML = day5.split(" ", 1);
	document.getElementById("max_d6").innerHTML = day6.split(" ", 1);


	document.getElementById("max_d00").innerHTML = day0.split(" ", 1);
	document.getElementById("max_d11").innerHTML = day1.split(" ", 1);
	document.getElementById("max_d22").innerHTML = day2.split(" ", 1);
	document.getElementById("max_d33").innerHTML = day3.split(" ", 1);
	document.getElementById("max_d44").innerHTML = day4.split(" ", 1);
	document.getElementById("max_d55").innerHTML = day5.split(" ", 1);
	document.getElementById("max_d66").innerHTML = day6.split(" ", 1);







	document.getElementById("d1-name").innerHTML = day0;
	document.getElementById("d2-name").innerHTML = day1;
	document.getElementById("d3-name").innerHTML = day2;
	document.getElementById("d4-name").innerHTML = day3;
	document.getElementById("d5-name").innerHTML = day4;
	document.getElementById("d6-name").innerHTML = day5;
	document.getElementById("d7-name").innerHTML = day6;


	document.getElementById("d1-total").innerHTML = total0;
	document.getElementById("d2-total").innerHTML = total1;
	document.getElementById("d3-total").innerHTML = total2;
	document.getElementById("d4-total").innerHTML = total3;
	document.getElementById("d5-total").innerHTML = total4;
	document.getElementById("d6-total").innerHTML = total5;
	document.getElementById("d7-total").innerHTML = total6;


	document.getElementById("d1-deaths").innerHTML = death0;
	document.getElementById("d2-deaths").innerHTML = death1;
	document.getElementById("d3-deaths").innerHTML = death2;
	document.getElementById("d4-deaths").innerHTML = death3;
	document.getElementById("d5-deaths").innerHTML = death4;
	document.getElementById("d6-deaths").innerHTML = death5;
	document.getElementById("d7-deaths").innerHTML = death6;






}

getData8();

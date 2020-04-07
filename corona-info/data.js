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
}

getData();

var interval = setInterval(function () {
	getData();
}, 60000);
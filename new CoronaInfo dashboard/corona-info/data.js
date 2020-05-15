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
	//	console.log(data);


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


	/******************/



	for (i = 1; i <= 37; i++) { //going through all the data
		if (data3.statewise[i].state == state) { //searching for the state name in the database

			document.getElementById("state-total").innerHTML = data3.statewise[i].confirmed; //total cases
			document.getElementById("state-recovered").innerHTML = data3.statewise[i].recovered; //recovered
			document.getElementById("state-deaths").innerHTML = data3.statewise[i].deaths; //deaths

		}
	}
	
	
	
	state_name = state.toUpperCase();


	//running a loop
	//searching for every state
	//and changing the state image


		if (state_name == "MAHARASHTRA") {
	document.getElementById("state_img").src = "assets/MAHARASHTRA.svg";
	document.getElementById("state_img").style.height = "14vh";
	document.getElementById("state_img").style.marginLeft = "5vw";
	document.getElementById("state_img").style.marginRight = "-8vw";
	document.getElementById("state_img").style.marginTop = "5vh";
		}

		else if(state_name == "GUJARAT"){
	document.getElementById("state_img").src = "assets/Gujarat.svg";
	document.getElementById("state_img").style.height = "14vh";
	document.getElementById("state_img").style.marginLeft = "5vw";
	document.getElementById("state_img").style.marginRight = "-4.5vw";
	document.getElementById("state_img").style.marginTop = "4.5vh";
		}
	
		else if(state_name == "TAMIL NADU"){
	document.getElementById("state_img").src = "assets/Tamil_Nadu.svg";
	document.getElementById("state_img").style.height = "20vh";
	document.getElementById("state_img").style.marginLeft = "5vw";
	document.getElementById("state_img").style.marginRight = "-2vw";
	document.getElementById("state_img").style.marginTop = "1.5vh";
		}
	
		else if(state_name == "DELHI"){
	document.getElementById("state_img").src = "assets/Delhi.svg";
	document.getElementById("state_img").style.height = "14vh";
	document.getElementById("state_img").style.marginLeft = "0vw";
	document.getElementById("state_img").style.marginRight = "0vw";
	document.getElementById("state_img").style.marginTop = "4.5vh";
		}
	
		else if(state_name == "RAJASTHAN"){
	document.getElementById("state_img").src = "assets/Rajasthan.svg";
	document.getElementById("state_img").style.height = "14vh";
	document.getElementById("state_img").style.marginLeft = "0vw";
	document.getElementById("state_img").style.marginRight = "-4.5vw";
	document.getElementById("state_img").style.marginTop = "4.5vh";
		}
	
		else if(state_name == "MADHYA PRADESH"){
	document.getElementById("state_img").src = "assets/Madhya_Pradesh.svg";
	document.getElementById("state_img").style.height = "13vh";
	document.getElementById("state_img").style.marginLeft = "0vw";
	document.getElementById("state_img").style.marginRight = "-7.5vw";
	document.getElementById("state_img").style.marginTop = "4.5vh";
		}
	
		else if(state_name == "UTTAR PRADESH"){
	document.getElementById("state_img").src = "assets/Uttar_Pradesh.svg";
	document.getElementById("state_img").style.height = "17vh";
	document.getElementById("state_img").style.marginLeft = "0vw";
	document.getElementById("state_img").style.marginRight = "-7.5vw";
	document.getElementById("state_img").style.marginTop = "3vh";
		}
	
	else if(state_name == "WEST BENGAL"){
	console.log("state img selected");
	document.getElementById("state_img").src = "assets/WestBengal.svg";
		}
	
		else if(state_name == "ANDHRA PRADESH"){
	document.getElementById("state_img").src = "assets/Andhra_Pradesh.svg";
	document.getElementById("state_img").style.height = "15vh";
	document.getElementById("state_img").style.marginLeft = "0vw";
	document.getElementById("state_img").style.marginRight = "-9.5vw";
	document.getElementById("state_img").style.marginTop = "4.5vh";
		}

		else if(state_name == "PUNJAB"){
	document.getElementById("state_img").src = "assets/Punjab.svg";
	document.getElementById("state_img").style.height = "15vh";
	document.getElementById("state_img").style.marginLeft = "0vw";
	document.getElementById("state_img").style.marginRight = "-2.5vw";
	document.getElementById("state_img").style.marginTop = "4.25vh";
		}
	
		else if(state_name == "TELENGANA"){
	document.getElementById("state_img").src = "assets/Telengana.svg";
	document.getElementById("state_img").style.height = "15vh";
	document.getElementById("state_img").style.marginLeft = "0vw";
	document.getElementById("state_img").style.marginRight = "-9.5vw";
	document.getElementById("state_img").style.marginTop = "4.25vh";
		}
	
		else if(state_name == "JAMMU AND KASHMIR"){
	document.getElementById("state_img").src = "assets/Jammu_and_Kashmir.svg";
	document.getElementById("state_img").style.height = "15vh";
	document.getElementById("state_img").style.marginLeft = "0vw";
	document.getElementById("state_img").style.marginRight = "-3.5vw";
	document.getElementById("state_img").style.marginTop = "4.25vh";
		}
	
		else if(state_name == "KARNATAKA"){
	document.getElementById("state_img").src = "assets/Karnataka.svg";
	document.getElementById("state_img").style.height = "20vh";
	document.getElementById("state_img").style.marginLeft = "0vw";
	document.getElementById("state_img").style.marginRight = "-2vw";
	document.getElementById("state_img").style.marginTop = "1.5vh";
		}
	
		else if(state_name == "HARYANA"){
	document.getElementById("state_img").src = "assets/Haryana.svg";
	document.getElementById("state_img").style.height = "16vh";
	document.getElementById("state_img").style.marginLeft = "0vw";
	document.getElementById("state_img").style.marginRight = "-1vw";
	document.getElementById("state_img").style.marginTop = "3.5vh";
		}
	
		else if(state_name == "BIHAR"){
	document.getElementById("state_img").src = "assets/Bihar.svg";
	document.getElementById("state_img").style.height = "13vh";
	document.getElementById("state_img").style.marginLeft = "0vw";
	document.getElementById("state_img").style.marginRight = "-8.5vw";
	document.getElementById("state_img").style.marginTop = "5vh";
		}
	
		else if(state_name == "KERALA"){
	document.getElementById("state_img").src = "assets/Kerala.svg";
	document.getElementById("state_img").style.height = "20vh";
	document.getElementById("state_img").style.marginLeft = "0vw";
	document.getElementById("state_img").style.marginRight = "1vw";
	document.getElementById("state_img").style.marginTop = "1.5vh";
		}
	
		else if(state_name == "ODISHA"){
	document.getElementById("state_img").src = "assets/Odisha.svg";
	document.getElementById("state_img").style.height = "14vh";
	document.getElementById("state_img").style.marginLeft = "0vw";
	document.getElementById("state_img").style.marginRight = "-4vw";
	document.getElementById("state_img").style.marginTop = "5vh";
		}
	
		else if(state_name == "CHANDIGARH"){
	document.getElementById("state_img").src = "assets/Chandigarh.svg";
	document.getElementById("state_img").style.height = "14vh";
	document.getElementById("state_img").style.marginLeft = "0vw";
	document.getElementById("state_img").style.marginRight = "-1vw";
	document.getElementById("state_img").style.marginTop = "4.5vh";
		}
	
		else if(state_name == "JHARKHAND"){
	document.getElementById("state_img").src = "assets/Jharkhand.svg";
	document.getElementById("state_img").style.height = "15vh";
	document.getElementById("state_img").style.marginLeft = "0vw";
	document.getElementById("state_img").style.marginRight = "-8.5vw";
	document.getElementById("state_img").style.marginTop = "4vh";
		}
	
	
		else if(state_name == "TRIPURA"){
	document.getElementById("state_img").src = "assets/Tripura.svg";
	document.getElementById("state_img").style.height = "15vh";
	document.getElementById("state_img").style.marginLeft = "0vw";
	document.getElementById("state_img").style.marginRight = "-1vw";
	document.getElementById("state_img").style.marginTop = "4.25vh";
		}
	
	
		else if(state_name == "UTTARAKHAND"){
	document.getElementById("state_img").src = "assets/Uttarakhand.svg";
	document.getElementById("state_img").style.height = "14vh";
	document.getElementById("state_img").style.marginLeft = "0vw";
	document.getElementById("state_img").style.marginRight = "-4.5vw";
	document.getElementById("state_img").style.marginTop = "4.5vh";
		}
	
		else if(state_name == "ASSAM"){
	document.getElementById("state_img").src = "assets/Assam.svg";
	document.getElementById("state_img").style.height = "13.5vh";
	document.getElementById("state_img").style.marginLeft = "0vw";
	document.getElementById("state_img").style.marginRight = "-8.5vw";
	document.getElementById("state_img").style.marginTop = "5vh";
		}
	
		else if(state_name == "CHHATTISGARH"){
	document.getElementById("state_img").src = "assets/Chhattisgarh.svg";
	document.getElementById("state_img").style.height = "21vh";
	document.getElementById("state_img").style.marginLeft = "0vw";
	document.getElementById("state_img").style.marginRight = "-4.5vw";
	document.getElementById("state_img").style.marginTop = "1vh";
		}
	
		else if(state_name == "HIMACHAL PRADESH"){
	document.getElementById("state_img").src = "assets/Himachal_Pradesh.svg";
	document.getElementById("state_img").style.height = "15vh";
	document.getElementById("state_img").style.marginLeft = "0vw";
	document.getElementById("state_img").style.marginRight = "-2.5vw";
	document.getElementById("state_img").style.marginTop = "4.25vh";
		}
	
		else if(state_name == "HIMACHAL PRADESH"){
	document.getElementById("state_img").src = "assets/Himachal_Pradesh.svg";
	document.getElementById("state_img").style.height = "15vh";
	document.getElementById("state_img").style.marginLeft = "0vw";
	document.getElementById("state_img").style.marginRight = "-2.5vw";
	document.getElementById("state_img").style.marginTop = "4.25vh";
		}
	
		else if(state_name == "HIMACHAL PRADESH"){
	document.getElementById("state_img").src = "assets/Himachal_Pradesh.svg";
	document.getElementById("state_img").style.height = "15vh";
	document.getElementById("state_img").style.marginLeft = "0vw";
	document.getElementById("state_img").style.marginRight = "-2.5vw";
	document.getElementById("state_img").style.marginTop = "4.25vh";
		}
	
		else if(state_name == "LADAKH"){
	document.getElementById("state_img").src = "assets/Ladakh.svg";
	document.getElementById("state_img").style.height = "14vh";
	document.getElementById("state_img").style.marginLeft = "0vw";
	document.getElementById("state_img").style.marginRight = "-1.5vw";
	document.getElementById("state_img").style.marginTop = "4.75vh";
		}
	
		else if(state_name == "A & N ISLANDS"){
	document.getElementById("state_img").src = "assets/Andaman_Nicobar.svg";
	document.getElementById("state_img").style.height = "15vh";
	document.getElementById("state_img").style.marginLeft = "0vw";
	document.getElementById("state_img").style.marginRight = "7vw";
	document.getElementById("state_img").style.marginTop = "4vh";
		}
	
		else if(state_name == "GOA"){
	document.getElementById("state_img").src = "assets/Goa.svg";
	document.getElementById("state_img").style.height = "15vh";
	document.getElementById("state_img").style.marginLeft = "0vw";
	document.getElementById("state_img").style.marginRight = "1vw";
	document.getElementById("state_img").style.marginTop = "4vh";
		}
	
		else if(state_name == "MEGHALAYA"){
	document.getElementById("state_img").src = "assets/Meghalaya.svg";
	document.getElementById("state_img").style.height = "7.5vh";
	document.getElementById("state_img").style.marginLeft = "0vw";
	document.getElementById("state_img").style.marginRight = "-9.5vw";
	document.getElementById("state_img").style.marginTop = "8vh";
		}
	
		else if(state_name == "PUDUCHERRY"){
	document.getElementById("state_img").src = "assets/Puducherry.svg";
	document.getElementById("state_img").style.height = "11vh";
	document.getElementById("state_img").style.marginLeft = "0vw";
	document.getElementById("state_img").style.marginRight = "0vw";
	document.getElementById("state_img").style.marginTop = "5.5vh";
		}
	
		else if(state_name == "MANIPUR"){
	document.getElementById("state_img").src = "assets/Manipur.svg";
	document.getElementById("state_img").style.height = "14vh";
	document.getElementById("state_img").style.marginLeft = "0vw";
	document.getElementById("state_img").style.marginRight = "0vw";
	document.getElementById("state_img").style.marginTop = "4.5vh";
		}
	
		else if(state_name == "MIZORAM"){
	document.getElementById("state_img").src = "assets/Mizoram.svg";
	document.getElementById("state_img").style.height = "17vh";
	document.getElementById("state_img").style.marginLeft = "2.5vw";
	document.getElementById("state_img").style.marginRight = "0vw";
	document.getElementById("state_img").style.marginTop = "3vh";
		}
	
		else if(state_name == "ARUNACHAL PRADESH"){
	document.getElementById("state_img").src = "assets/Arunachal_Pradesh.svg";
	document.getElementById("state_img").style.height = "11.5vh";
	document.getElementById("state_img").style.marginLeft = "0vw";
	document.getElementById("state_img").style.marginRight = "-9.5vw";
	document.getElementById("state_img").style.marginTop = "5vh";
		}
	
		else if(state_name == "D & N HAVELI"){
	document.getElementById("state_img").src = "assets/dnhaveli.svg";
	document.getElementById("state_img").style.height = "14vh";
	document.getElementById("state_img").style.marginLeft = "0vw";
	document.getElementById("state_img").style.marginRight = "0vw";
	document.getElementById("state_img").style.marginTop = "4.5vh";
		}
	
		else if(state_name == "NAGALAND"){
	document.getElementById("state_img").src = "assets/Nagaland.svg";
	document.getElementById("state_img").style.height = "14vh";
	document.getElementById("state_img").style.marginLeft = "0vw";
	document.getElementById("state_img").style.marginRight = "0vw";
	document.getElementById("state_img").style.marginTop = "4.5vh";
		}
	
		else if(state_name == "DAMAN AND DIU"){
	document.getElementById("state_img").src = "assets/DamanDiu.svg";
	document.getElementById("state_img").style.height = "8vh";
	document.getElementById("state_img").style.marginLeft = "0vw";
	document.getElementById("state_img").style.marginRight = "1.5vw";
	document.getElementById("state_img").style.marginTop = "7.5vh";
		}
	
		else if(state_name == "SIKKIM"){
	document.getElementById("state_img").src = "assets/Sikkim.svg";
	document.getElementById("state_img").style.height = "14vh";
	document.getElementById("state_img").style.marginLeft = "1vw";
	document.getElementById("state_img").style.marginRight = "1vw";
	document.getElementById("state_img").style.marginTop = "4.5vh";
		}
	
	

}

getData2();
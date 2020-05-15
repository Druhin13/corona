//s1 = state name (rank 1)
//t1 = total cases (in rank 1 state)
//r1 = total recovered (in rank 1 state)
//d1 = total deaths (in rank 1 state)


var api_url2 = 'https://api.covid19india.org/data.json';




async function getData() {
	const response = await fetch(api_url);
	const data = await response.json();



	
	

	//rank1

	document.getElementById("s1-name").innerHTML = (data.statewise[1].state).toUpperCase();
	//  console.log(data.statewise[1].state);
	document.getElementById("s1-total").innerHTML = (data.statewise[1].confirmed);
	//  console.log(data.statewise[1].confirmed);
	document.getElementById("s1-deaths").innerHTML = (data.statewise[1].deaths);
	//	console.log(data.statewise[1].deaths);


	/******************/

	//rank2

	document.getElementById("s2-name").innerHTML = (data.statewise[2].state).toUpperCase();
	//  console.log(data.statewise[2].state);
	document.getElementById("s2-total").innerHTML = (data.statewise[2].confirmed);
	//  console.log(data.statewise[2].confirmed);
	document.getElementById("s2-deaths").innerHTML = (data.statewise[2].deaths);
	//	console.log(data.statewise[2].deaths);


	/******************/

	//rank3

	document.getElementById("s3-name").innerHTML = (data.statewise[3].state).toUpperCase();
	//  console.log(data.statewise[3].state);
	document.getElementById("s3-total").innerHTML = (data.statewise[3].confirmed);
	//  console.log(data.statewise[3].confirmed);
	document.getElementById("s3-deaths").innerHTML = (data.statewise[3].deaths);
	//	console.log(data.statewise[3].deaths);


	/******************/

	//rank4

	document.getElementById("s4-name").innerHTML = (data.statewise[4].state).toUpperCase();
	//  console.log(data.statewise[4].state);
	document.getElementById("s4-total").innerHTML = (data.statewise[4].confirmed);
	//  console.log(data.statewise[4].confirmed);
	document.getElementById("s4-deaths").innerHTML = (data.statewise[4].deaths);
	//	console.log(data.statewise[4].deaths);


	/******************/

	//rank5

	document.getElementById("s5-name").innerHTML = (data.statewise[5].state).toUpperCase();
	//  console.log(data.statewise[1].state);
	document.getElementById("s5-total").innerHTML = (data.statewise[5].confirmed);
	//  console.log(data.statewise[1].confirmed);
	document.getElementById("s5-deaths").innerHTML = (data.statewise[5].deaths);
	//	console.log(data.statewise[1].deaths);


	/******************/

	//rank6

	document.getElementById("s6-name").innerHTML = (data.statewise[6].state).toUpperCase();
	//  console.log(data.statewise[2].state);
	document.getElementById("s6-total").innerHTML = (data.statewise[6].confirmed);
	//  console.log(data.statewise[2].confirmed);
	document.getElementById("s6-deaths").innerHTML = (data.statewise[6].deaths);
	//	console.log(data.statewise[2].deaths);


	/******************/

	//rank7

	document.getElementById("s7-name").innerHTML = (data.statewise[7].state).toUpperCase();
	//  console.log(data.statewise[3].state);
	document.getElementById("s7-total").innerHTML = (data.statewise[7].confirmed);
	//  console.log(data.statewise[3].confirmed);
	document.getElementById("s7-deaths").innerHTML = (data.statewise[7].deaths);
	//	console.log(data.statewise[3].deaths);


	/******************/

	//rank8

	document.getElementById("s8-name").innerHTML = (data.statewise[8].state).toUpperCase();
	//  console.log(data.statewise[4].state);
	document.getElementById("s8-total").innerHTML = (data.statewise[8].confirmed);
	//  console.log(data.statewise[4].confirmed);
	document.getElementById("s8-deaths").innerHTML = (data.statewise[8].deaths);
	//	console.log(data.statewise[4].deaths);


	/******************/

	//rank9

	document.getElementById("s9-name").innerHTML = (data.statewise[9].state).toUpperCase();
	//  console.log(data.statewise[3].state);
	document.getElementById("s9-total").innerHTML = (data.statewise[9].confirmed);
	//  console.log(data.statewise[3].confirmed);
	document.getElementById("s9-deaths").innerHTML = (data.statewise[9].deaths);
	//	console.log(data.statewise[3].deaths);


	/******************/

	//rank10

	document.getElementById("s10-name").innerHTML = (data.statewise[10].state).toUpperCase();
	//  console.log(data.statewise[4].state);
	document.getElementById("s10-total").innerHTML = (data.statewise[10].confirmed);
	//  console.log(data.statewise[4].confirmed);
	document.getElementById("s10-deaths").innerHTML = (data.statewise[10].deaths);
	//	console.log(data.statewise[4].deaths);


	/******************/

	//rank11

	document.getElementById("s11-name").innerHTML = (data.statewise[11].state).toUpperCase();
	//  console.log(data.statewise[4].state);
	document.getElementById("s11-total").innerHTML = (data.statewise[11].confirmed);
	//  console.log(data.statewise[4].confirmed);
	document.getElementById("s11-deaths").innerHTML = (data.statewise[11].deaths);
	//	console.log(data.statewise[4].deaths);


	/******************/

	//rank12

	document.getElementById("s12-name").innerHTML = (data.statewise[12].state).toUpperCase();
	//  console.log(data.statewise[3].state);
	document.getElementById("s12-total").innerHTML = (data.statewise[12].confirmed);
	//  console.log(data.statewise[3].confirmed);
	document.getElementById("s12-deaths").innerHTML = (data.statewise[12].deaths);
	//	console.log(data.statewise[3].deaths);


	/******************/

	//rank13

	document.getElementById("s13-name").innerHTML = (data.statewise[13].state).toUpperCase();
	//  console.log(data.statewise[4].state);
	document.getElementById("s13-total").innerHTML = (data.statewise[13].confirmed);
	//  console.log(data.statewise[4].confirmed);
	document.getElementById("s13-deaths").innerHTML = (data.statewise[13].deaths);
	//	console.log(data.statewise[4].deaths);


	/******************/

	//rank14

	document.getElementById("s14-name").innerHTML = (data.statewise[14].state).toUpperCase();
	//  console.log(data.statewise[3].state);
	document.getElementById("s14-total").innerHTML = (data.statewise[14].confirmed);
	//  console.log(data.statewise[3].confirmed);
	document.getElementById("s14-deaths").innerHTML = (data.statewise[14].deaths);
	//	console.log(data.statewise[3].deaths);


	/******************/

	//rank15

	document.getElementById("s15-name").innerHTML = (data.statewise[15].state).toUpperCase();
	//  console.log(data.statewise[4].state);
	document.getElementById("s15-total").innerHTML = (data.statewise[15].confirmed);
	//  console.log(data.statewise[4].confirmed);
	document.getElementById("s15-deaths").innerHTML = (data.statewise[15].deaths);
	//	console.log(data.statewise[4].deaths);


	/******************/

	//rank16

	document.getElementById("s16-name").innerHTML = (data.statewise[16].state).toUpperCase();
	//  console.log(data.statewise[3].state);
	document.getElementById("s16-total").innerHTML = (data.statewise[16].confirmed);
	//  console.log(data.statewise[3].confirmed);
	document.getElementById("s16-deaths").innerHTML = (data.statewise[16].deaths);
	//	console.log(data.statewise[3].deaths);


	/******************/

	//rank17

	document.getElementById("s17-name").innerHTML = (data.statewise[17].state).toUpperCase();
	//  console.log(data.statewise[4].state);
	document.getElementById("s17-total").innerHTML = (data.statewise[17].confirmed);
	//  console.log(data.statewise[4].confirmed);
	document.getElementById("s17-deaths").innerHTML = (data.statewise[17].deaths);
	//	console.log(data.statewise[4].deaths);


	/******************/

	//rank18

	document.getElementById("s18-name").innerHTML = (data.statewise[18].state).toUpperCase();
	//  console.log(data.statewise[4].state);
	document.getElementById("s18-total").innerHTML = (data.statewise[18].confirmed);
	//  console.log(data.statewise[4].confirmed);
	document.getElementById("s18-deaths").innerHTML = (data.statewise[18].deaths);
	//	console.log(data.statewise[4].deaths);


	/******************/

	//rank19

	document.getElementById("s19-name").innerHTML = (data.statewise[19].state).toUpperCase();
	//  console.log(data.statewise[3].state);
	document.getElementById("s19-total").innerHTML = (data.statewise[19].confirmed);
	//  console.log(data.statewise[3].confirmed);
	document.getElementById("s19-deaths").innerHTML = (data.statewise[19].deaths);
	//	console.log(data.statewise[3].deaths);


	/******************/

	//rank20

	document.getElementById("s20-name").innerHTML = (data.statewise[20].state).toUpperCase();
	//  console.log(data.statewise[4].state);
	document.getElementById("s20-total").innerHTML = (data.statewise[20].confirmed);
	//  console.log(data.statewise[4].confirmed);
	document.getElementById("s20-deaths").innerHTML = (data.statewise[20].deaths);
	//	console.log(data.statewise[4].deaths);


	/******************/

	//rank21

	document.getElementById("s21-name").innerHTML = (data.statewise[21].state).toUpperCase();
	//  console.log(data.statewise[4].state);
	document.getElementById("s21-total").innerHTML = (data.statewise[21].confirmed);
	//  console.log(data.statewise[4].confirmed);
	document.getElementById("s21-deaths").innerHTML = (data.statewise[21].deaths);
	//	console.log(data.statewise[4].deaths);


	/******************/

	//rank22

	document.getElementById("s22-name").innerHTML = (data.statewise[22].state).toUpperCase();
	//  console.log(data.statewise[3].state);
	document.getElementById("s22-total").innerHTML = (data.statewise[22].confirmed);
	//  console.log(data.statewise[3].confirmed);
	document.getElementById("s22-deaths").innerHTML = (data.statewise[22].deaths);
	//	console.log(data.statewise[3].deaths);


	/******************/

	//rank23

	document.getElementById("s23-name").innerHTML = (data.statewise[23].state).toUpperCase();
	//  console.log(data.statewise[4].state);
	document.getElementById("s23-total").innerHTML = (data.statewise[23].confirmed);
	//  console.log(data.statewise[4].confirmed);
	document.getElementById("s23-deaths").innerHTML = (data.statewise[23].deaths);
	//	console.log(data.statewise[4].deaths);


	/******************/

	//rank24

	document.getElementById("s24-name").innerHTML = (data.statewise[24].state).toUpperCase();
	//  console.log(data.statewise[4].state);
	document.getElementById("s24-total").innerHTML = (data.statewise[24].confirmed);
	//  console.log(data.statewise[4].confirmed);
	document.getElementById("s24-deaths").innerHTML = (data.statewise[24].deaths);
	//	console.log(data.statewise[4].deaths);


	/******************/

	//rank25

	document.getElementById("s25-name").innerHTML = (data.statewise[25].state).toUpperCase();
	//  console.log(data.statewise[4].state);
	document.getElementById("s25-total").innerHTML = (data.statewise[25].confirmed);
	//  console.log(data.statewise[4].confirmed);
	document.getElementById("s25-deaths").innerHTML = (data.statewise[25].deaths);
	//	console.log(data.statewise[4].deaths);


	/******************/

	//rank26

	document.getElementById("s26-name").innerHTML = (data.statewise[26].state).toUpperCase();
	//  console.log(data.statewise[3].state);
	document.getElementById("s26-total").innerHTML = (data.statewise[26].confirmed);
	//  console.log(data.statewise[3].confirmed);
	document.getElementById("s26-deaths").innerHTML = (data.statewise[26].deaths);
	//	console.log(data.statewise[3].deaths);


	/******************/

	//rank27

	document.getElementById("s27-name").innerHTML = (data.statewise[27].state).toUpperCase();
	//  console.log(data.statewise[4].state);
	document.getElementById("s27-total").innerHTML = (data.statewise[27].confirmed);
	//  console.log(data.statewise[4].confirmed);
	document.getElementById("s27-deaths").innerHTML = (data.statewise[27].deaths);
	//	console.log(data.statewise[4].deaths);


	/******************/

	//rank28

	document.getElementById("s28-name").innerHTML = (data.statewise[28].state).toUpperCase();
	//  console.log(data.statewise[4].state);
	document.getElementById("s28-total").innerHTML = (data.statewise[28].confirmed);
	//  console.log(data.statewise[4].confirmed);
	document.getElementById("s28-deaths").innerHTML = (data.statewise[28].deaths);
	//	console.log(data.statewise[4].deaths);


	/******************/

	//rank29

	document.getElementById("s29-name").innerHTML = (data.statewise[29].state).toUpperCase();
	//  console.log(data.statewise[3].state);
	document.getElementById("s29-total").innerHTML = (data.statewise[29].confirmed);
	//  console.log(data.statewise[3].confirmed);
	document.getElementById("s29-deaths").innerHTML = (data.statewise[29].deaths);
	//	console.log(data.statewise[3].deaths);


	/******************/

	//rank30

	document.getElementById("s30-name").innerHTML = (data.statewise[30].state).toUpperCase();
	//  console.log(data.statewise[4].state);
	document.getElementById("s30-total").innerHTML = (data.statewise[30].confirmed);
	//  console.log(data.statewise[4].confirmed);
	document.getElementById("s30-deaths").innerHTML = (data.statewise[30].deaths);
	//	console.log(data.statewise[4].deaths);


	/******************/

	//rank31

	document.getElementById("s31-name").innerHTML = (data.statewise[31].state).toUpperCase();
	//  console.log(data.statewise[4].state);
	document.getElementById("s31-total").innerHTML = (data.statewise[31].confirmed);
	//  console.log(data.statewise[4].confirmed);
	document.getElementById("s31-deaths").innerHTML = (data.statewise[31].deaths);
	//	console.log(data.statewise[4].deaths);


	/******************/

	//rank32

	document.getElementById("s32-name").innerHTML = (data.statewise[32].state).toUpperCase();
	//  console.log(data.statewise[3].state);
	document.getElementById("s32-total").innerHTML = (data.statewise[32].confirmed);
	//  console.log(data.statewise[3].confirmed);
	document.getElementById("s32-deaths").innerHTML = (data.statewise[32].deaths);
	//	console.log(data.statewise[3].deaths);


	/******************/

	//rank33

	document.getElementById("s33-name").innerHTML = (data.statewise[33].state).toUpperCase();
	//  console.log(data.statewise[4].state);
	document.getElementById("s33-total").innerHTML = (data.statewise[33].confirmed);
	//  console.log(data.statewise[4].confirmed);
	document.getElementById("s33-deaths").innerHTML = (data.statewise[33].deaths);
	//	console.log(data.statewise[4].deaths);


	/******************/

	//rank34

	document.getElementById("s34-name").innerHTML = (data.statewise[34].state).toUpperCase();
	//  console.log(data.statewise[4].state);
	document.getElementById("s34-total").innerHTML = (data.statewise[34].confirmed);
	//  console.log(data.statewise[4].confirmed);
	document.getElementById("s34-deaths").innerHTML = (data.statewise[34].deaths);
	//	console.log(data.statewise[4].deaths);


	/******************/

	//rank35

	document.getElementById("s35-name").innerHTML = (data.statewise[35].state).toUpperCase();
	//  console.log(data.statewise[4].state);
	document.getElementById("s35-total").innerHTML = (data.statewise[35].confirmed);
	//  console.log(data.statewise[4].confirmed);
	document.getElementById("s35-deaths").innerHTML = (data.statewise[35].deaths);
	//	console.log(data.statewise[4].deaths);


	/******************/

	//rank36

	document.getElementById("s36-name").innerHTML = (data.statewise[36].state).toUpperCase();
	//  console.log(data.statewise[3].state);
	document.getElementById("s36-total").innerHTML = (data.statewise[36].confirmed);
	//  console.log(data.statewise[3].confirmed);
	document.getElementById("s36-deaths").innerHTML = (data.statewise[36].deaths);
	//	console.log(data.statewise[3].deaths);


	/******************/

	//rank37

	document.getElementById("s37-name").innerHTML = (data.statewise[37].state).toUpperCase();
	//  console.log(data.statewise[4].state);
	document.getElementById("s37-total").innerHTML = (data.statewise[37].confirmed);
	//  console.log(data.statewise[4].confirmed);
	document.getElementById("s37-deaths").innerHTML = (data.statewise[37].deaths);
	//	console.log(data.statewise[4].deaths);




	for (i = 1; i <= 37; i++) {
		if (document.getElementById("s" + i + "-name").innerHTML == "ANDAMAN AND NICOBAR ISLANDS") {
			document.getElementById("s" + i + "-name").innerHTML = "A & N ISLANDS";
		}

		if (document.getElementById("s" + i + "-name").innerHTML == "DADRA AND NAGAR HAVELI AND DAMAN AND DIU") {
			document.getElementById("s" + i + "-name").innerHTML = "D & N HAVELI";
		}
	}


	
	


}




getData(); //showing the data


//var interval = setInterval(function () {
//	getData();
//}, 120000);
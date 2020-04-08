//s1 = state name (rank 1)
//t1 = total cases (in rank 1 state)
//r1 = total recovered (in rank 1 state)
//d1 = total deaths (in rank 1 state)


const api_url = 'https://api.covid19india.org/data.json';

async function getData() {
	const response = await fetch(api_url);
	const data = await response.json();
	
	
	/******************/
	
	//rank1
	
	document.getElementById("s1").innerHTML = (data.statewise[1].state);
	//  console.log(data.statewise[1].state);
	document.getElementById("t1").innerHTML = (data.statewise[1].confirmed);
	//  console.log(data.statewise[1].confirmed);
	document.getElementById("r1").innerHTML = (data.statewise[1].recovered);
	//	console.log(data.statewise[1].recovered);
	document.getElementById("d1").innerHTML = (data.statewise[1].deaths);
	//	console.log(data.statewise[1].deaths);
	
	
	
	/******************/
	
	//rank2
	
	document.getElementById("s2").innerHTML = (data.statewise[2].state);
	//  console.log(data.statewise[2].state);
	document.getElementById("t2").innerHTML = (data.statewise[2].confirmed);
	//  console.log(data.statewise[2].confirmed);
	document.getElementById("r2").innerHTML = (data.statewise[2].recovered);
	//	console.log(data.statewise[2].recovered);
	document.getElementById("d2").innerHTML = (data.statewise[2].deaths);
	//	console.log(data.statewise[2].deaths);
	
	
	
	/******************/
	
	//rank3
	
	document.getElementById("s3").innerHTML = (data.statewise[3].state);
	//  console.log(data.statewise[3].state);
	document.getElementById("t3").innerHTML = (data.statewise[3].confirmed);
	//  console.log(data.statewise[3].confirmed);
	document.getElementById("r3").innerHTML = (data.statewise[3].recovered);
	//	console.log(data.statewise[3].recovered);
	document.getElementById("d3").innerHTML = (data.statewise[3].deaths);
	//	console.log(data.statewise[3].deaths);
	
	
	
	/******************/
	
	//rank4
	
	document.getElementById("s4").innerHTML = (data.statewise[4].state);
	//  console.log(data.statewise[4].state);
	document.getElementById("t4").innerHTML = (data.statewise[4].confirmed);
	//  console.log(data.statewise[4].confirmed);
	document.getElementById("r4").innerHTML = (data.statewise[4].recovered);
	//	console.log(data.statewise[4].recovered);
	document.getElementById("d4").innerHTML = (data.statewise[4].deaths);
	//	console.log(data.statewise[4].deaths);
	
	
	
	/******************/
	
	//rank5
	
	document.getElementById("s5").innerHTML = (data.statewise[5].state);
	//  console.log(data.statewise[5].state);
	document.getElementById("t5").innerHTML = (data.statewise[5].confirmed);
	//  console.log(data.statewise[5].confirmed);
	document.getElementById("r5").innerHTML = (data.statewise[5].recovered);
	//	console.log(data.statewise[5].recovered);
	document.getElementById("d5").innerHTML = (data.statewise[5].deaths);
	//	console.log(data.statewise[5].deaths);
	
	
	
	/******************/
	
	//rank6
	
	document.getElementById("s6").innerHTML = (data.statewise[6].state);
	//  console.log(data.statewise[5].state);
	document.getElementById("t6").innerHTML = (data.statewise[6].confirmed);
	//  console.log(data.statewise[5].confirmed);
	document.getElementById("r6").innerHTML = (data.statewise[6].recovered);
	//	console.log(data.statewise[5].recovered);
	document.getElementById("d6").innerHTML = (data.statewise[6].deaths);
	//	console.log(data.statewise[5].deaths);
	
	
	
	/******************/
	
	//rank7
	
	document.getElementById("s7").innerHTML = (data.statewise[7].state);
	//  console.log(data.statewise[5].state);
	document.getElementById("t7").innerHTML = (data.statewise[7].confirmed);
	//  console.log(data.statewise[5].confirmed);
	document.getElementById("r7").innerHTML = (data.statewise[7].recovered);
	//	console.log(data.statewise[5].recovered);
	document.getElementById("d7").innerHTML = (data.statewise[7].deaths);
	//	console.log(data.statewise[5].deaths);
	
	
	
	/******************/
	
	//rank8
	
	document.getElementById("s8").innerHTML = (data.statewise[8].state);
	//  console.log(data.statewise[5].state);
	document.getElementById("t8").innerHTML = (data.statewise[8].confirmed);
	//  console.log(data.statewise[5].confirmed);
	document.getElementById("r8").innerHTML = (data.statewise[8].recovered);
	//	console.log(data.statewise[5].recovered);
	document.getElementById("d8").innerHTML = (data.statewise[8].deaths);
	//	console.log(data.statewise[5].deaths);
	
	
	
	/******************/
	
	//rank9
	
	document.getElementById("s9").innerHTML = (data.statewise[9].state);
	//  console.log(data.statewise[5].state);
	document.getElementById("t9").innerHTML = (data.statewise[9].confirmed);
	//  console.log(data.statewise[5].confirmed);
	document.getElementById("r9").innerHTML = (data.statewise[9].recovered);
	//	console.log(data.statewise[5].recovered);
	document.getElementById("d9").innerHTML = (data.statewise[9].deaths);
	//	console.log(data.statewise[5].deaths);
	
	
	
	/******************/
	
	//rank10
	
	document.getElementById("s10").innerHTML = (data.statewise[10].state);
	//  console.log(data.statewise[5].state);
	document.getElementById("t10").innerHTML = (data.statewise[10].confirmed);
	//  console.log(data.statewise[5].confirmed);
	document.getElementById("r10").innerHTML = (data.statewise[10].recovered);
	//	console.log(data.statewise[5].recovered);
	document.getElementById("d10").innerHTML = (data.statewise[10].deaths);
	//	console.log(data.statewise[5].deaths);
	
	
	
	/******************/
	
	//rank11
	
	document.getElementById("s11").innerHTML = (data.statewise[11].state);
	//  console.log(data.statewise[5].state);
	document.getElementById("t11").innerHTML = (data.statewise[11].confirmed);
	//  console.log(data.statewise[5].confirmed);
	document.getElementById("r11").innerHTML = (data.statewise[11].recovered);
	//	console.log(data.statewise[5].recovered);
	document.getElementById("d11").innerHTML = (data.statewise[11].deaths);
	//	console.log(data.statewise[5].deaths);
	
	
	
	/******************/
	
	//rank12
	
	document.getElementById("s12").innerHTML = (data.statewise[12].state);
	//  console.log(data.statewise[5].state);
	document.getElementById("t12").innerHTML = (data.statewise[12].confirmed);
	//  console.log(data.statewise[5].confirmed);
	document.getElementById("r12").innerHTML = (data.statewise[12].recovered);
	//	console.log(data.statewise[5].recovered);
	document.getElementById("d12").innerHTML = (data.statewise[12].deaths);
	//	console.log(data.statewise[5].deaths);
	
	
	
	/******************/
	
	//rank13
	
	document.getElementById("s13").innerHTML = (data.statewise[13].state);
	//  console.log(data.statewise[5].state);
	document.getElementById("t13").innerHTML = (data.statewise[13].confirmed);
	//  console.log(data.statewise[5].confirmed);
	document.getElementById("r13").innerHTML = (data.statewise[13].recovered);
	//	console.log(data.statewise[5].recovered);
	document.getElementById("d13").innerHTML = (data.statewise[13].deaths);
	//	console.log(data.statewise[5].deaths);
	
	
	
	/******************/
	
	//rank14
	
	document.getElementById("s14").innerHTML = (data.statewise[14].state);
	//  console.log(data.statewise[5].state);
	document.getElementById("t14").innerHTML = (data.statewise[14].confirmed);
	//  console.log(data.statewise[5].confirmed);
	document.getElementById("r14").innerHTML = (data.statewise[14].recovered);
	//	console.log(data.statewise[5].recovered);
	document.getElementById("d14").innerHTML = (data.statewise[14].deaths);
	//	console.log(data.statewise[5].deaths);
	
	
	
	/******************/
	
	//rank15
	
	document.getElementById("s15").innerHTML = (data.statewise[15].state);
	//  console.log(data.statewise[5].state);
	document.getElementById("t15").innerHTML = (data.statewise[15].confirmed);
	//  console.log(data.statewise[5].confirmed);
	document.getElementById("r15").innerHTML = (data.statewise[15].recovered);
	//	console.log(data.statewise[5].recovered);
	document.getElementById("d15").innerHTML = (data.statewise[15].deaths);
	//	console.log(data.statewise[5].deaths);
	
	
	
	/******************/
	
	//rank16
	
	document.getElementById("s16").innerHTML = (data.statewise[16].state);
	//  console.log(data.statewise[5].state);
	document.getElementById("t16").innerHTML = (data.statewise[16].confirmed);
	//  console.log(data.statewise[5].confirmed);
	document.getElementById("r16").innerHTML = (data.statewise[16].recovered);
	//	console.log(data.statewise[5].recovered);
	document.getElementById("d16").innerHTML = (data.statewise[16].deaths);
	//	console.log(data.statewise[5].deaths);
	
	
	
	/******************/
	
	//rank17
	
	document.getElementById("s17").innerHTML = (data.statewise[17].state);
	//  console.log(data.statewise[5].state);
	document.getElementById("t17").innerHTML = (data.statewise[17].confirmed);
	//  console.log(data.statewise[5].confirmed);
	document.getElementById("r17").innerHTML = (data.statewise[17].recovered);
	//	console.log(data.statewise[5].recovered);
	document.getElementById("d17").innerHTML = (data.statewise[17].deaths);
	//	console.log(data.statewise[5].deaths);
	
	
	
	/******************/
	
	//rank18
	
	document.getElementById("s18").innerHTML = (data.statewise[18].state);
	//  console.log(data.statewise[5].state);
	document.getElementById("t18").innerHTML = (data.statewise[18].confirmed);
	//  console.log(data.statewise[5].confirmed);
	document.getElementById("r18").innerHTML = (data.statewise[18].recovered);
	//	console.log(data.statewise[5].recovered);
	document.getElementById("d18").innerHTML = (data.statewise[18].deaths);
	//	console.log(data.statewise[5].deaths);
	
	
	
	/******************/
	
	//rank19
	
	document.getElementById("s19").innerHTML = (data.statewise[19].state);
	//  console.log(data.statewise[5].state);
	document.getElementById("t19").innerHTML = (data.statewise[19].confirmed);
	//  console.log(data.statewise[5].confirmed);
	document.getElementById("r19").innerHTML = (data.statewise[19].recovered);
	//	console.log(data.statewise[5].recovered);
	document.getElementById("d19").innerHTML = (data.statewise[19].deaths);
	//	console.log(data.statewise[5].deaths);
	
	
	
	/******************/
	
	//rank20
	
	document.getElementById("s20").innerHTML = (data.statewise[20].state);
	//  console.log(data.statewise[5].state);
	document.getElementById("t20").innerHTML = (data.statewise[20].confirmed);
	//  console.log(data.statewise[5].confirmed);
	document.getElementById("r20").innerHTML = (data.statewise[20].recovered);
	//	console.log(data.statewise[5].recovered);
	document.getElementById("d20").innerHTML = (data.statewise[20].deaths);
	//	console.log(data.statewise[5].deaths);
}















getData(); //showing the data


var interval = setInterval(function () {
	getData();
}, 60000);





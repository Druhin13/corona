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
	
	document.getElementById("s1").innerHTML = "1.&nbsp;&nbsp;"+(data.statewise[1].state);
	//  console.log(data.statewise[1].state);
	document.getElementById("t1").innerHTML = (data.statewise[1].confirmed);
	//  console.log(data.statewise[1].confirmed);
	document.getElementById("r1").innerHTML = (data.statewise[1].recovered);
	//	console.log(data.statewise[1].recovered);
	document.getElementById("d1").innerHTML = (data.statewise[1].deaths);
	//	console.log(data.statewise[1].deaths);
	
	
	
	/******************/
	
	//rank2
	
	document.getElementById("s2").innerHTML = "2.&nbsp;&nbsp;"+(data.statewise[2].state);
	//  console.log(data.statewise[2].state);
	document.getElementById("t2").innerHTML = (data.statewise[2].confirmed);
	//  console.log(data.statewise[2].confirmed);
	document.getElementById("r2").innerHTML = (data.statewise[2].recovered);
	//	console.log(data.statewise[2].recovered);
	document.getElementById("d2").innerHTML = (data.statewise[2].deaths);
	//	console.log(data.statewise[2].deaths);
	
	
	
	/******************/
	
	//rank3
	
	document.getElementById("s3").innerHTML = "3.&nbsp;&nbsp;"+(data.statewise[3].state);
	//  console.log(data.statewise[3].state);
	document.getElementById("t3").innerHTML = (data.statewise[3].confirmed);
	//  console.log(data.statewise[3].confirmed);
	document.getElementById("r3").innerHTML = (data.statewise[3].recovered);
	//	console.log(data.statewise[3].recovered);
	document.getElementById("d3").innerHTML = (data.statewise[3].deaths);
	//	console.log(data.statewise[3].deaths);
	
	
	
	/******************/
	
	//rank4
	
	document.getElementById("s4").innerHTML = "4.&nbsp;&nbsp;"+(data.statewise[4].state);
	//  console.log(data.statewise[4].state);
	document.getElementById("t4").innerHTML = (data.statewise[4].confirmed);
	//  console.log(data.statewise[4].confirmed);
	document.getElementById("r4").innerHTML = (data.statewise[4].recovered);
	//	console.log(data.statewise[4].recovered);
	document.getElementById("d4").innerHTML = (data.statewise[4].deaths);
	//	console.log(data.statewise[4].deaths);
	
	
	
	/******************/
	
	//rank5
	
	document.getElementById("s5").innerHTML = "5.&nbsp;&nbsp;"+(data.statewise[5].state);
	//  console.log(data.statewise[5].state);
	document.getElementById("t5").innerHTML = (data.statewise[5].confirmed);
	//  console.log(data.statewise[5].confirmed);
	document.getElementById("r5").innerHTML = (data.statewise[5].recovered);
	//	console.log(data.statewise[5].recovered);
	document.getElementById("d5").innerHTML = (data.statewise[5].deaths);
	//	console.log(data.statewise[5].deaths);
	
	
	
	/******************/
	
	//rank6
	
	document.getElementById("s6").innerHTML = "6.&nbsp;&nbsp;"+(data.statewise[6].state);
	//  console.log(data.statewise[5].state);
	document.getElementById("t6").innerHTML = (data.statewise[6].confirmed);
	//  console.log(data.statewise[5].confirmed);
	document.getElementById("r6").innerHTML = (data.statewise[6].recovered);
	//	console.log(data.statewise[5].recovered);
	document.getElementById("d6").innerHTML = (data.statewise[6].deaths);
	//	console.log(data.statewise[5].deaths);
	
	
	
	/******************/
	
	//rank7
	
	document.getElementById("s7").innerHTML = "7.&nbsp;&nbsp;"+(data.statewise[7].state);
	//  console.log(data.statewise[5].state);
	document.getElementById("t7").innerHTML = (data.statewise[7].confirmed);
	//  console.log(data.statewise[5].confirmed);
	document.getElementById("r7").innerHTML = (data.statewise[7].recovered);
	//	console.log(data.statewise[5].recovered);
	document.getElementById("d7").innerHTML = (data.statewise[7].deaths);
	//	console.log(data.statewise[5].deaths);
	
	
	
	/******************/
	
	//rank8
	
	document.getElementById("s8").innerHTML = "8.&nbsp;&nbsp;"+(data.statewise[8].state);
	//  console.log(data.statewise[5].state);
	document.getElementById("t8").innerHTML = (data.statewise[8].confirmed);
	//  console.log(data.statewise[5].confirmed);
	document.getElementById("r8").innerHTML = (data.statewise[8].recovered);
	//	console.log(data.statewise[5].recovered);
	document.getElementById("d8").innerHTML = (data.statewise[8].deaths);
	//	console.log(data.statewise[5].deaths);
	
	
	
	/******************/
	
	//rank9
	
	document.getElementById("s9").innerHTML = "9.&nbsp;&nbsp;"+(data.statewise[9].state);
	//  console.log(data.statewise[5].state);
	document.getElementById("t9").innerHTML = (data.statewise[9].confirmed);
	//  console.log(data.statewise[5].confirmed);
	document.getElementById("r9").innerHTML = (data.statewise[9].recovered);
	//	console.log(data.statewise[5].recovered);
	document.getElementById("d9").innerHTML = (data.statewise[9].deaths);
	//	console.log(data.statewise[5].deaths);
	
	
	
	/******************/
	
	//rank10
	
	document.getElementById("s10").innerHTML = "10.&nbsp;&nbsp;"+(data.statewise[10].state);
	//  console.log(data.statewise[5].state);
	document.getElementById("t10").innerHTML = (data.statewise[10].confirmed);
	//  console.log(data.statewise[5].confirmed);
	document.getElementById("r10").innerHTML = (data.statewise[10].recovered);
	//	console.log(data.statewise[5].recovered);
	document.getElementById("d10").innerHTML = (data.statewise[10].deaths);
	//	console.log(data.statewise[5].deaths);
	
	
	
	/******************/
	
	//rank11
	
	document.getElementById("s11").innerHTML = "11.&nbsp;&nbsp;"+(data.statewise[11].state);
	//  console.log(data.statewise[5].state);
	document.getElementById("t11").innerHTML = (data.statewise[11].confirmed);
	//  console.log(data.statewise[5].confirmed);
	document.getElementById("r11").innerHTML = (data.statewise[11].recovered);
	//	console.log(data.statewise[5].recovered);
	document.getElementById("d11").innerHTML = (data.statewise[11].deaths);
	//	console.log(data.statewise[5].deaths);
	
	
	
	/******************/
	
	//rank12
	
	document.getElementById("s12").innerHTML = "12.&nbsp;&nbsp;"+(data.statewise[12].state);
	//  console.log(data.statewise[5].state);
	document.getElementById("t12").innerHTML = (data.statewise[12].confirmed);
	//  console.log(data.statewise[5].confirmed);
	document.getElementById("r12").innerHTML = (data.statewise[12].recovered);
	//	console.log(data.statewise[5].recovered);
	document.getElementById("d12").innerHTML = (data.statewise[12].deaths);
	//	console.log(data.statewise[5].deaths);
	
	
	
	/******************/
	
	//rank13
	
	document.getElementById("s13").innerHTML = "13.&nbsp;&nbsp;"+(data.statewise[13].state);
	//  console.log(data.statewise[5].state);
	document.getElementById("t13").innerHTML = (data.statewise[13].confirmed);
	//  console.log(data.statewise[5].confirmed);
	document.getElementById("r13").innerHTML = (data.statewise[13].recovered);
	//	console.log(data.statewise[5].recovered);
	document.getElementById("d13").innerHTML = (data.statewise[13].deaths);
	//	console.log(data.statewise[5].deaths);
	
	
	
	/******************/
	
	//rank14
	
	document.getElementById("s14").innerHTML = "14.&nbsp;&nbsp;"+(data.statewise[14].state);
	//  console.log(data.statewise[5].state);
	document.getElementById("t14").innerHTML = (data.statewise[14].confirmed);
	//  console.log(data.statewise[5].confirmed);
	document.getElementById("r14").innerHTML = (data.statewise[14].recovered);
	//	console.log(data.statewise[5].recovered);
	document.getElementById("d14").innerHTML = (data.statewise[14].deaths);
	//	console.log(data.statewise[5].deaths);
	
	
	
	/******************/
	
	//rank15
	
	document.getElementById("s15").innerHTML = "15.&nbsp;&nbsp;"+(data.statewise[15].state);
	//  console.log(data.statewise[5].state);
	document.getElementById("t15").innerHTML = (data.statewise[15].confirmed);
	//  console.log(data.statewise[5].confirmed);
	document.getElementById("r15").innerHTML = (data.statewise[15].recovered);
	//	console.log(data.statewise[5].recovered);
	document.getElementById("d15").innerHTML = (data.statewise[15].deaths);
	//	console.log(data.statewise[5].deaths);
	
	
	
	/******************/
	
	//rank16
	
	document.getElementById("s16").innerHTML = "16.&nbsp;&nbsp;"+(data.statewise[16].state);
	//  console.log(data.statewise[5].state);
	document.getElementById("t16").innerHTML = (data.statewise[16].confirmed);
	//  console.log(data.statewise[5].confirmed);
	document.getElementById("r16").innerHTML = (data.statewise[16].recovered);
	//	console.log(data.statewise[5].recovered);
	document.getElementById("d16").innerHTML = (data.statewise[16].deaths);
	//	console.log(data.statewise[5].deaths);
	
	
	
	/******************/
	
	//rank17
	
	document.getElementById("s17").innerHTML = "17.&nbsp;&nbsp;"+(data.statewise[17].state);
	//  console.log(data.statewise[5].state);
	document.getElementById("t17").innerHTML = (data.statewise[17].confirmed);
	//  console.log(data.statewise[5].confirmed);
	document.getElementById("r17").innerHTML = (data.statewise[17].recovered);
	//	console.log(data.statewise[5].recovered);
	document.getElementById("d17").innerHTML = (data.statewise[17].deaths);
	//	console.log(data.statewise[5].deaths);
	
	
	
	/******************/
	
	//rank18
	
	document.getElementById("s18").innerHTML = "18.&nbsp;&nbsp;"+(data.statewise[18].state);
	//  console.log(data.statewise[5].state);
	document.getElementById("t18").innerHTML = (data.statewise[18].confirmed);
	//  console.log(data.statewise[5].confirmed);
	document.getElementById("r18").innerHTML = (data.statewise[18].recovered);
	//	console.log(data.statewise[5].recovered);
	document.getElementById("d18").innerHTML = (data.statewise[18].deaths);
	//	console.log(data.statewise[5].deaths);
	
	
	
	/******************/
	
	//rank19
	
	document.getElementById("s19").innerHTML = "19.&nbsp;&nbsp;"+(data.statewise[19].state);
	//  console.log(data.statewise[5].state);
	document.getElementById("t19").innerHTML = (data.statewise[19].confirmed);
	//  console.log(data.statewise[5].confirmed);
	document.getElementById("r19").innerHTML = (data.statewise[19].recovered);
	//	console.log(data.statewise[5].recovered);
	document.getElementById("d19").innerHTML = (data.statewise[19].deaths);
	//	console.log(data.statewise[5].deaths);
	
	
	
	/******************/
	
	//rank20
	
	document.getElementById("s20").innerHTML = "20.&nbsp;&nbsp;"+(data.statewise[20].state);
	//  console.log(data.statewise[5].state);
	document.getElementById("t20").innerHTML = (data.statewise[20].confirmed);
	//  console.log(data.statewise[5].confirmed);
	document.getElementById("r20").innerHTML = (data.statewise[20].recovered);
	//	console.log(data.statewise[5].recovered);
	document.getElementById("d20").innerHTML = (data.statewise[20].deaths);
	//	console.log(data.statewise[5].deaths);
	
	
	
	/******************/
	
	//rank21
	
	document.getElementById("s21").innerHTML = "21.&nbsp;&nbsp;"+(data.statewise[21].state);
	//  console.log(data.statewise[5].state);
	document.getElementById("t21").innerHTML = (data.statewise[21].confirmed);
	//  console.log(data.statewise[5].confirmed);
	document.getElementById("r21").innerHTML = (data.statewise[21].recovered);
	//	console.log(data.statewise[5].recovered);
	document.getElementById("d21").innerHTML = (data.statewise[21].deaths);
	//	console.log(data.statewise[5].deaths);
	
	
	
	/******************/
	
	//rank22
	
	document.getElementById("s22").innerHTML = "22.&nbsp;&nbsp;"+(data.statewise[22].state);
	//  console.log(data.statewise[5].state);
	document.getElementById("t22").innerHTML = (data.statewise[22].confirmed);
	//  console.log(data.statewise[5].confirmed);
	document.getElementById("r22").innerHTML = (data.statewise[22].recovered);
	//	console.log(data.statewise[5].recovered);
	document.getElementById("d22").innerHTML = (data.statewise[22].deaths);
	//	console.log(data.statewise[5].deaths);
	
	
	
	/******************/
	
	//rank23
	
	document.getElementById("s23").innerHTML = "23.&nbsp;&nbsp;"+(data.statewise[23].state);
	//  console.log(data.statewise[5].state);
	document.getElementById("t23").innerHTML = (data.statewise[23].confirmed);
	//  console.log(data.statewise[5].confirmed);
	document.getElementById("r23").innerHTML = (data.statewise[23].recovered);
	//	console.log(data.statewise[5].recovered);
	document.getElementById("d23").innerHTML = (data.statewise[23].deaths);
	//	console.log(data.statewise[5].deaths);
	
	
	
	/******************/
	
	//rank24
	
	document.getElementById("s24").innerHTML = "24.&nbsp;&nbsp;"+(data.statewise[24].state);
	//  console.log(data.statewise[5].state);
	document.getElementById("t24").innerHTML = (data.statewise[24].confirmed);
	//  console.log(data.statewise[5].confirmed);
	document.getElementById("r24").innerHTML = (data.statewise[24].recovered);
	//	console.log(data.statewise[5].recovered);
	document.getElementById("d24").innerHTML = (data.statewise[24].deaths);
	//	console.log(data.statewise[5].deaths);
	
	
	
	/******************/
	
	//rank25
	
	document.getElementById("s25").innerHTML = "25.&nbsp;&nbsp;"+(data.statewise[25].state);
	//  console.log(data.statewise[5].state);
	document.getElementById("t25").innerHTML = (data.statewise[25].confirmed);
	//  console.log(data.statewise[5].confirmed);
	document.getElementById("r25").innerHTML = (data.statewise[25].recovered);
	//	console.log(data.statewise[5].recovered);
	document.getElementById("d25").innerHTML = (data.statewise[25].deaths);
	//	console.log(data.statewise[5].deaths);
	
	
	
	/******************/
	
	//rank26
	
	document.getElementById("s26").innerHTML = "26.&nbsp;&nbsp;"+(data.statewise[26].state);
	//  console.log(data.statewise[5].state);
	document.getElementById("t26").innerHTML = (data.statewise[26].confirmed);
	//  console.log(data.statewise[5].confirmed);
	document.getElementById("r26").innerHTML = (data.statewise[26].recovered);
	//	console.log(data.statewise[5].recovered);
	document.getElementById("d26").innerHTML = (data.statewise[26].deaths);
	//	console.log(data.statewise[5].deaths);
	
	
	
	/******************/
	
	//rank27
	
	document.getElementById("s27").innerHTML = "27.&nbsp;&nbsp;"+(data.statewise[27].state);
	//  console.log(data.statewise[5].state);
	document.getElementById("t27").innerHTML = (data.statewise[27].confirmed);
	//  console.log(data.statewise[5].confirmed);
	document.getElementById("r27").innerHTML = (data.statewise[27].recovered);
	//	console.log(data.statewise[5].recovered);
	document.getElementById("d27").innerHTML = (data.statewise[27].deaths);
	//	console.log(data.statewise[5].deaths);
	
	
	
	/******************/
	
	//rank28
	
	document.getElementById("s28").innerHTML = "28.&nbsp;&nbsp;"+(data.statewise[28].state);
	//  console.log(data.statewise[5].state);
	document.getElementById("t28").innerHTML = (data.statewise[28].confirmed);
	//  console.log(data.statewise[5].confirmed);
	document.getElementById("r28").innerHTML = (data.statewise[28].recovered);
	//	console.log(data.statewise[5].recovered);
	document.getElementById("d28").innerHTML = (data.statewise[28].deaths);
	//	console.log(data.statewise[5].deaths);
	
	
	
	/******************/
	
	//rank29
	
	document.getElementById("s29").innerHTML = "29.&nbsp;&nbsp;"+(data.statewise[29].state);
	//  console.log(data.statewise[5].state);
	document.getElementById("t29").innerHTML = (data.statewise[29].confirmed);
	//  console.log(data.statewise[5].confirmed);
	document.getElementById("r29").innerHTML = (data.statewise[29].recovered);
	//	console.log(data.statewise[5].recovered);
	document.getElementById("d29").innerHTML = (data.statewise[29].deaths);
	//	console.log(data.statewise[5].deaths);
	
	
	
	/******************/
	
	//rank30
	
	document.getElementById("s30").innerHTML = "30.&nbsp;&nbsp;"+(data.statewise[30].state);
	//  console.log(data.statewise[5].state);
	document.getElementById("t30").innerHTML = (data.statewise[30].confirmed);
	//  console.log(data.statewise[5].confirmed);
	document.getElementById("r30").innerHTML = (data.statewise[30].recovered);
	//	console.log(data.statewise[5].recovered);
	document.getElementById("d30").innerHTML = (data.statewise[30].deaths);
	//	console.log(data.statewise[5].deaths);
	
	
	
	/******************/
	
	//rank31
	
	document.getElementById("s31").innerHTML = "31.&nbsp;&nbsp;"+(data.statewise[31].state);
	//  console.log(data.statewise[5].state);
	document.getElementById("t31").innerHTML = (data.statewise[31].confirmed);
	//  console.log(data.statewise[5].confirmed);
	document.getElementById("r31").innerHTML = (data.statewise[31].recovered);
	//	console.log(data.statewise[5].recovered);
	document.getElementById("d31").innerHTML = (data.statewise[31].deaths);
	//	console.log(data.statewise[5].deaths);
	
	
	
	/******************/
	
	//rank32
	
	document.getElementById("s32").innerHTML = "32.&nbsp;&nbsp;"+(data.statewise[32].state);
	//  console.log(data.statewise[5].state);
	document.getElementById("t32").innerHTML = (data.statewise[32].confirmed);
	//  console.log(data.statewise[5].confirmed);
	document.getElementById("r32").innerHTML = (data.statewise[32].recovered);
	//	console.log(data.statewise[5].recovered);
	document.getElementById("d32").innerHTML = (data.statewise[32].deaths);
	//	console.log(data.statewise[5].deaths);
	
	
	
	/******************/
	
	//rank33
	
	document.getElementById("s33").innerHTML = "33.&nbsp;&nbsp;"+(data.statewise[33].state);
	//  console.log(data.statewise[5].state);
	document.getElementById("t33").innerHTML = (data.statewise[33].confirmed);
	//  console.log(data.statewise[5].confirmed);
	document.getElementById("r33").innerHTML = (data.statewise[33].recovered);
	//	console.log(data.statewise[5].recovered);
	document.getElementById("d33").innerHTML = (data.statewise[33].deaths);
	//	console.log(data.statewise[5].deaths);
	
	
	
	/******************/
	
	//rank34
	
	document.getElementById("s34").innerHTML = "34.&nbsp;&nbsp;"+(data.statewise[34].state);
	//  console.log(data.statewise[5].state);
	document.getElementById("t34").innerHTML = (data.statewise[34].confirmed);
	//  console.log(data.statewise[5].confirmed);
	document.getElementById("r34").innerHTML = (data.statewise[34].recovered);
	//	console.log(data.statewise[5].recovered);
	document.getElementById("d34").innerHTML = (data.statewise[34].deaths);
	//	console.log(data.statewise[5].deaths);
	
	
	
	/******************/
	
	//rank35
	
	document.getElementById("s35").innerHTML = "35.&nbsp;&nbsp;"+(data.statewise[35].state);
	//  console.log(data.statewise[5].state);
	document.getElementById("t35").innerHTML = (data.statewise[35].confirmed);
	//  console.log(data.statewise[5].confirmed);
	document.getElementById("r35").innerHTML = (data.statewise[35].recovered);
	//	console.log(data.statewise[5].recovered);
	document.getElementById("d35").innerHTML = (data.statewise[35].deaths);
	//	console.log(data.statewise[5].deaths);
	
	
	
	/******************/
	
	//rank36
	
	document.getElementById("s36").innerHTML = "36.&nbsp;&nbsp;"+(data.statewise[36].state);
	//  console.log(data.statewise[5].state);
	document.getElementById("t36").innerHTML = (data.statewise[36].confirmed);
	//  console.log(data.statewise[5].confirmed);
	document.getElementById("r36").innerHTML = (data.statewise[36].recovered);
	//	console.log(data.statewise[5].recovered);
	document.getElementById("d36").innerHTML = (data.statewise[36].deaths);
	//	console.log(data.statewise[5].deaths);
	
	
	
	/******************/
	
	//rank37
	
	document.getElementById("s37").innerHTML = "37.&nbsp;&nbsp;"+(data.statewise[37].state);
	//  console.log(data.statewise[5].state);
	document.getElementById("t37").innerHTML = (data.statewise[37].confirmed);
	//  console.log(data.statewise[5].confirmed);
	document.getElementById("r37").innerHTML = (data.statewise[37].recovered);
	//	console.log(data.statewise[5].recovered);
	document.getElementById("d37").innerHTML = (data.statewise[37].deaths);
	//	console.log(data.statewise[5].deaths);
	
	
	
	/******************/

}




getData(); //showing the data


var interval = setInterval(function () {
	getData();
}, 120000);



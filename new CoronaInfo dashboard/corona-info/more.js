localStorage.setItem('show', 1);

// 0 means true
// 1 means false

function more() {

	if (localStorage.getItem('show') == 1) {
		localStorage.setItem('show', 0);
		for (i = 11; i <= 36; i++) {
			document.getElementById("s" + i).style.display = "flex";
			document.getElementById("more-less").innerHTML = "SHOW LESS";
			document.getElementById("state-card").style.height = "169vh";
			document.getElementById("card").style.height = "444vh";
		}
	} else {
		localStorage.setItem('show', 1);
		for (i = 11; i <= 36; i++) {
			document.getElementById("s" + i).style.display = "none";
			document.getElementById("more-less").innerHTML = "SHOW MORE";
			document.getElementById("state-card").style.height = "58.5vh";
			document.getElementById("card").style.height = "332vh";


		}
	}

}

window.onload=function()  //executes when the page finishes loading
{
	setTimeout(func1, 10000);  //sets a timer which calls function func1 after 2,000 milliseconds = 2 secs.
	
};
function func1()
{
	document.getElementById("thanks").style.transition = "all 10s ease";
	document.getElementById("thanks").style.display = "block";
	
}

function hide()
{
	document.getElementById("thanks").style.display = "none";
}
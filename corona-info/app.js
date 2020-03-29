var myVideo = document.getElementById("video");

function playPause() {
	if (myVideo.paused)
		myVideo.play();
	else
		myVideo.pause();
}
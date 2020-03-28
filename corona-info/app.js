const shareButton = document.querySelector('.share-button');

const title = window.document.title;
const url = window.document.location.href;

shareButton.addEventListener('click', => {
	if (navigator.share) {
		navigator.share({
			title: '$(title)',
			url: '$(url)'
		})
	}
});

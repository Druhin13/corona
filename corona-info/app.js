const shareButton = document.querySelector('.share-button');
const shareDialog = document.querySelector('.share-dialog');
const closeButton = document.querySelector('.close-button');

shareButton.addEventListener('click', event => {
  shareDialog.classList.add('is-open');
});

closeButton.addEventListener('click', event => {
  shareDialog.classList.remove('is-open');
});
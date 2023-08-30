const imageContainer = document.getElementById('meme-image-container');
const memeText = document.getElementById('meme-text');
const memeInput = document.getElementById('text-input');
const imageInput = document.getElementById('meme-insert');
const memeImage = document.getElementById('meme-image');
const thumbnails = document.querySelectorAll('.thumbnail');

function updateMemeText() {
  const inputText = memeInput.value;
  memeText.innerText = inputText;
}

function handleImageUpload(event) {
  const selectedImage = event.target.files[0];

  if (selectedImage) {
    const reader = new FileReader();

    reader.onload = (e) => {
      const imageUrl = e.target.result;
      memeImage.src = imageUrl;
    };

    reader.readAsDataURL(selectedImage);
  }
}

function fireBtn() {
  const button = document.getElementById('fire');
  button.style.backgroundColor = 'rgb(255, 0, 0)';
  button.addEventListener('click', () => {
    imageContainer.style.border = '3px dashed rgb(255, 0, 0)';
  });
}

function waterBtn() {
  const button = document.getElementById('water');
  button.style.backgroundColor = 'rgb(0, 0, 255)';
  button.addEventListener('click', () => {
    imageContainer.style.border = '5px double rgb(0, 0, 255)';
  });
}

function earthBtn() {
  const button = document.getElementById('earth');
  button.style.backgroundColor = 'rgb(0, 128, 0)';
  button.addEventListener('click', () => {
    imageContainer.style.border = '6px groove rgb(0, 128, 0)';
  });
}

thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener('click', () => {
    const thumbnailSrc = thumbnail.src;
    memeImage.src = thumbnailSrc;
  });
});

function render() {
  fireBtn();
  waterBtn();
  earthBtn();
  memeInput.addEventListener('input', updateMemeText);
  imageInput.addEventListener('change', handleImageUpload);
}

render();

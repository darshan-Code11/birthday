const showImageButton = document.getElementById('showImageButton');
const birthdayImage = document.getElementById('birthdayImage');

showImageButton.addEventListener('click', () => {
    birthdayImage.style.display = 'block'; // Make the image visible
    showImageButton.style.display = 'none'; // Hide the button after click
});
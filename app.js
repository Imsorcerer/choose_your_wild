let backButton = document.querySelector('back-button-2');
let cover= document.querySelector('.cover');
let canvas= document.querySelector('canvas');

backButton.addEventListener('click', () => {
  window.history.back();
});

canvas.addEventListener('click', () => {
  canvas.style.background = rgba(0, 0, 0, 0.5);
})


const h1Text = document.getElementById('h1-text');
let color = 'white';

function blinkText() {
  color = (color === 'white') ? 'red' : 'white';
  h1Text.style.color = color;
  setTimeout(blinkText, 1000);
}

blinkText();
console.log("Hello from JavaScript!");

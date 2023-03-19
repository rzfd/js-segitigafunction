// Import stylesheets
import './style.css';

// Write Javascript code!
// const appDiv = document.getElementById('app');
// appDiv.innerHTML = `<h1>JS Starter</h1>`;
const hitungLuas = () => {
  const alas = document.getElementById('alas').value;
  const tinggi = document.getElementById('tinggi').value;
  const luas = 0.5 * alas * tinggi;
  document.getElementById('luas').value = luas;
};

const button = document.getElementById('buttonHitung');
button.addEventListener('click', hitungLuas);

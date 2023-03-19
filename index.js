// Import stylesheets
import './style.css';

// Write Javascript code!
// const appDiv = document.getElementById('app');
// appDiv.innerHTML = `<h1>JS Starter</h1>`;
function hitungLuas() {
  const alas = document.getElementById(`alas`).values;
  const tinggi = document.getElementById(`tinggi`).values;
  const luas = 0.5 * alas * tinggi;
  document.getElementById(`luas`).values = luas;
};

const button = document.getElementById(`buttonHitung`);
button.addEventListener(`click`, hitungLuas);

const rootfile = document.getElementById('root');
const loader = document.querySelector('.loader');
const loads = document.querySelector('.loads');
const body = document.body;

let timeoutId;

function myFunction() {
  timeoutId = setTimeout(showPage, 1000);
}
function otherFunction(){
  loads.classList.add('active');
}

function showPage() {
  loader.classList.add('active');
  setTimeout(otherFunction, 1000);
  rootfile.style.display = "block";
  
  clearTimeout(timeoutId);
}

body.onload = myFunction;


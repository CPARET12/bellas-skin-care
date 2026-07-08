function handleSubmit(e){
e.preventDefault();
const msg = document.getElementById('formMsg');
if (msg) msg.style.display = 'block';
e.target.reset();
return false;
}


document.addEventListener('DOMContentLoaded', function(){
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
});
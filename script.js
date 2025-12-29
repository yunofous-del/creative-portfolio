const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');


hamburger.addEventListener('click', () => {
menu.classList.toggle('active');
});


// close menu when link clicked
document.querySelectorAll('.menu-overlay a').forEach(link => {
link.addEventListener('click', () => {
menu.classList.remove('active');
});
});

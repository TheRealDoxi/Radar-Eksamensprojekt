const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

// Klik på burger-menuen
burger.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Vis/skjul menuen
    burger.classList.toggle('toggle');  // Animer burger-ikonet
});


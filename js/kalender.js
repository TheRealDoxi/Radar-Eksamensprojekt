const monthNames = [
    "Januar", "Februar", "Marts", "April", "Maj", "Juni",
    "Juli", "August", "September", "Oktober", "November", "December"
];
document.querySelector('.calendar-month').textContent = monthNames[new Date().getMonth()];

// Hent alle dage i kalenderen
const days = document.querySelectorAll('.day');
let selectedDate = null; // Variabel til at gemme den valgte dato

// Funktion til at vælge en dato
days.forEach(day => {
    day.addEventListener('click', function() {
        // Fjern "selected" klassen fra alle dage
        days.forEach(d => d.classList.remove('selected'));
        // Tilføj "selected" til den valgte dag
        this.classList.add('selected');
        selectedDate = this.innerText; // Gem den valgte dato
    });
});

// Knap funktionalitet
const selectButton = document.querySelector('.select-button');
selectButton.addEventListener('click', function() {
    if (selectedDate) {
        alert('Du har valgt datoen: ' + selectedDate);
        // Fjern markeringen af den valgte dato
        days.forEach(d => d.classList.remove('selected'));
        selectedDate = null; // Nulstil den valgte dato
    } else {
        alert('Vælg venligst en dato først!');
    }
});


let currentIndex = 0; // Starter ved det første kort

function moveSlide(direction) {
    const slides = document.querySelectorAll('.slider-card');
    const totalSlides = slides.length;

    // Bestem hvor mange kort der skal vises baseret på skærmbredden
    let slidesToShow;
    if (window.innerWidth <= 480) {
        slidesToShow = 1; // 1 kort på mobil
    } else if (window.innerWidth <= 768) {
        slidesToShow = 2; // 2 kort på tablet
    } else {
        slidesToShow = 4; // 4 kort på desktop
    }

    // Beregn skubbeafstand - kun én kortbredde per klik på små skærme
    const slideWidth = 100 / slidesToShow; // F.eks. 25% per kort på desktop, 50% på tablet, 100% på mobil
    const slideShift = slideWidth; // Skubbe 100% af kortets bredde på mobil

    // Opdaterer den aktuelle index baseret på retningen
    currentIndex += direction;

    // Sørger for at currentIndex ikke går ud af grænserne
    if (currentIndex < 0) {
        currentIndex = totalSlides - slidesToShow; // Går til sidste sæt af slides
    } else if (currentIndex > totalSlides - slidesToShow) {
        currentIndex = 0; // Går tilbage til første sæt af slides
    }

    // Bevæger slideren ved at ændre transform egenskaben
    const slider = document.querySelector('.slider');
    slider.style.transform = `translateX(-${(currentIndex * slideWidth)}%)`; // Skubber slideren til venstre
}

// Tilføj event listeners til knapperne
document.querySelector('.left').addEventListener('click', () => moveSlide(-1)); // Venstre knap
document.querySelector('.right').addEventListener('click', () => moveSlide(1)); // Højre knap

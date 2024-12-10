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

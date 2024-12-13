


// Hent elementer fra DOM
const slider = document.querySelector('.slider');
const leftButton = document.querySelector('.left');
const rightButton = document.querySelector('.right');

// Variabler til styring af sliderens position
let currentSlide = 0;
const totalSlides = document.querySelectorAll('.slider-card').length;
const slideWidth = document.querySelector('.slider-card').offsetWidth + 15; // Beregn bredden af et kort inkl. margin

// Funktion til at opdatere sliderens position
function updateSliderPosition() {
    const newPosition = -(currentSlide * slideWidth); // Beregn hvor slideren skal flyttes
    slider.style.transform = `translateX(${newPosition}px)`; // Opdater sliderens position
}

// Funktion til at skifte til næste billede
function nextSlide() {
    if (currentSlide < totalSlides - 1) {
        currentSlide++; // Øg slide-nummeret
    } else {
        currentSlide = 0; // Gå tilbage til første billede
    }
    updateSliderPosition(); // Opdater positionen
}

// Funktion til at skifte til forrige billede
function prevSlide() {
    if (currentSlide > 0) {
        currentSlide--; // Reducer slide-nummeret
    } else {
        currentSlide = totalSlides - 1; // Gå til sidste billede
    }
    updateSliderPosition(); // Opdater positionen
}

// Event listeners til knapperne
rightButton.addEventListener('click', nextSlide); // Når højre knap klikkes, gå til næste slide
leftButton.addEventListener('click', prevSlide); // Når venstre knap klikkes, gå til forrige slide

// Initial opdatering af slideren
updateSliderPosition();






document.addEventListener("DOMContentLoaded", function () {
    const daysContainer = document.querySelector('.calendar-days');
    const monthTitle = document.querySelector('.calendar-title');
    const selectButton = document.getElementById('select-button');
    let selectedDate = null; // Holder styr på den valgte dato

    // Funktion til at generere kalenderdage
    function generateCalendar() {
        const daysInMonth = 31; // Antal dage i måneden
        const extraDays = 4; // Ekstra dage fra næste måned

        // Generer dage for den aktuelle måned
        for (let i = 1; i <= daysInMonth; i++) {
            const dayElement = document.createElement('div');
            dayElement.className = 'day';
            dayElement.textContent = i;
            dayElement.addEventListener('click', () => selectDay(dayElement, i));
            daysContainer.appendChild(dayElement);
        }

        // Generer ekstra dage fra næste måned
        for (let i = 1; i <= extraDays; i++) {
            const extraDayElement = document.createElement('div');
            extraDayElement.className = 'day extra';
            extraDayElement.textContent = i;
            extraDayElement.addEventListener('click', () => selectDay(extraDayElement, i));
            daysContainer.appendChild(extraDayElement);
        }
    }

    // Funktion til at håndtere valg af dag
    function selectDay(selectedElement, day) {
        // Fjern "selected"-klassen fra tidligere valgte dage
        document.querySelectorAll('.day').forEach(day => day.classList.remove('selected'));

        // Tilføj "selected"-klassen til den valgte dag
        selectedElement.classList.add('selected');

        // Gem den valgte dato
        selectedDate = `${day} ${monthTitle.textContent}`;

        // Aktivér knappen
        selectButton.disabled = false;
    }

    // Sæt den aktuelle måned i overskriften
    const currentMonth = new Date().toLocaleString('default', { month: 'long' });
    const currentYear = new Date().getFullYear();
    monthTitle.textContent = `${currentMonth} ${currentYear}`;

    // Generer kalenderen
    generateCalendar();

    // Funktion til at vise popup
    selectButton.addEventListener('click', function () {
        if (selectedDate) {
            const artists = [
                { name: "Bissevinet", image: "IMG/bissesvinet.jpg" },
                { name: "Gorgeous", image: "IMG/gorgeuys.jpg" },
                { name: "Anna Roemer", image: "IMG/annaroemer.jpg" }
            ];

            // Vælg en tilfældig kunstner
            const randomArtist = artists[Math.floor(Math.random() * artists.length)];

            // Opret popup-indhold
            const popupContent = `
                <div style="background-color: #fff; padding: 20px; border-radius: 10px; text-align: center; max-width: 400px; margin: 0 auto;">
                    <h2>Du har valgt ${selectedDate}</h2>
                    <p>På denne dag spiller:</p>
                    <img src="${randomArtist.image}" alt="${randomArtist.name}" style="width: 150px; border-radius: 10px; margin-bottom: 10px;">
                    <h3>${randomArtist.name}</h3>
                    <button onclick="closePopup()" style="padding: 10px 20px; background-color: #A41045; color: white; border: none; border-radius: 10px; cursor: pointer;">Luk</button>
                </div>
            `;

            // Vis popup
            const popupOverlay = document.createElement('div');
            popupOverlay.id = 'popup-overlay';
            popupOverlay.style.position = 'fixed';
            popupOverlay.style.top = '0';
            popupOverlay.style.left = '0';
            popupOverlay.style.width = '100vw';
            popupOverlay.style.height = '100vh';
            popupOverlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
            popupOverlay.style.display = 'flex';
            popupOverlay.style.justifyContent = 'center';
            popupOverlay.style.alignItems = 'center';
            popupOverlay.style.zIndex = '1000';
            popupOverlay.innerHTML = popupContent;

            document.body.appendChild(popupOverlay);

            // Fjern markering af den valgte dato
            document.querySelectorAll('.day').forEach(day => day.classList.remove('selected'));

            // Nulstil valgt dato
            selectedDate = null;

            // Deaktiver knappen
            selectButton.disabled = true;
        }
    });
});

// Funktion til at lukke popup
function closePopup() {
    const popupOverlay = document.getElementById('popup-overlay');
    if (popupOverlay) {
        document.body.removeChild(popupOverlay);
    }
}

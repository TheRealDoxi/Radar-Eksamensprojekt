const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

// Klik på burger-menuen
burger.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Vis/skjul menuen
    burger.classList.toggle('toggle');  // Animer burger-ikonet
});


// JavaScript til at håndtere klik på dropdown-pilen
document.addEventListener('DOMContentLoaded', function() {
    // Find alle dropdown-pile (span-elementer)
    const dropdownArrows = document.querySelectorAll('.dropdown-arrow');
    
    // Gå igennem alle pilene og tilføj event listener
    dropdownArrows.forEach(arrow => {
        arrow.addEventListener('click', function(event) {
            event.preventDefault();  // Forhindrer linket i at navigere
            const parentLi = this.closest('li'); // Find den nærmeste li (nav-item)
            parentLi.classList.toggle('active'); // Toggle dropdown-menuen
        });
    });

    // Hvis du vil klikke udenfor for at lukke dropdowns
    document.addEventListener('click', function(event) {
        // Hvis klik ikke er på dropdown-menuen eller pilen, luk alle dropdowns
        if (!event.target.closest('.nav-item')) {
            document.querySelectorAll('.nav-item').forEach(item => {
                item.classList.remove('active');
            });
        }
    });
});
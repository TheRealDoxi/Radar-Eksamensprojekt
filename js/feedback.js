document.querySelectorAll('.star').forEach(star => {
    star.addEventListener('click', function() {
      const value = this.getAttribute('data-value');
      
      // Fjern "selected" klasse fra alle stjerner
      document.querySelectorAll('.star').forEach(star => {
        star.classList.remove('selected');
      });
      
      // Marker de ønskede antal stjerner som valgte
      for (let i = 0; i < value; i++) {
        document.querySelectorAll('.star')[i].classList.add('selected');
      }
    });
  });
  

  function showThankYouMessage() {
    const thankYouMessage = document.getElementById('thankYouMessage');
    const feedbackTextbox = document.querySelector('.feedback-textbox');
    
    // Tjek om brugeren har skrevet noget i tekstboksen
    if (feedbackTextbox.value.trim() === "") {
      alert("Venligst skriv din feedback, før du sender den.");
      return;
    }
  
    // Vis beskeden
    thankYouMessage.style.display = "block";
  
    // Start animationen (fade-in)
    setTimeout(() => {
      thankYouMessage.style.opacity = "1";
    }, 50);
  
    // Skjul beskeden igen efter 3 sekunder
    setTimeout(() => {
      thankYouMessage.style.opacity = "0";
      setTimeout(() => {
        thankYouMessage.style.display = "none";
      }, 500); // Vent på, at fade-out er færdig
    }, 3000);
  
    // Ryd tekstboksen
    feedbackTextbox.value = "";
  }
  
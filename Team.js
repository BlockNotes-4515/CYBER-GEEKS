const slider = document.querySelector('.slider-wrapper');
const totalCards = document.querySelectorAll('.card').length; // Get total number of cards
let currentIndex = 0;

function slideCards() {
  currentIndex++;
  
  // Reset the index when reaching the last card
  if (currentIndex >= totalCards / 2) { 
    currentIndex = 0;
  }
  
  slider.style.transform = `translateX(-${currentIndex * 50}%)`;
}

// Auto slide every 3 seconds
setInterval(slideCards, 3000);

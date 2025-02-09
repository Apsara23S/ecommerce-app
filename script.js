// Close the signup banner
document.querySelector(".close-btn").addEventListener("click", function() {
    document.querySelector(".signup-banner").style.display = "none";
});

// Carousel Functionality
let currentIndex = 0;
const slides = document.querySelector(".slides");
const totalSlides = document.querySelectorAll(".slide").length;

document.querySelector(".next").addEventListener("click", function() {
    if (currentIndex < totalSlides - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateCarousel();
});

document.querySelector(".prev").addEventListener("click", function() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalSlides - 1;
    }
    updateCarousel();
});

function updateCarousel() {
    slides.style.transform =`translateX(-${currentIndex * 100}%)`;
}
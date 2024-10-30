
// Add interactivity here if needed in the future
let slideIndex = 0;
let slides = document.getElementsByClassName("slides");
let dots = document.getElementsByClassName("dot");
let autoSlideInterval;
    function toggleMenu() {
        var navbar = document.querySelector('.navbar');
        if (navbar.style.display === "flex") {
            navbar.style.display = "none";
        } else {
            navbar.style.display = "flex";
        }
    }
     function openMenu() {
        document.getElementById(".navbar").style.display = "flex";
    }

    function closeMenu() {
        //document.getElementById(".navbar").style.display = "none";
          var navbar = document.querySelector('.navbar');
        if (navbar.style.display === "flex") {
            navbar.style.display = "none";
        } else {
            navbar.style.display = "flex";
        }
    }
// Initialize slideshow
showSlides();

// Show current slide and automatically advance every 5 seconds
function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
        slides[i].classList.remove("active-slide");
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}

    slides[slideIndex - 1].style.display = "block";
    slides[slideIndex - 1].classList.add("active-slide");
    dots[slideIndex - 1].className += " active";

    autoSlideInterval = setTimeout(showSlides, 5000); // Change slide every 5 seconds
}

// Next/previous controls
function plusSlides(n) {
    clearTimeout(autoSlideInterval); // Stop automatic sliding
    showManualSlide(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    clearTimeout(autoSlideInterval); // Stop automatic sliding
    showManualSlide(slideIndex = n);
}

// Manually show selected slide
function showManualSlide(n) {
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
        slides[i].classList.remove("active-slide");
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    slides[slideIndex - 1].classList.add("active-slide");
    dots[slideIndex - 1].className += " active";

    autoSlideInterval = setTimeout(showSlides, 5000); // Restart auto-sliding after manual control
}


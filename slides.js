// Initialize slideshows on window load
window.onload = function () {
    initializeSlideshows();
};

function initializeSlideshows() {
    const slideshows = document.getElementsByClassName('slideshow-container');
    for (let i = 0; i < slideshows.length; i++) {
        const slideshow = slideshows[i];
        slideshow.setAttribute('data-slide-index', 1);
        showSlides(1, slideshow.id);
    }
}

// Next/previous controls
function plusSlides(n, slideshowId) {
    const slideshow = document.getElementById(slideshowId);
    let slideIndex = parseInt(slideshow.getAttribute('data-slide-index')) + n;
    const slides = slideshow.getElementsByClassName("mySlides");

    // Wrap around if the index exceeds the bounds
    if (slideIndex > slides.length) { slideIndex = 1; }
    if (slideIndex < 1) { slideIndex = slides.length; }

    slideshow.setAttribute('data-slide-index', slideIndex);
    showSlides(slideIndex, slideshowId);
}

// Thumbnail image controls
function currentSlide(n, slideshowId) {
    const slideshow = document.getElementById(slideshowId);
    slideshow.setAttribute('data-slide-index', n);
    showSlides(n, slideshowId);
}

function showSlides(n, slideshowId) {
    const slideshow = document.getElementById(slideshowId);
    const slides = slideshow.getElementsByClassName("mySlides");
    const dots = slideshow.nextElementSibling.getElementsByClassName("dot");

    if (n > slides.length) { n = 1; }
    if (n < 1) { n = slides.length; }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[n - 1].style.display = "block";
    if (dots.length > 0) {
        dots[n - 1].className += " active";
    }
}

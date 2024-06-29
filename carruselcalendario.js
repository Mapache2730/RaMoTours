document.addEventListener('DOMContentLoaded', function() {
    let slideIndex = 0;
    showSlides(slideIndex);

    function showSlides(n) {
        const slides = document.getElementsByClassName("carrusel-slide");
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex].style.display = "block";
    }

    function changeSlide(n) {
        slideIndex += n;
        if (slideIndex >= document.getElementsByClassName("carrusel-slide").length) {
            slideIndex = 0;
        } else if (slideIndex < 0) {
            slideIndex = document.getElementsByClassName("carrusel-slide").length - 1;
        }
        showSlides(slideIndex);
    }

    document.querySelector('.prev').addEventListener('click', function() {
        changeSlide(-1);
    });

    document.querySelector('.next').addEventListener('click', function() {
        changeSlide(1);
    });
});

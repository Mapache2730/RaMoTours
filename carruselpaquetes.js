document.addEventListener('DOMContentLoaded', function() {
    const paquetes1Slides = document.querySelectorAll('.paquetes .paq-slide');
    const paquetes2Slides = document.querySelectorAll('.paquetes2 .paq-slide');
    const paquetes3Slides = document.querySelectorAll('.paquetes3 .paq-slide');
    let index1 = 0;
    let index2 = 0;
    let index3 = 0;

    function showSlide(slides, index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
    }

    function nextSlide(slides, index) {
        return (index + 1) % slides.length;
    }

    setInterval(() => {
        index1 = nextSlide(paquetes1Slides, index1);
        showSlide(paquetes1Slides, index1);
    }, 5000);

    setInterval(() => {
        index2 = nextSlide(paquetes2Slides, index2);
        showSlide(paquetes2Slides, index2);
    }, 5000);

    setInterval(() => {
        index3 = nextSlide(paquetes3Slides, index3);
        showSlide(paquetes3Slides, index3);
    }, 5000);
});

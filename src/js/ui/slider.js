/* Controlador del Hero Slider */
export function initSlider() {
    // 1. Inicializar Hero Slider Principal (Home)
    const homeSlides = document.querySelectorAll('.slide-item');
    const homeDots = document.querySelectorAll('.dot');
    const homePrevBtn = document.querySelector('.slider-btn.prev');
    const homeNextBtn = document.querySelector('.slider-btn.next');

    if (homeSlides.length) {
        setupCarousel(homeSlides, homeDots, homePrevBtn, homeNextBtn, 5000);
    }

    // 2. Inicializar Carrusel del VCE (Mes Patrio)
    const vceSlides = document.querySelectorAll('.vce-slide');
    const vceDots = document.querySelectorAll('.vce-dot');
    const vcePrevBtn = document.querySelector('.vce-prev-btn');
    const vceNextBtn = document.querySelector('.vce-next-btn');

    if (vceSlides.length) {
        setupCarousel(vceSlides, vceDots, vcePrevBtn, vceNextBtn, 6000);
    }
}

function setupCarousel(slides, dots, prevBtn, nextBtn, intervalTime = 5000) {
    let currentIndex = 0;
    let autoPlayTimer = null;

    function goToSlide(index) {
        slides[currentIndex].classList.remove('active');
        if (slides[currentIndex].style) {
            slides[currentIndex].style.opacity = '0';
            slides[currentIndex].style.visibility = 'hidden';
        }
        if (dots[currentIndex]) dots[currentIndex].classList.remove('active');

        currentIndex = (index + slides.length) % slides.length;

        slides[currentIndex].classList.add('active');
        if (slides[currentIndex].style) {
            slides[currentIndex].style.opacity = '1';
            slides[currentIndex].style.visibility = 'visible';
        }
        if (dots[currentIndex]) dots[currentIndex].classList.add('active');
    }

    function nextSlide() {
        goToSlide(currentIndex + 1);
    }

    function prevSlide() {
        goToSlide(currentIndex - 1);
    }

    function startAutoPlay() {
        stopAutoPlay();
        autoPlayTimer = setInterval(nextSlide, intervalTime);
    }

    function stopAutoPlay() {
        if (autoPlayTimer) clearInterval(autoPlayTimer);
    }

    if (nextBtn) nextBtn.addEventListener('click', () => { nextSlide(); startAutoPlay(); });
    if (prevBtn) prevBtn.addEventListener('click', () => { prevSlide(); startAutoPlay(); });

    dots.forEach((dot, idx) => {
        dot.addEventListener('click', () => {
            goToSlide(idx);
            startAutoPlay();
        });
    });

    startAutoPlay();
}


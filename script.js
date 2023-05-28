const carousel = document.querySelector('.carousel');
const carouselContainer = carousel.querySelector('.carousel-container');
const carouselSlides = carousel.querySelectorAll('.carousel-slide');
const carouselPrev = carousel.querySelector('.carousel-prev');
const carouselNext = carousel.querySelector('.carousel-next');
const carouselDots = carousel.querySelectorAll('.carousel-dot');

const slideWidth = carouselSlides[0].clientWidth;
let slideIndex = 0;

function updateDots() {
  carouselDots.forEach(dot => {
    dot.classList.remove('active');
  });
  carouselDots[slideIndex].classList.add('active');
}

carouselDots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    slideIndex = index;
    carouselContainer.style.transform = `translateX(-${slideWidth * slideIndex}px)`;
    updateDots();
  });
});

carouselNext.addEventListener('click', () => {
  slideIndex++;
  if (slideIndex > carouselSlides.length - 1) {
    slideIndex = 0;
  }
  carouselContainer.style.transform = `translateX(-${slideWidth * slideIndex}px)`;
  updateDots();
});

carouselPrev.addEventListener('click', () => {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = carouselSlides.length - 1;
  }
  carouselContainer.style.transform = `translateX(-${slideWidth * slideIndex}px)`;
  updateDots();
});

setInterval(() => {
  slideIndex++;
  if (slideIndex > carouselSlides.length - 1) {
    slideIndex = 0;
  }
  carouselContainer.style.transform = `translateX(-${slideWidth * slideIndex}px)`;
  updateDots();
}, 5000);

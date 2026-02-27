document.addEventListener("DOMContentLoaded", function () {
  const slider = document.getElementById("slider");

  if (!slider) return; // Evita errores si no existe el slider

  const slides = slider.children;
  const dots = document.querySelectorAll(".dot");
  const totalSlides = slides.length;

  let currentSlide = 0;
  let autoSlideInterval;

  function updateSlider() {
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;

    dots.forEach((dot, index) => {
      if (index === currentSlide) {
        dot.classList.remove("bg-gray-300");
        dot.classList.add("bg-blue-900");
      } else {
        dot.classList.remove("bg-blue-900");
        dot.classList.add("bg-gray-300");
      }
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlider();
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlider();
  }

  function goToSlide(index) {
    currentSlide = index;
    updateSlider();
    resetAutoSlide();
  }

  function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 5000);
  }

  function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
  }

  // Hacer funciones globales para botones onclick
  window.nextSlide = function () {
    nextSlide();
    resetAutoSlide();
  };

  window.prevSlide = function () {
    prevSlide();
    resetAutoSlide();
  };

  window.goToSlide = function (index) {
    goToSlide(index);
  };

  // Inicializar
  updateSlider();
  startAutoSlide();
});

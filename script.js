document.addEventListener("DOMContentLoaded", function () {
  // HERO ANIMATION
  window.addEventListener("load", function () {
    function reveal(id, delay) {
      const el = document.getElementById(id);
      if (!el) return;

      setTimeout(() => {
        el.classList.remove("hero-hidden");
        el.classList.add("hero-show");
      }, delay);
    }

    reveal("hero-title", 200);
    reveal("hero-subtitle", 600);
    reveal("hero-buttons", 1000);
  });

  // SERVICES SCROLL ANIMATION
  const cards = document.querySelectorAll(".service-card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.2 },
  );

  cards.forEach((card) => observer.observe(card));
});

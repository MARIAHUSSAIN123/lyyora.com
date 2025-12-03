document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".fade-up, .fade-left, .fade-right");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-show");
      }
    });
  }, { threshold: 0.2 });

  items.forEach(el => observer.observe(el));
});
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  item.querySelector(".faq-question").addEventListener("click", () => {
    item.classList.toggle("active");
  });
});

  function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');

    reveals.forEach((el) => {
      let top = el.getBoundingClientRect().top;
      let windowHeight = window.innerHeight;

      if (top < windowHeight - 100) {
        el.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();

  AOS.init({
    duration: 1000,   // Animation speed
    once: false,      // Animation repeat on scroll
    easing: "ease-out-cubic",
    offset: 120,
  });
 



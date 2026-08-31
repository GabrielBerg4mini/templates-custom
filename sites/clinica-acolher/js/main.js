document.addEventListener('DOMContentLoaded', () => {
  initRevealOnScroll();
  initTestimonials();
});

// Bootstrap (navbar, collapse, etc.) já cuida de si mesmo via data-bs-*.
// Aqui só ficam: reveal-on-scroll e o carrossel simples de depoimentos
// (não usamos Swiper — é só um fade entre 3 blocos de texto, sem
// necessidade de navegação horizontal real).

function initRevealOnScroll() {
  const items = document.querySelectorAll('[data-reveal]');
  if (!items.length) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    items.forEach((item) => item.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  items.forEach((item) => observer.observe(item));
}

function initTestimonials() {
  const testimonial = document.querySelector('.testimonial');
  if (!testimonial) return;

  const slides = Array.from(testimonial.querySelectorAll('.testimonial__slide'));
  const dots = Array.from(testimonial.querySelectorAll('.testimonial__nav button'));
  if (slides.length < 2) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let current = slides.findIndex((slide) => slide.classList.contains('is-active'));
  if (current < 0) current = 0;
  let timer = null;

  function show(index) {
    slides[current].classList.remove('is-active');
    dots[current]?.classList.remove('is-active');
    dots[current]?.setAttribute('aria-current', 'false');

    current = (index + slides.length) % slides.length;

    slides[current].classList.add('is-active');
    dots[current]?.classList.add('is-active');
    dots[current]?.setAttribute('aria-current', 'true');
  }

  function restartAutoplay() {
    if (prefersReducedMotion) return;
    clearInterval(timer);
    timer = setInterval(() => show(current + 1), 7000);
  }

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      show(index);
      restartAutoplay();
    });
  });

  restartAutoplay();
}

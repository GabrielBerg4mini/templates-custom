document.addEventListener('DOMContentLoaded', () => {
  initRevealOnScroll();
  initSwipers();
  initHeaderScrollState();
});

// Bootstrap (navbar, collapse, etc.) já cuida de si mesmo via data-bs-*.
// Aqui só ficam: reveal-on-scroll, o estado do header ao rolar (v0 troca o
// fundo do header por um vidro translúcido após 24px de scroll) e o init
// do Swiper.

function initHeaderScrollState() {
  const header = document.querySelector('[data-header]');
  if (!header) return;

  const onScroll = () => {
    header.classList.toggle('is-scrolled', window.scrollY > 24);
  };

  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

function initRevealOnScroll() {
  const items = document.querySelectorAll('[data-reveal]');
  if (!items.length) return;

  if (!('IntersectionObserver' in window)) {
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

function initSwipers() {
  document.querySelectorAll('.swiper').forEach((el) => {
    // Quantos slides mostrar a partir do tablet (>=768px).
    // Ex.: <div class="swiper" data-slides-per-view="2">
    const perView = Number(el.dataset.slidesPerView) || 1;

    new Swiper(el, {
      loop: true,
      spaceBetween: 24,
      slidesPerView: 1,
      breakpoints: {
        768: { slidesPerView: perView },
      },
      autoplay: { delay: 6000, disableOnInteraction: false },
      pagination: { el: el.querySelector('.swiper-pagination'), clickable: true },
      navigation: {
        nextEl: el.querySelector('.swiper-button-next'),
        prevEl: el.querySelector('.swiper-button-prev'),
      },
    });
  });
}

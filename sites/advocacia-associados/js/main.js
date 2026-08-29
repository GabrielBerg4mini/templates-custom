document.addEventListener('DOMContentLoaded', () => {
  initRevealOnScroll();
  initSwipers();
  initHeaderScroll();
  initCopyrightYear();
});

// Bootstrap (navbar, collapse, etc.) já cuida de si mesmo via data-bs-*.
// Aqui só ficam: reveal-on-scroll (Bootstrap não tem), o init do Swiper,
// o estado "rolado" da navbar e o ano do rodapé.

// Réplica do useScrolled(40) do design de referência: a navbar nasce
// transparente sobre o hero e ganha fundo/blur/sombra após 40px de rolagem.
function initHeaderScroll() {
  const header = document.querySelector('.navbar');
  if (!header) return;

  const onScroll = () => {
    header.classList.toggle('is-scrolled', window.scrollY > 40);
  };

  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

function initCopyrightYear() {
  const el = document.getElementById('copyright-year');
  if (el) el.textContent = new Date().getFullYear();
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

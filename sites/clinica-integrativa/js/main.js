document.addEventListener('DOMContentLoaded', () => {
  initRevealOnScroll();
  initSwipers();
  initStickyNav();
  initServicesScroll();
  initWhatsAppFloat();
});

// Bootstrap (navbar, collapse, etc.) já cuida de si mesmo via data-bs-*.
// Aqui só ficam: reveal-on-scroll (Bootstrap não tem), o init do Swiper
// (não usado nesta página, mas mantido por convenção entre os sites) e os
// pequenos comportamentos específicos deste layout.

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
    { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
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

// Header transparente no topo, com fundo/blur ao rolar — igual ao design aprovado.
function initStickyNav() {
  const nav = document.getElementById('siteNav');
  if (!nav) return;

  const onScroll = () => nav.classList.toggle('is-scrolled', window.scrollY > 40);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

// Setas prev/next do carrossel de tratamentos — rolagem suave por CSS scroll-snap.
function initServicesScroll() {
  const container = document.querySelector('[data-scroll-container]');
  if (!container) return;

  document.querySelectorAll('[data-scroll]').forEach((button) => {
    button.addEventListener('click', () => {
      const amount = container.clientWidth * 0.85;
      const direction = button.dataset.scroll === 'left' ? -1 : 1;
      container.scrollBy({ left: amount * direction, behavior: 'smooth' });
    });
  });
}

// Botão flutuante do WhatsApp só aparece depois de uma pequena rolagem.
function initWhatsAppFloat() {
  const button = document.getElementById('whatsappFloat');
  if (!button) return;

  const onScroll = () => button.classList.toggle('is-visible', window.scrollY > 300);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

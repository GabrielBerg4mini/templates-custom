document.addEventListener('DOMContentLoaded', () => {
  initRevealOnScroll();
  initSwipers();
  initHeaderScrollState();
  initWhatsAppFloat();
});

// Bootstrap (navbar, collapse, etc.) já cuida de si mesmo via data-bs-*.
// Aqui só ficam: reveal-on-scroll (Bootstrap não tem), o init do Swiper,
// o estado "rolado" do header e o balão do botão flutuante do WhatsApp.

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

// Header transparente vira branco/desfocado com sombra após ~40px de
// rolagem — mesmo comportamento do hook useScrolled(40) do design de referência.
function initHeaderScrollState() {
  const nav = document.getElementById('siteNav');
  if (!nav) return;

  const threshold = 40;
  const onScroll = () => {
    nav.classList.toggle('is-scrolled', window.scrollY > threshold);
  };

  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

// Botão flutuante do WhatsApp: aparece com um pequeno atraso e mostra um
// balão de dica alguns segundos depois, que se fecha sozinho (ou no clique
// do X) — replica o comportamento e os tempos do componente de referência.
function initWhatsAppFloat() {
  const wrap = document.getElementById('whatsappFloat');
  const tooltip = document.getElementById('whatsappTooltip');
  const closeBtn = document.getElementById('whatsappTooltipClose');
  if (!wrap || !tooltip) return;

  const showTimer = setTimeout(() => wrap.classList.add('is-visible'), 1200);
  const tooltipShowTimer = setTimeout(() => tooltip.classList.add('is-visible'), 3500);
  const tooltipHideTimer = setTimeout(() => tooltip.classList.remove('is-visible'), 9000);

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      tooltip.classList.remove('is-visible');
      clearTimeout(tooltipShowTimer);
      clearTimeout(tooltipHideTimer);
    });
  }

  window.addEventListener('beforeunload', () => {
    clearTimeout(showTimer);
    clearTimeout(tooltipShowTimer);
    clearTimeout(tooltipHideTimer);
  });
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

document.addEventListener('DOMContentLoaded', () => {
  initRevealOnScroll();
  initHeader();
  initDifferentials();
  initBeforeAfterSlider();
  initReviewsCarousel();
  initWhatsAppWidget();
});

// Bootstrap (bundle JS) só é usado aqui para utilidades que ele já resolve
// sozinho via data-bs-*; nada neste arquivo depende dele.

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

// Header fixo: fica "glass" ao rolar (equivalente ao useState(scrolled) do v0)
// e abre/fecha o menu mobile por toggle simples de classe.
function initHeader() {
  const header = document.getElementById('site-header');
  const toggle = document.getElementById('site-header-toggle');
  const mobileNav = document.getElementById('site-header-mobile');
  if (!header) return;

  const onScroll = () => {
    header.classList.toggle('is-scrolled', window.scrollY > 24);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  if (toggle && mobileNav) {
    toggle.addEventListener('click', () => {
      const isOpen = mobileNav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(isOpen));
      toggle.innerHTML = isOpen ? '<i class="bi bi-x-lg"></i>' : '<i class="bi bi-list"></i>';
    });

    mobileNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.innerHTML = '<i class="bi bi-list"></i>';
      });
    });
  }
}

// Cards "Diferenciais": um card fica ativo por vez, trocado ao passar o
// mouse, focar ou clicar — espelha o useState(active) do componente React.
function initDifferentials() {
  const cards = document.querySelectorAll('[data-tech-card]');
  if (!cards.length) return;

  const setActive = (target) => {
    cards.forEach((card) => card.classList.toggle('is-active', card === target));
  };

  cards.forEach((card) => {
    card.addEventListener('mouseenter', () => setActive(card));
    card.addEventListener('focus', () => setActive(card));
    card.addEventListener('click', () => setActive(card));
  });
}

// Slider "antes / depois": arraste horizontal (mouse ou toque) que move a
// variável CSS --pos, usada por um clip-path para revelar a foto "antes".
function initBeforeAfterSlider() {
  const frame = document.getElementById('ba-frame');
  const handle = document.getElementById('ba-handle');
  if (!frame || !handle) return;

  let dragging = false;

  const setFromClientX = (clientX) => {
    const rect = frame.getBoundingClientRect();
    const raw = ((clientX - rect.left) / rect.width) * 100;
    const pos = Math.min(98, Math.max(2, raw));
    frame.style.setProperty('--pos', pos + '%');
  };

  frame.addEventListener('pointerdown', (e) => {
    dragging = true;
    setFromClientX(e.clientX);
  });

  handle.addEventListener('pointerdown', (e) => {
    e.stopPropagation();
    dragging = true;
  });

  window.addEventListener('pointermove', (e) => {
    if (!dragging) return;
    setFromClientX(e.clientX);
  });

  window.addEventListener('pointerup', () => {
    dragging = false;
  });
}

// Carrossel manual de avaliações (sem Swiper): alterna entre os 3
// depoimentos via bolinhas de paginação ou setas prev/next.
function initReviewsCarousel() {
  const slides = document.querySelectorAll('[data-review-slide]');
  const dotsContainers = document.querySelectorAll('#review-dots');
  if (!slides.length) return;

  let index = 0;

  const buildDots = () => {
    dotsContainers.forEach((container) => {
      container.innerHTML = '';
      slides.forEach((_, i) => {
        const dot = document.createElement('button');
        dot.type = 'button';
        dot.setAttribute('aria-label', `Ver avaliação ${i + 1}`);
        if (i === index) dot.classList.add('is-active');
        dot.addEventListener('click', () => goTo(i));
        container.appendChild(dot);
      });
    });
  };

  const render = () => {
    slides.forEach((slide, i) => {
      slide.classList.toggle('is-active', i === index);
    });
    buildDots();
  };

  const goTo = (i) => {
    index = (i + slides.length) % slides.length;
    render();
  };

  document.querySelectorAll('[data-review-prev]').forEach((btn) => {
    btn.addEventListener('click', () => goTo(index - 1));
  });
  document.querySelectorAll('[data-review-next]').forEach((btn) => {
    btn.addEventListener('click', () => goTo(index + 1));
  });

  render();
}

// Widget do WhatsApp: aparece após um pequeno atraso e abre/fecha o
// balão de chat ao clicar no botão flutuante.
function initWhatsAppWidget() {
  const fab = document.getElementById('whatsapp-fab');
  const panel = document.getElementById('whatsapp-panel');
  const closeBtn = document.getElementById('whatsapp-close');
  if (!fab || !panel) return;

  setTimeout(() => fab.classList.add('is-visible'), 1200);

  fab.addEventListener('click', () => {
    panel.classList.toggle('is-open');
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => panel.classList.remove('is-open'));
  }
}
